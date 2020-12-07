module.exports = {
  testEnvironment: 'node',
  testPathIgnorePatterns: ['<rootDir>/dist/'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
