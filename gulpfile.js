const gulp = require('gulp');
const argv = require('yargs').argv;

gulp.task('copy components', function () {
  return gulp.src('./components/**/*.*')
    .pipe(gulp.dest(`/Users/${argv.user}/Desktop/nextPlayground/mevocomp-playground/components`));
});

gulp.task('default', gulp.series('copy components'));

// run command: `gulp --user omevora`