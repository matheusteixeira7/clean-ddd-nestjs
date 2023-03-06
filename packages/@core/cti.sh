#!/bin/sh

npm run cti create './packages/modules/product/application' -- -i '*spec.ts' -b -s false -w &&
npm run cti create './packages/modules/product/domain' -- -i '*spec.ts' -b -s false -w &&
npm run cti create './packages/modules/product/infra' -- -i '*spec.ts' -b -s false -w &&

npm run cti create './packages/@seedwork/domain' -- -i '*spec.ts' -b -s false -w &&
npm run cti create './packages/@seedwork/application' -- -i '*spec.ts' -b -s false -w &&
npm run cti create './packages/@seedwork/infra' -- -i '*spec.ts' -b -s false -w &&

npm run cti create './packages/infra' -- -i '*spec.ts' -b -s false -w &&
npm run cti create './packages/application' -- -i '*spec.ts' -b -s false -w
