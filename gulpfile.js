const gulp = require("gulp");
const htmlmin = require("gulp-html-minifier2");
const uglify = require("gulp-uglify");
const pump = require("pump");
const sass = require("gulp-sass");
const uglifycss = require("gulp-uglifycss");
const gls = require("gulp-live-server");

// Minify all .html files and move to docs
gulp.task("html", async function () {
  gulp
    .src("./src/*.html")
    .pipe(
      htmlmin({
        collapseWhitespace: true,
      })
    )
    .pipe(gulp.dest("./docs/"));
});

// Minify all .js files and move to docs
gulp.task("js", (cb) => {
  pump(
    [gulp.src("./src/assets/js/*.js"), uglify(), gulp.dest("./docs/js")],
    cb
  );
});

// Minify CSS to SASS
gulp.task("sass", async function () {
  gulp
    .src("./src/assets/scss/*.scss")
    .pipe(sass())
    .pipe(
      uglifycss({
        maxLineLen: 80,
        uglyComments: true,
      })
    )
    .pipe(gulp.dest("./docs/css"));
});

// Server
gulp.task("server", () => {
  const server = gls.static("./docs", 3000);
  server.start();
  gulp.watch(
    ["./docs/css/*.css", "./docs/js/*.js", "./docs/*.html"],
    (file) => {
      server.notify.apply(server, [file]);
      console.log("Running on localhost:3000");
    }
  );
});

// Watch task to look out for specific changes in folders
gulp.task("watch", () => {
  gulp.watch(
    ["./src/assets/scss/*.scss", "./src/assets/js/*.js", "./src/*.html"],
    ["sass", "js", "html"]
  );
});

// An array of tasks, allowing you to simply run 'gulp' for all tasks at once
gulp.task("default", gulp.series("html", "js", "sass", "server", "watch"));
