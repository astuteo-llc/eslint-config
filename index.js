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
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},
};