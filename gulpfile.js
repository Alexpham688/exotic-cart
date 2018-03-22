var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');

gulp.task('imagemin', () =>
  gulp.src('img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./images/'))
);

gulp.task('sass', function() {
  gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/'));
});

gulp.task('default', ['imagemin','sass']);
gulp.task('watch', function() {
  gulp.watch('img/*', ['imagemin']);
  gulp.watch('sass/**/*.scss', ['sass']);
});
