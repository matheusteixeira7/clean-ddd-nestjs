#!/bin/sh

npm run cti clean './src/modules/product/application' &&
npm run cti clean './src/modules/product/domain' &&
npm run cti clean './src/modules/product/infra' &&

npm run cti clean './src/@seedwork/domain' &&
npm run cti clean './src/@seedwork/application' &&
npm run cti clean './src/@seedwork/infra' &&

npm run cti clean './src/infra' &&
npm run cti clean './src/application'
