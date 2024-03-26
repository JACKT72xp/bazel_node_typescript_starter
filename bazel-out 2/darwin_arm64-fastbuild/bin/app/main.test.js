"use strict";
function _common() {
    const data = require("@org/common");
    _common = function() {
        return data;
    };
    return data;
}
function _supertest() {
    const data = require("supertest");
    _supertest = function() {
        return data;
    };
    return data;
}
const _app = require("./app");
test('should return the answer to everything', async ()=>{
    const res = await _supertest()(_app.default).get('/');
    expect(res.body).toEqual({
        number: _common().number
    });
});
