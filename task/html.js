const { src, dest } = require("gulp");

// Конфигурация 
const path = require("../config/path.js");
const app = require("../config/app.js");

//плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const fileInclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const size = require('gulp-size');
const webpHtml = require('gulp-webp-html');



// обработка 
const html = () => {
    return src(path.html.src)
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: 'html',
                message: error.message
            }))
        }))
        .pipe(fileInclude())
        .pipe(webpHtml())
        .pipe(size({ tittle: "До сжатия" }))
        .pipe(htmlmin(app.htmlmin))
        .pipe(size({ tittle: "После сжатия" }))
        .pipe(dest(path.html.dest))
}

module.exports = html;