module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  //   extends: ['eslint:recommended'],
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {},
};
