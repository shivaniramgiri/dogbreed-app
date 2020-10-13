module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  collectCoverage:true,
   collectCoverageFrom: [
      "**/*.{js,jsx}",
      "!**/node_modules/**",
      "!**/vendor/**"
    ],
    transformIgnorePatterns:["/node_modules/"]
  
};
