'use strict';

var gulp    = require('gulp'),
sass        = require('gulp-sass'),
imagemin    = require('gulp-imagemin'),
webpack     = require('webpack-stream'),
browserSync = require('browser-sync');

//sass
gulp.task('sass', function () {
  return gulp.src('./site/assets/sass/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(gulp.dest('./site/css'));
});

//imagemin
gulp.task('img', function() {
  return gulp.src('./site/assets/img/**/*.{gif,jpg,png,svg}')
  .pipe(imagemin({
    optimizationLevel: 7,
    progressive: true,
    interlaced: true,
    
  }))

  .pipe(gulp.dest('./site/img/'));
});


//browser-sync
gulp.task('browser-sync', function() {
  browserSync.init(['./site/css/**', './site/**'], {
    server: {
      baseDir: './',
      index: './site/index.html'
    }
  });
});

//gulp-webpack
gulp.task('webpack-stream', function() {
  return gulp.src('./site/assets/components/root.js')
  .pipe(webpack( require('./webpack.config.js') ))
  .pipe(gulp.dest('./site/js/'));   
});


//view
gulp.task('dev', ['sass', 'img', 'webpack-stream', 'browser-sync'], function() {
  gulp.watch('./site/assets/sass/**/*.scss', ['sass']);  
  gulp.watch('./site/assets/img/**/*.{gif,jpg,png,svg}', ['img']);  
  gulp.watch('./site/assets/components/**/*.js', ['webpack-stream']);
});



