function multiple(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("the type of input is not number");
  }

  return a * b;
}

module.exports = multiple;
