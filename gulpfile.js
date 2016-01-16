const gulp = require('gulp');
const mocha = require('gulp-mocha');
const browserify = require('browserify');
const tsify = require('tsify');
const source = require('vinyl-source-stream');

const espowerTypescript = require('espower-typescript/guess');

gulp.task('browserify', () => {
  return browserify({ entries: ['./src/app.ts']})
    .plugin(tsify)
    .bundle()
    .pipe(source('./dist/app.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('mocha', () => {
  return gulp.src(['test/*.ts'])
    .pipe(mocha({
        reporter: 'nyan',
        compilers: { ts: espowerTypescript }
      }));
});

gulp.task('default', ['browserify']);
