const clean_ddd_nestjs_path = '<rootDir>/../../../node_modules/@clean-ddd-nestjs/core/dist'

export default {
  displayName: {
    name: 'nestjs',
    color: 'magentaBright'
  },
  moduleFileExtensions: [
    "js",
    "json",
    "ts"
  ],
  rootDir: "src",
  transform: {
    '^.+\\.(t|j)s$': '@swc/jest',
  },
  testRegex: ".*\\.spec\\.ts$",
  collectCoverageFrom: [
    "**/*.(t|j)s"
  ],
  coverageDirectory: "../coverage",
  testEnvironment: "node",
  moduleNameMapper: {
    "@clean-ddd-nestjs/core/(.*)": `${clean_ddd_nestjs_path}/$1`,
  //   '#seedwork/(.*)$': `${clean_ddd_nestjs_path}/@seedwork/$1`,
  //   '#modules/(.*)$': `${clean_ddd_nestjs_path}/modules/$1`,
  //   '#modules/product/(.*)$': `${clean_ddd_nestjs_path}/modules/product/$1`,
  //   '#modules/product/application(.*)$': `${clean_ddd_nestjs_path}/modules/product/application/$1`,
  //   '#modules/product/domain(.*)$': `${clean_ddd_nestjs_path}/modules/product/domain/$1`,
  //   '#modules/product/infra(.*)$': `${clean_ddd_nestjs_path}/modules/product/infra/$1`,
  },
  // setupFilesAfterEnv: ['../../@core/src/@seedwork/domain/tests/jest.ts'],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
}
