#!/bin/bash

cd ./react-site/
npm run build
cd ..

cp ./react-site/build/index.html .
cp ./react-site/build/manifest.json .
cp -r ./react-site/build/static/ ./static/
cp -r ./react-site/build/resources/ ./resources/