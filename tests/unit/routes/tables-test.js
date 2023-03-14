import { module, test } from 'qunit';
import { setupTest } from 'ember-app-supabase-server-example/tests/helpers';

module('Unit | Route | tables', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:tables.index');
    assert.ok(route);
  });
});
