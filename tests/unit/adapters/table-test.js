import { module, test } from 'qunit';

import { setupTest } from 'ember-app-supabase-server-example/tests/helpers';

module('Unit | Adapter | table', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:table');
    assert.ok(adapter);
  });
});
