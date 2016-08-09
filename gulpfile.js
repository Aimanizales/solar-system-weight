var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
});


// clean build files
gulp.task('clean', function () {
  return del([
    'public'
  ]);
});
