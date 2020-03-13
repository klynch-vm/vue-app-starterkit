module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/recommended",
    "eslint:recommended",
    "@vue/standard",
    // this is an opinionated ruleset to help adhere to TypeScript best practices and catch probable issues.
    // '@vue/typescript' is the less opinionated option.
    // as some of its rules might conflict with prettier, this config should be placed after all other extends elements,
    // except for the prettier ones. must also include the '@typescript-eslint' sub-ruleset of the prettier config.
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/src/configs#recommended
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        mocha: true
      }
    }
  ],
  ignorePatterns: ["src/assets/", "vue-formio/", "formio.js/", "node_modules/"]
};
