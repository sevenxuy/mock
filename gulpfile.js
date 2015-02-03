var gulp = require('gulp'),
  connect = require('gulp-connect'),
  livereload = require('gulp-livereload'),
  // compass = require('gulp-compass'),
  // base64 = require('gulp-base64'),
  jshint = require('gulp-jshint');

/*gulp.task('compass', function() {
  gulp.src('./src/css/*.scss')
    .pipe(compass({
      sass: './src/css',
      image: './src/img',
      relative: true,
      comments: true
    }))
    .pipe(base64())
    .pipe(gulp.dest('./src/css'))
    .pipe(connect.reload());

});*/

gulp.task('jshint', function() {
  gulp.src('./src/js/app/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'));
});

gulp.task('watch', function() {
  gulp.watch(['./src/css/*.scss'], ['compass']);
  gulp.watch(['./src/js/app/*.js'], ['jshint']);
});

gulp.task('connect', function() {
  connect.server({
    root: ['src'],
    host: 'localhost',
    port: 9999,
    livereload: true
  });
});

gulp.task('default', ['connect', 'watch']);
