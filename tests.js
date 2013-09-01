var test = require('tape');

test("link", function (t) {
  t.plan(2);
  var tag = document.createElement('ice-breaker');
  document.body.appendChild(tag);


  // can't test rendering yet as you can't query within the Shadow DOM
  setTimeout(function () {
    tag.addEventListener('hack', function () {
      t.ok(true, 'hack triggered!');
    });
    tag.addEventListener('hackDone', function () {
      t.ok(true, 'hack done!');
    });

    tag.hack();    
    setTimeout(function () {
      t.end();
    }, 9000);
  }, 200);
});
