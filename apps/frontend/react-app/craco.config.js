const path = require("path");
const fs = require("fs");

const rewireBabelLoader = require("craco-babel-loader");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  plugins: [
    {
      plugin: rewireBabelLoader,
      options: {
        includes: [resolveApp('../../../packages/shared-types')],
      }
    }
  ],
  babel: {
    presets: ['@emotion/babel-preset-css-prop'],
  },
  style: {
    css: {
      loaderOptions: {
        modules: {
          auto: true,
          exportLocalsConvention: 'camelCaseOnly',
        },
      },
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^.+\\.(sass|css|scss)$': '<rootDir>/style-mock.js',
      }
    },
  },
}
