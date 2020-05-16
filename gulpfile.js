const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const cssmin = require("gulp-cssmin");
const rename = require("gulp-rename");

gulp.task('hello', function(done) {
  console.log('Привет, мир!');
  done();
});

// Static server
gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./*.html").on("change", browserSync.reload);
});

gulp.task("cssMin", function (done) {
  gulp.src("css/**/*.css", {dot: true, ignore: "**/*.min.css"})
      .pipe(cssmin())
      .pipe(rename({ suffix: ".min" }))
      .pipe(gulp.dest("css"));
  done();
});