module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'no-console': 1,
    'react-native/no-inline-styles': 0,
    'prettier/prettier': [
      'error',
      {
        'no-inline-styles': false,
      },
    ],
    // 'react-hooks/rules-of-hooks': 'error',
    // 'react-hooks/exhaustive-deps': 'off',
  },
  // plugins: ['react-hooks'],
};
