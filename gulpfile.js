var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('concat', function() {
  return gulp.src('./dist/element-with-md-button/*.js')
    .pipe(concat('app-component.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('rename', function() {
  return gulp.src('./dist/element-with-md-button/styles.css')
    .pipe(rename('app-component.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['concat', 'rename']);
