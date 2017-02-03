/*global require*/
"use strict";

var gulp = require('gulp'),
  path = require('path'),
  data = require('gulp-data'),
  pug = require('gulp-pug'),
  prefix = require('gulp-autoprefixer'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync'),
  imagemin = require('gulp-imagemin');

/*
 * Directories here
 */
var paths = {
  public: './public/',
  src: './src/',
  sass: './src/sass/',
  css: './public/css/',
  img: './src/_img/*',
  font: './src/_font/*',
  data: './src/_data/',
};


/**
 * Minify PNG, JPEG, GIF and SVG images
 */
gulp.task('imgmin', function () {
    return gulp.src(paths.img)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.public + 'img/'));
});

/**
 * Copy static files to public
 */
gulp.task('static', function () {
    return gulp.src(paths.src + '*.ico' && paths.src + '*.pdf')
        .pipe(gulp.dest(paths.public));
});

/**
 * Copy js files to public
 */
gulp.task('js', function () {
    return gulp.src(paths.src + 'js/*')
        .pipe(gulp.dest(paths.public + 'js/'));
});

/**
 * Copy font files to public
 */
gulp.task('font', function () {
    return gulp.src(paths.font)
        .pipe(gulp.dest(paths.public + 'font/'));
});

/**
 * Compile .pug files and pass in data from json file
 * matching file name. index.pug - index.pug.json
 */
gulp.task('pug', function () {
  return gulp.src('./src/*.pug')
    .pipe(data(function (file) {
      return require(paths.data + path.basename(file.path) + '.json');
    }))
    .pipe(pug())
    .pipe(gulp.dest(paths.public));
});

/**
 * Recompile .pug files and live reload the browser
 */
gulp.task('rebuild', ['pug'], function () {
  browserSync.reload();
});

/**
 * Wait for pug and sass tasks, then launch the browser-sync Server
 */
gulp.task('browser-sync', ['sass', 'pug'], function () {
  browserSync({
    server: {
      baseDir: paths.public
    },
    notify: false
  });
});

/**
 * Compile .scss files into public css directory With autoprefixer no
 * need for vendor prefixes then live reload the browser.
 */
gulp.task('sass', function () {
  return gulp.src(paths.sass + '*.scss')
    .pipe(sass({
      includePaths: [paths.sass],
      outputStyle: 'compact'
    }))
    .on('error', sass.logError)
    .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
      cascade: true
    }))
    .pipe(gulp.dest(paths.css))
    .pipe(browserSync.reload({
      stream: true
    }));
});

/**
 * Watch scss files for changes & recompile
 * Watch .pug files run pug-rebuild then reload BrowserSync
 */
gulp.task('watch', function () {
  gulp.watch(paths.sass + '**/*.scss', ['sass']);
  gulp.watch('./src/**/*.pug', ['rebuild']);
  gulp.watch('./src/js/*', ['js','rebuild']);
});

// Build task compile sass and pug.
gulp.task('build', ['sass', 'pug']);

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync then watch
 * files for changes
 */
gulp.task('default', ['browser-sync', 'watch', 'imgmin', 'font', 'static', 'js']);
