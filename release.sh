#!/usr/bin/env bash
set -ex

./build.sh

# ensure release file references external deps as if they were sibling
sed -i 's/\.\/bower_components/../g' icebreaker.build.html
