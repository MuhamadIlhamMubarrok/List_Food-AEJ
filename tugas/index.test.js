const tap = require("tap");
const index = require("./index");

tap.test("a index function should be throw errow when the code there is wrong code", (asserts) => {
    asserts.throws(()=> index(), Error("in the code there is an incorrect code"))
});

