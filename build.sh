#!/usr/bin/env bash
set -ex

# NB: javascript already inlined here

# generate css from stylus
$(npm bin)/stylus -U icebreaker.stylus

# get generated css into release file
$(npm bin)/vulcanize icebreaker.html --inline-css \
  --exclude bower_components/polymer/polymer.html \
  > icebreaker.build.html
