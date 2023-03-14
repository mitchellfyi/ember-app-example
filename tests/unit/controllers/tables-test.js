import { module, test } from 'qunit';
import { setupTest } from 'ember-app-supabase-server-example/tests/helpers';

module('Unit | Controller | tables', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:tables');
    assert.ok(controller);
  });
});
