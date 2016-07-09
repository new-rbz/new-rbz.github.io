var gulp = require('gulp');
var config = require('./gulp.config')();
var sourcemaps = require('gulp-sourcemaps');
var tsc = require('gulp-typescript');
var tslint = require('gulp-tslint');
var tsProject = tsc.createProject('tsconfig.json');
var browserSync = require('browser-sync');
var superstatic = require('superstatic');
var $ = require('gulp-load-plugins')({ lazy: true })
var concatCss = require('gulp-concat-css');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('ts-lint', () => {
  return gulp.src(config.allTs)
    .pipe(tslint())
    .pipe(tslint.report('prose', {
        emitError: false
    }));
})

gulp.task('compile-ts', () => {
  var tsResult = gulp
      .src(config.allTs)
      .pipe(sourcemaps.init())
      .pipe(tsc(tsProject));

  return tsResult.js
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(config.tsOutputPath));
});

gulp.task('serve', ['ts-lint', 'compile-ts'], () => {
  gulp.watch(config.allTs, ['ts-lint', 'compile-ts']);
  gulp.watch(config.allSass, ['compile-sass']);

  browserSync({
      port: 3000,
      files: ['index.html', 'app/**/*.js', 'app/**/*.html'],
      injectChanges: true,
      logFileChanges: false,
      logLevel: 'silent',    
      notify: true,
      reloadDelay: 0,
      server: {
          baseDir: ['./'],
          middleware: superstatic({ debug: false})
      }
  });	
});

gulp.task('compile-sass', () => {
  var sassOptions = {
      outputStyle: 'nested' // nested, expanded, compact, compressed
  };

  return gulp
    .src(config.allSass)
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass(sassOptions))
    .pipe($.sourcemaps.write())
    .pipe($.autoprefixer({ browsers: ['last 2 version', '> 5%'] }))
    .pipe(concatCss("./styles/site.css"))
    .pipe(minify({keepBreaks: true}))
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['serve']);
