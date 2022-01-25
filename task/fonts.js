const { src, dest } = require("gulp");

// Конфигурация 
const path = require("../config/path.js");
const app = require("../config/app.js");


//плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const newer = require('gulp-newer');
const fonter = require('gulp-fonter');
const ttf2woff2 = require('gulp-ttf2woff2');

// обработка fonts
const fonts = () => {
    return src(path.fonts.src)
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: 'fonts',
                message: error.message
            }))
        }))
        .pipe(newer(path.fonts.dest))
        .pipe(fonter(app.fonter))
        .pipe(dest(path.fonts.dest))
        .pipe(ttf2woff2())
        .pipe(dest(path.fonts.dest));
}

module.exports = fonts;