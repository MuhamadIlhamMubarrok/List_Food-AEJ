// const asserts = require('assert');
const multiple = require("./multiple");
const tap = require("tap");

tap.test("a multiple function, should throw error when given by non number", (asserts) => {
  asserts.throws(() => multiple(2, 3), Error("wrong input !!"));
  asserts.throws(() => multiple(2, "3"), Error("wrong input !!"));
  asserts.throws(() => multiple("2", 3), Error("wrong input !!"));
  asserts.end();
});
