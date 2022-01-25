const del = require('del');

// Конфигурация 
const path = require("../config/path.js");

// удаление директории public
const clear = () => {
    return del(path.root);
}

module.exports = clear;