module.exports = {
  testMatch: ['**/*.test.*', '**/*.spec.*'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
  },
  moduleFileExtensions: ['js', 'json', 'ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
  },
  setupFilesAfterEnv: ['./jest-console-error-handling.js'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/methods/**/*.(js|ts)'],
  reporters: ['default', 'jest-junit'],
  coverageReporters: ['lcov', 'cobertura', 'text'],
}
