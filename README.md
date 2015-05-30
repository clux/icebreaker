# ICE Breaker
[![bower version](https://badge.fury.io/bo/icebreaker.svg)](http://badge.fury.io/bo/icebreaker)
[![development dependency status](https://david-dm.org/clux/icebreaker/dev-status.svg)](https://david-dm.org/clux/icebreaker)

UI component experiment using the hack tool found in the original Deus Ex game. The component relies on the [polymer library](http://www.polymer-project.org/).

The login frame looks like this:
![frame!](https://github.com/clux/icebreaker/raw/master/dxice.png)

## Installation
Install from [bower](https://www.npmjs.com/package/bower):

```sh
bower install icebreaker
```

Then add an html import to `icebreaker.html`:

```html
<link rel="import" href="./bower_components/icebreaker/icebreaker.build.html">
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
You need to include a script tag to polyfill web component support on browsers other than chrome:

```html
<script src="./bower_components/webcomponentsjs/webcomponents-lite.min.js"></script>
```

and you will probably want to [vulcanize](https://www.npmjs.com/package/vulcanize) the component into your set of components, so all of them use the same version of polymer.

### Use case

- XHR log in to a limited account on `hack`.
- Refresh the page on `hackDone` to see the login results reflected.

## Testing
Clone and from the directory run the following:

```sh
bower install
npm install
npm run testling
```
