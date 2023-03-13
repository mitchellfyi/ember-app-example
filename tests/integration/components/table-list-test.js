import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-app-supabase-server-example/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | table-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<TableList />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <TableList>
        template block text
      </TableList>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
