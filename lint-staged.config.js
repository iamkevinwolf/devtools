module.exports = {
  "**/*.md": ["doctoc", "prettier --write", "git add"],
  "*.json": ["prettier --write", "git add"]
};
