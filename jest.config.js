module.exports = {
  verbose: true,
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^.+\\.svg$": "ts-jest",
  },
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleNameMapper: {
    "^@components(.*)$": "<rootDir>/components$1",
    "^@pages(.*)$": "<rootDir>/pages$1",
    "^@hooks(.*)$": "<rootDir>/hooks$1",
  },
};
