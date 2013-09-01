# ICE Breaker
UI component for a cool hack tool that was found in the Deus Ex 1 game. The component relies on the [polymer library](http://www.polymer-project.org/) atm.

It uses the following frame:
![frame!](https://github.com/clux/icebreaker/raw/master/dxice.png)

## Installation
Clone, `$ bower install`, and use some tool to concatenate the web component to a single file (TODO: add this to `npm build`).
Put polymer script and the icebreaker.html import in your HTML:

```html
<script src="./polymer.min.js" debug></script>
<link rel="import" href="./icebreaker.html">
```

Then include it by using the custom tag:

```html
<ice-breaker></ice-breaker>
```

Then, you can listen out in your JavaScript for the `hack` and `hackDone` events, and do whatever with them.

```js
iceBreakerEl.addEventListener('hack', function () {
  // do whatever
});
```

#### Original use

- Unsafe XHR log in to a limited account on `hack`.
- Refresh the page on `hackDone` to see the login results reflected.

## License
Graphics belong to the Deus Ex creators, and should not be used without permission.
The rest (CSS/JS/HTML) is released under the MIT license. See LICENSE file for details.
