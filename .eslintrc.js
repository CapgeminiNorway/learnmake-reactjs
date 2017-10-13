
/*
https://gist.github.com/zeusbaba/cc169d9fd73b3315908e2758ed9edf9d
adapted from https://medium.com/@netczuk/your-last-eslint-config-9e35bace2f99

How to enable ESLINT via the easiest way?

1) prepare this file .eslintrc.js
2) remember to update .gitignore like this;

  # Ignore all dotfiles...
  .*
  # except for
  !.gitignore
  !.editorconfig
  !.eslintrc.json
  !.eslintrc.js
  !.npmignore

3) also add required packages as peer/dev dependencies;
  yarn add eslint-config-last eslint-plugin-react -D -E
  yarn add eslint babel-eslint prettier eslint-plugin-prettier eslint-config-prettier -D -E

4) now we are ready!
  run this;
    yarn eslint --ext .jsx --fix .
  then fix your code based the errors you see 

additionally; when you need you can also disable rules with inline comments, see;
https://eslint.org/docs/user-guide/configuring#disabling-rules-with-inline-comments

*/

module.exports = {
  extends: ['last', 'prettier/react', 'plugin:react/recommended'],
};
