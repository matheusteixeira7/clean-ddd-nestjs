#!/bin/bash

###### @core configs #######
echo "###### Starting @core configs ######"
if [ ! -f "./src/@core/.env.test" ]; then
    cp ./@core/@core/.env.test.example ./@core/@core/.env.test
fi

###### nestjs configs #######
echo "###### Starting nestjs configs ######"
if [ ! -f "./src/nestjs/envs/.env" ]; then
    cp ./@core/nestjs/.env.example ./@core/nestjs/.env
fi
if [ ! -f "./src/nestjs/envs/.env.test" ]; then
    cp ./@core/nestjs/.env.test.example ./@core/nestjs/.env.test
fi
if [ ! -f "./src/nestjs/envs/.env.e2e" ]; then
    cp ./@core/nestjs/.env.e2e.example ./@core/nestjs/.env.e2e
fi

npm install

echo "###### Building @core ######"
npm run build -w @fc/micro-videos

tail -f /dev/null

#npm run start:dev
