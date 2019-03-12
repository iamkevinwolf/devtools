module.exports = {
  extends: ['airbnb-base', 'prettier', 'prettier/standard'],
  env: {
    node: true,
  },
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
  },
}
