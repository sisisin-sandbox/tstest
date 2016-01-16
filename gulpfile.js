const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

gulp.task('tsc', () => {
  return gulp.src('src/*.ts')
    .pipe(ts(tsProject))
    .pipe(gulp.dest('dist/'));
});