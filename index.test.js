const tap = require("tap");
// const index = require("./index");
const multiple = require("./multiple");

// tap.test("a index function should be throw errow when the code there is wrong code", (asserts) => {
//     asserts.throws(()=> index(), Error("in the code there is an incorrect code"))
// });

tap.test("a multiple function, should throw error when given by non number", (asserts) => {
  asserts.throws(() => multiple(2, 3), Error("wrong input !!"));
asserts.throws(() => multiple(2, "3"), Error("wrong input !!"));
asserts.throws(() => multiple("2", 3), Error("wrong input !!"));
  asserts.end();
});
