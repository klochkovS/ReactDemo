module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },
    "rules": {
        "no-console": 0,
        "no-alert": 0,
        "no-underscore-dangle": 0,
        "no-return-assign": 0,
        "react/prefer-stateless-function": 0,
        "quote-props": 0,
        "react/prop-types": 0,
        "react/jsx-no-bind": 0,
        "react/no-array-index-key": 0,
        "no-nested-ternary": 0,
        "react/self-closing-comp": 0,
        "no-confusing-arrow": 0,
    },
    "env": {
        "browser": 1
    }
};