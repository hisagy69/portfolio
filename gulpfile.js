const { src, dest, series, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const csso = require("gulp-csso");
const htmlmin = require("gulp-htmlmin");
const autoprefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat");
const sync = require("browser-sync").create();
const del = require("gulp-clean");

const html = () => {
  return src("src/**.html")
    .pipe(
      htmlmin({
        collapseWhitespace: true,
      })
    )
    .pipe(dest("dist"));
};

const scss = () => {
  return src("src/scss/**.scss")
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(concat("style.css"))
    .pipe(dest("dist"));
};

const clear = () => {
  return src("./dist/**").pipe(del());
};

const img = () => {
  return src("./src/img/**.{jpg,jpeg,png,svg}").pipe(dest("./dist/img"));
};

const fonts = () => {
  return src("./src/fonts/**").pipe(dest("./dist/font"));
};

const script = () => {
  return src("./src/index.js").pipe(dest("./dist"));
};

const serve = () => {
  sync.init({
    server: "./dist",
  });

  watch("src/**.html", series(html)).on("change", sync.reload);
  watch("src/scss/**.scss", series(scss)).on("change", sync.reload);
};

exports.build = series(clear, img, fonts, html, scss, script);
exports.serve = series(img, fonts, html, scss, script, serve);
