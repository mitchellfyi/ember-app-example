import { module, test } from 'qunit';
import { setupTest } from 'ember-app-supabase-server-example/tests/helpers';

module('Unit | Route | table-new', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:table-new');
    assert.ok(route);
  });
});
