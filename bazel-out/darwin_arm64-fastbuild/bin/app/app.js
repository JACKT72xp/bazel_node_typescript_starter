"use strict";
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
function _common() {
    const data = require("@org/common");
    _common = function() {
        return data;
    };
    return data;
}
function _express() {
    const data = require("express");
    _express = function() {
        return data;
    };
    return data;
}
function _dotenv() {
    const data = require("dotenv");
    _dotenv = function() {
        return data;
    };
    return data;
}
_dotenv().config();
const app = _express()();
app.get('/', (_req, res)=>{
    res.send({
        number: _common().number
    });
});
const _default = app;
