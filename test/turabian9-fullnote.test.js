module.exports = {
  csl: "./src/chicago-fullnote-bibliography.csl",
  libraries: ["./test/corpus.json"],
  suites: ["./test/turabian9-fullnote.tests.yaml"]
};

const { jestCSL } = require('jest-csl');
jestCSL(module.exports);