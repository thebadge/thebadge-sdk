module.exports = {
  testMatch: ['**/*.test.*', '**/*.spec.*'],
  moduleNameMapper: {
    '^@businessLogic(.*)$': '<rootDir>/src/business-logic/$1',
    '^@subgraph(.*)$': '<rootDir>/src/subgraph/$1',
    '^@utils(.*)$': '<rootDir>/src/utils/$1',
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
