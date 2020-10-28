"use strict";
exports.__esModule = true;
exports.helloWorld = void 0;
var CreateUser_1 = require("./services/CreateUser");
function helloWorld(request, response) {
    var user = CreateUser_1["default"]('Carlos', 'carlos@gmail.com', '123456');
    return response.json(user);
}
exports.helloWorld = helloWorld;
