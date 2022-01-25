const { watch, series, parallel } = require("gulp");
const browserSync = require('browser-sync').create();

// Конфигурация 
const path = require("./config/path.js");
const app = require("./config/app.js");


//задачи
const clear = require('./task/clear.js');
const html = require('./task/html.js');
const scss = require('./task/scss.js');
const js = require('./task/js.js');
const img = require('./task/img.js');
const fonts = require('./task/fonts.js');

//server
const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root
        }
    })
}

// наблюдение
const watcher = () => {
    watch(path.html.watch, html).on("all", browserSync.reload);
    watch(path.scss.watch, scss).on("all", browserSync.reload);
    watch(path.js.watch, js).on("all", browserSync.reload);
    watch(path.img.watch, img).on("all", browserSync.reload);
    watch(path.fonts.watch, fonts).on("all", browserSync.reload);
}

// продакшн
const build = series(
    clear,
    parallel(html, scss, js, img, fonts)
);

// dev
const dev = series(
    build,
    parallel(watcher, server)
);

// задачи
exports.html = html;
exports.scss = scss;
exports.js = js;
exports.img = img;
exports.fonts = fonts;
/* exports.watch = watcher;
exports.clear = clear; */


//сборка
exports.default = app.isProd
    ? build
    : dev;