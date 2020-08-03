module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  //   extends: ['eslint:recommended', 'eslint-config-prettier'],
  extends: ['airbnb-base', 'eslint-config-prettier'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {},
};
