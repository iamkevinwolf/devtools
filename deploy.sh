if [ "$TRAVIS_BRANCH" = "master" ]; then
  # Git config.
  git remote set-url origin https://${GH_TOKEN}@github.com/${TRAVIS_REPO_SLUG}.git
  git config --global user.email "hi@kevinwolf.me"
  git config --global user.name "Kevin Wolf"
  git checkout master

  # NPM config.
  echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > ~/.npmrc

  # Lerna.
  yarn lerna publish -y
fi
