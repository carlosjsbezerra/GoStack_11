"use strict";
/**
 * Para criar: name, email, password
 */
exports.__esModule = true;
function createUser(name, email, password) {
    if (name === void 0) { name = ''; }
    var user = {
        name: name,
        email: email,
        password: password
    };
    return user;
}
exports["default"] = createUser;
