module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/destructuring-assignment': 0,
    'react/button-has-type': 0,
    eqeqeq: ['error', 'always'],
    'no-console': ['error', { allow: ['warn', 'error', 'info', 'debug'] }],
    'eol-last': ['error', 'always'],
  },
};
