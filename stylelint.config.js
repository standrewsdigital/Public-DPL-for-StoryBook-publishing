/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard-scss"],
  rules: {
    "property-no-unknown": null,
    "scss/property-no-unknown": true,
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "function-no-unknown": null,
    "scss/function-no-unknown": true,
    "scss/load-no-partial-leading-underscore": null
  }
};
