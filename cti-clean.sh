#!/bin/sh

npm run cti clean './@core/modules/product/application' &&
npm run cti clean './@core/modules/product/domain' &&
npm run cti clean './@core/modules/product/infra' &&

npm run cti clean './@core/@seedwork/domain' &&
npm run cti clean './@core/@seedwork/application' &&
npm run cti clean './@core/@seedwork/infra' &&

npm run cti clean './@core/infra' &&
npm run cti clean './@core/application'
