const path = require("path");

process.env.JEST_JUNIT_OUTPUT = path.join(__dirname, "./dist/junit.xml");

module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testMatch: ["**/__tests__/**/.test.(ts|tsx|js)?(x)", "**/?(*.)+(spec|test).(ts|tsx|js)?(x)"],
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  collectCoverageFrom: ["src/**/*.{ts,tsx,js,jsx}", "!src/index.js"],
  coveragePathIgnorePatterns: ["src/*/__tests__", ".scss$", "index.ts$", "src/test"],
  cacheDirectory: "jest-cache",
  coverageReporters: ["lcov", "json", "html", "text-summary", "text"],
  reporters: ["default", "jest-junit"],
  moduleDirectories: ["node_modules", "src/test", __dirname]
};
