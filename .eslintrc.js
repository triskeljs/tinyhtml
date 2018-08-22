module.exports = {
    "env": {
      "browser": true,
      "es6": true
    },
    "globals": {
      "module": true,
      "define": true,
      "require": true,
      "global": true
    },
    "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module",
    },
    "extends": "eslint:recommended",
    "rules": {
      "no-console": 1,
      "linebreak-style": [
          "error",
          "unix"
      ],
      "quotes": [
          "error",
          "single",
          { "allowTemplateLiterals": true }
      ],
      "semi": [
          "error",
          "always"
      ],
      "no-unused-vars": [
          "error",
          {
              "args": "after-used",
              "argsIgnorePattern": "^_\\w+"
          }
      ]
    }
};
