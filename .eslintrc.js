module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
  },
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    strict: 'off',
    "arrow-body-style": 0,
    'linebreak-style': 0,
    'class-methods-use-this': 0,
  },
};
