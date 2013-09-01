var test = require('tape');

test("link", function (t) {
  t.plan(2);
  var tag = document.createElement('ice-breaker');
  document.body.appendChild(tag);

  // wait for the element to be ready + some extra time
  setTimeout(function () {
    // then make sure events trigger
    tag.addEventListener('hack', function () {
      t.ok(true, 'hack triggered!');
    });
    tag.addEventListener('hackDone', function () {
      t.ok(true, 'hack done!');
    });
    tag.hack(); // and run the hack function manually
    setTimeout(function () {
      t.end();
    }, 10000);
  }, 1000);
});
