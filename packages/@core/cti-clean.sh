#!/bin/sh

npm run cti clean './packages/modules/product/application' &&
npm run cti clean './packages/modules/product/domain' &&
npm run cti clean './packages/modules/product/infra' &&

npm run cti clean './packages/@seedwork/domain' &&
npm run cti clean './packages/@seedwork/application' &&
npm run cti clean './packages/@seedwork/infra' &&

npm run cti clean './packages/infra' &&
npm run cti clean './packages/application'
