'use strict';

var gulp    = require('gulp'),
sass        = require('gulp-sass'),
jimp        = require('gulp-jimp'),
imagemin    = require('gulp-imagemin'),
webpack     = require('webpack-stream'),
browserSync = require('browser-sync'),
clean       = require('gulp-clean');

//sass
gulp.task('sass', function () {
  return gulp.src('./site/assets/sass/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(gulp.dest('./site/css'));
});


//resize imagem galeria
gulp.task('resize-galeria', function () {
  gulp.src('./site/assets/img/eventos/**/*.{gif,jpg,png}').pipe(jimp({
    '-galeria': {
      resize: { width: 1000 }           
    }

  }))

  .pipe(imagemin({
    optimizationLevel: 7,
    progressive: true,
    interlaced: true,

  }))

  .pipe(gulp.dest('./site/assets/img/eventos/resize/'));
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


//deleta imagem nao usada da galeria
gulp.task('delete', function () {
  return gulp.src('./site/img/eventos/*.jpg', {read: false})
    .pipe(clean());
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
gulp.task('dev', ['sass', 'webpack-stream', 'browser-sync' ], function() {
  gulp.watch('./site/assets/sass/**/*.scss', ['sass']);  
  gulp.watch('./site/assets/components/**/*.js', ['webpack-stream']);  
  
});



