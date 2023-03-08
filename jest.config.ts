import type { JestConfigWithTsJest } from 'ts-jest'

const jestConfig: JestConfigWithTsJest = {
  // globals: {
  //   "ts-jest": {
  //     "useESM": true,
  //   }
  // },
  preset: 'ts-jest/presets/default-esm', 
  // testEnvironment: 'jsdom',
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  transformIgnorePatterns: ["/node_modules/(?!lodash-es)"],
  // testEnvironment: "jsdom",
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transform: {
    // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
    // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
    "^.+\\.(ts|tsx)$": [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
};

export default jestConfig;