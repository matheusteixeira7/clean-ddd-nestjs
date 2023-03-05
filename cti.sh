#!/bin/sh

npm run cti create './@core/modules/product/application' -- -i '*spec.ts' -b -s false -w &&
npm run cti create './@core/modules/product/domain' -- -i '*spec.ts' -b -s false -w &&
npm run cti create './@core/modules/product/infra' -- -i '*spec.ts' -b -s false -w &&

npm run cti create './@core/@seedwork/domain' -- -i '*spec.ts' -b -s false -w &&
npm run cti create './@core/@seedwork/application' -- -i '*spec.ts' -b -s false -w &&
npm run cti create './@core/@seedwork/infra' -- -i '*spec.ts' -b -s false -w &&

npm run cti create './@core/infra' -- -i '*spec.ts' -b -s false -w &&
npm run cti create './@core/application' -- -i '*spec.ts' -b -s false -w
