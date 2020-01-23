const gulp = require('gulp');
const browserSync = require('browser-sync').create();

function watch() {

  browserSync.init({
      notify: false,
      server: {
        baseDir: './src'
      }
  });
  gulp.watch('./src/*.css').on('change', browserSync.reload);
  gulp.watch('./src/*.html').on('change', browserSync.reload)


}

exports.watch = watch;
