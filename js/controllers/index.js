"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../data");
const date_fns_1 = require("date-fns");
// Save the original toString method
// const originalToString = Date.prototype.toString;
// Override the Date.prototype.toString method
Date.prototype.toString = function () {
    return (0, date_fns_1.format)(this, "h:mm - EEE MMM d yyyy");
};
function get(req, res) {
    res.render("index", { messages: data_1.messages });
}
function post(req, res) {
    const reqBody = req.body;
    const newMessage = {
        text: reqBody.message,
        user: reqBody.username,
        added: new Date(),
    };
    data_1.messages.push(newMessage);
    res.redirect("/");
}
exports.default = { get, post };
