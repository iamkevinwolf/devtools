module.exports = {
  '**/*.md': ['doctoc', 'prettier --write', 'git add'],
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'git add'],
  '*.json': ['prettier --write', 'git add'],
}
