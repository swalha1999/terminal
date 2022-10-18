module.exports = {
  plugins: ['prettier'],
  extends: ['next/core-web-vitals'],
  rules: {
    'no-console': 'off',
    'prettier/prettier': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/display-name': 'off',
    'import/no-anonymous-default-export': 'off',
  },
};
