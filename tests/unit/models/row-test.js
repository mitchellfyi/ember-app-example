import { module, test } from 'qunit';

import { setupTest } from 'ember-app-supabase-server-example/tests/helpers';

module('Unit | Model | row', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('row', {});
    assert.ok(model);
  });
});
