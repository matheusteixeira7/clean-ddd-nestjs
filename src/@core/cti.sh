#!/bin/sh

npm run cti create './src/modules/product/application' -- -i '*spec.ts' -b -s false -w &&
npm run cti create './src/modules/product/domain' -- -i '*spec.ts' -b -s false -w &&
npm run cti create './src/modules/product/infra' -- -i '*spec.ts' -b -s false -w &&

npm run cti create './src/@seedwork/domain' -- -i '*spec.ts' -b -s false -w &&
npm run cti create './src/@seedwork/application' -- -i '*spec.ts' -b -s false -w &&
npm run cti create './src/@seedwork/infra' -- -i '*spec.ts' -b -s false -w &&

npm run cti create './src/infra' -- -i '*spec.ts' -b -s false -w &&
npm run cti create './src/application' -- -i '*spec.ts' -b -s false -w
