const gulp = require('gulp');
const ts = require('gulp-typescript');
const browserify = require('browserify');
const source = require('vinyl-source-stream');

const tsProject = ts.createProject('tsconfig.json');

gulp.task('tsc', () => {
  return gulp.src('src/*.ts')
    .pipe(ts(tsProject))
    .pipe(gulp.dest('dist/'));
});

gulp.task('browserify', ['tsc'], () => {
  return browserify({ entries: ['./dist/app.js']})
    .bundle()
    .pipe(source('./tmp/app.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['browserify']);
