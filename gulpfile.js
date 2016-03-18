'use strict';
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var connect = require('gulp-connect');
var modRewrite = require('connect-modrewrite');
var history = require('connect-history-api-fallback');
var portNumber = 8080;

history({
  verbose: true,
  logger: console.log.bind(console),
  index: 'overview.html'
});

var paths = {
  appScripts: 'app/**/*.js',
  htmlFiles: 'app/**/*.html',
  cssFiles: 'style/**/*.css'
};

gulp.task('scripts', function () {
  return gulp.src([paths.appScripts])
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter(require('jshint-stylish')))
    .pipe(plugins.size())
    .pipe(connect.reload());
});

gulp.task('injectjs', function () {
  var target = gulp.src('./overview.html');
  var sources = gulp.src(['app/common/**/*.js', 'app/modules/**/*.js']);

  return target
    .pipe(plugins.inject(sources, { relative: true }))
    .pipe(gulp.dest('./'));
});

gulp.task('htmlFiles', function () {
  return gulp.src([paths.htmlFiles])
    .pipe(connect.reload());
});

gulp.task('cssFiles', function () {
  return gulp.src([paths.cssFiles])
    .pipe(connect.reload());
});

gulp.task('watchedFiles', ['serve'], function () {
  gulp.watch(paths.appScripts, ['scripts']);
  gulp.watch(paths.htmlFiles, ['htmlFiles']);
  gulp.watch(paths.cssFiles, ['cssFiles']);
});

gulp.task('serve', ['connect'], function () {
  require('opn')('http://localhost:' + portNumber + '/');
});

gulp.task('connect', function () {
  connect
    .server({
    root: './',
    port: portNumber,
    livereload: true
/*    middleware: function (connect, opt) {
      return [history];
    }*/
  });
});

gulp.task('default', ['watchedFiles']);