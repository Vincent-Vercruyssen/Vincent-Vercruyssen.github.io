#!/bin/bash

cd ./react-page/
npm run build
cd ..

cp ./react-page/build/index.html .
cp ./react-page/build/manifest.json .
cp -r ./react-page/build/static/ ./static/