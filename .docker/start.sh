#!/bin/bash

###### @core configs #######
echo "###### Starting @core configs ######"
if [ ! -f "./src/@core/.env.test" ]; then
    cp ./packages/@core/.env.test.example ./packages/@core/.env.test
fi

###### nestjs configs #######
echo "###### Starting nestjs configs ######"
if [ ! -f "./src/nestjs/envs/.env" ]; then
    cp ./packages/nestjs/.env.example ./packages/nestjs/.env
fi
if [ ! -f "./src/nestjs/envs/.env.test" ]; then
    cp ./packages/nestjs/.env.test.example ./packages/nestjs/.env.test
fi
if [ ! -f "./src/nestjs/envs/.env.e2e" ]; then
    cp ./packages/nestjs/.env.e2e.local.example ./packages/nestjs/.env.e2e.local
fi

npm install

echo "###### Building @core ######"
npm run build -w app-core

tail -f /dev/null

#npm run start:dev
