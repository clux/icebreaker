# ICE Breaker

UI component experiment using the hack tool found in the Deus Ex 1 game. The component relies on the [polymer library](http://www.polymer-project.org/).

The login frame looks like this:
![frame!](https://github.com/clux/icebreaker/raw/master/dxice.png)

## Installation
Install from [bower](https://www.npmjs.com/package/bower):

```sh
$ bower install icebreaker
```

Then add an html import to `icebreaker.html`:

```html
<link rel="import" href="./bower_components/icebreaker/icebreaker.html">
```

Then include it by using the custom tag:

```html
<ice-breaker></ice-breaker>
```

Then, you can listen out in your JavaScript for the `hack` and `hackDone` events, and do whatever with them.

```js
var ice = document.querySelector('ice-breaker');
ice.addEventListener('hack', function () {
  // do whatever
});
```

## Dependencies
You need to include a script tag to polyfill web component support on browsers other than chrome (note the file is not needed on chrome):

```html
<script src="./bower_components/webcomponentsjs/webcomponents.js"></script>
```

and you will probably want to [vulcanize](https://www.npmjs.com/package/vulcanize) the component into your set of components somehow (TODO: clarify how this would work with cross-referencing the polymer include in sibling dir). If this is your first and only component, however, you can follow the test procedure and grab the one-off `vulcanized.html` instead which inlines all images, styles and scripts.

### Use case

- XHR log in to a limited account on `hack`.
- Refresh the page on `hackDone` to see the login results reflected.

## Testing
Clone and from the directory run the following:

```sh
$ bower install
$ npm install
$ npm run testling
```

## License
Graphics belong to the Deus Ex creators, and should not be used without permission.
The rest (CSS/JS/HTML) is released under the MIT license.
