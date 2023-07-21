module.exports = {
  testMatch: ['**/*.test.*', '**/*.spec.*'],
  moduleNameMapper: {
    '^.+.(css|style|less|sass|scss|png|jpg|ttf|woff|woff2)$': '<rootDir>/config/fileStub.js',
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^.+\\.(css|scss|less)$': '<rootDir>/config/CSSStub.js',
  },
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.tsx$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
  },
  // setupFiles: ['./jest-global-mocks.js', './setup-env-vars.js'],
  setupFilesAfterEnv: ['./jest-console-error-handling.js'],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/components/**/*.(js|ts|tsx)',
    '!<rootDir>/src/**/*.stories.(js|ts|tsx)', // exclude sb stories from coverage analysis
  ],
  reporters: ['default', 'jest-junit'],
  // testEnvironment: 'jsdom',
  coverageReporters: ['lcov', 'cobertura', 'text'],
}
