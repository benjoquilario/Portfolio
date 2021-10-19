const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browserSync = require('browser-sync').create();

//Sass task
function scssTask() {
  return src('app/scss/style.scss', { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([cssnano()]))
    .pipe(dest('dist', { sourcemaps: '.' }));
}

//javascript task
function jsTask() {
  return src('app/js/script.js', { sourcemaps: true })
    .pipe(terser())
    .pipe(dest('dist', { sourcemaps: '.' }));
}

//BrowserSync
function browserSyncServer(cb) {
  browserSync.init({
    server: {
      baseDir: '.',
    },
  });
  cb();
}

function browserSyncReload(cb) {
  browserSync.reload();
  cb();
}

//Watch task
function watchTask() {
  watch('*.html', browserSyncReload);
  watch(
    ['app/scss/**/*.scss', 'app/js/**/*.js'],
    series(scssTask, jsTask, browserSyncReload)
  );
}

//Default gulp task
exports.default = series(scssTask, jsTask, browserSyncServer, watchTask);