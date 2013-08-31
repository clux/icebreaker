var test = require('tape');

test("link", function (t) {
  var tag = document.createElement('ice-breaker');
  document.body.appendChild(tag);

  // can't test rendering yet as you can't query within the Shadow DOM
  setTimeout(function () {
    t.end();
  }, 200);
});
