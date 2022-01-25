const { src, dest } = require("gulp");

// Конфигурация 
const path = require("../config/path.js");
const app = require("../config/app.js");


//плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const webp = require('gulp-webp');
const gulpif = require('gulp-if');

// обработка image
const img = () => {
    return src(path.img.src)
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: 'image',
                message: error.message
            }))
        }))
        .pipe(newer(path.img.dest))
        .pipe(webp())
        .pipe(dest(path.img.dest))
        .pipe(src(path.img.src))
        .pipe(dest(path.img.dest))
        .pipe(imagemin(gulpif(app.isProd, app.imagemin)))
        .pipe(dest(path.img.dest));

}

module.exports = img;