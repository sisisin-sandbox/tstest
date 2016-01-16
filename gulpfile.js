const gulp = require('gulp');
const browserify = require('browserify');
const tsify = require('tsify');
const source = require('vinyl-source-stream');

gulp.task('browserify', () => {
  return browserify({ entries: ['./src/app.ts']})
    .plugin(tsify)
    .bundle()
    .pipe(source('./dist/app.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['browserify']);
