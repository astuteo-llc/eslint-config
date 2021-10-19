module.exports = {
  globals: {
    MyGlobal: true
  },
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/style',
    './rules/node',
    './rules/browser',
    './rules/variables',
    './rules/es6',
    './rules/strict',
  ].map(require.resolve),
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
    requireConfigFile : false
  },
  rules: {},
};