/* Note: Need to add the ability to compile ES6 to Vanilla */

const gulp = require('gulp');
const htmlmin = require('gulp-html-minifier2');
const uglify = require('gulp-uglify');
const pump = require('pump');
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');
const gls = require('gulp-live-server');

// Minify all .html files and move to dist
gulp.task('html', () => {
  gulp.src('./src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('./dist/'));
});

// Minify all .js files and move to dist
gulp.task('js', (cb) => {
  pump([
    gulp.src('./src/assets/js/*.js'),
    uglify(),
    gulp.dest('./dist/js')
  ], cb)
});

// Minify CSS to SASS
gulp.task('sass', () => {
  gulp.src('./src/assets/scss/*.scss')
    .pipe(sass())
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('./dist/css'))
});

// Server
gulp.task('server', () => {
  const server = gls.static('./dist', 3000);
  server.start();
  gulp.watch(['./dist/css/*.css', './dist/js/*.js', './dist/*.html'], (file) => {
    server.notify.apply(server, [file]);
    console.log('Running on localhost:3000')
  });
});

// Watch task to watch specific folders for changes
gulp.task('watch', () => {
  gulp.watch(['./src/assets/scss/*.scss', './src/assets/js/*.js', './src/*.html'], ['sass', 'js', 'html']);
});

// An array of tasks, allowing you to simply run 'gulp' for all tasks
gulp.task('default', ['html', 'js', 'sass', 'server', 'watch']);
