var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    sass = require('gulp-sass');


    gulp.task('sass', function () {

    var plugins = [
      autoprefixer('last 2 versions')
    ];
      return gulp.src('./*.scss')
        .pipe(postcss(plugins))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));

});

gulp.task('watch', function () {
  gulp.watch('./*.scss', ['sass']);
});
