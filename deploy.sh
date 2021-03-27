#!/bin/bash

echo '构建中……'

yarn build

cp -rvf ./dist/* ../the-wedding.klovedy/docs/

echo "构建完成。"