module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'airbnb', 'prettier'],
  rules: {},
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  plugins: ['react'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 8,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    'no-console': [
      'warn',
      {
        allow: ['info', 'warn', 'error'],
      },
    ],
    'import/prefer-default-export': 0,
    'no-underscore-dangle': 0,
    camelcase: 0,
    'import/extensions': 0,
    'no-plusplus': 0,
    'no-return-assign': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-await-in-loop': 0,
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'no-unused-vars': ['error', { varsIgnorePattern: '_' }],
  },
};
