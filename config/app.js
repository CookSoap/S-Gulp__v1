const isProd = process.argv.includes("--production");
const isDev = !isProd;

//НАСТРОЙКИ Плагинов
module.exports = {
    isProd: isProd,
    isDev: isDev,

    htmlmin: {
        collapseWhitespace: isProd
    },

    webpack: {
        mode: isProd ? "production" : "development"
    },

    imagemin: {
        verbose: true
    },

    fonter: {
        formats: ["ttf", "woff", "eot", "svg"]
    },



}
