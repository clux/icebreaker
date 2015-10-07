js:
	browserify -r tape > bundle.js

css:
	stylus -U icebreaker.stylus

html:
	vulcanize icebreaker.html --inline-css \
		--exclude bower_components/polymer/polymer.html \
		> icebreaker.build.html

release:
	make js css html; sed -i 's/\.\/bower_components/../g' icebreaker.build.html
