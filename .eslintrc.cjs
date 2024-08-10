module.exports = {
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  plugins: ["react", "prettier"],
  env: {
    browser: true,
    es2021: true,
  },
  rules: {
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off",
  },
};
