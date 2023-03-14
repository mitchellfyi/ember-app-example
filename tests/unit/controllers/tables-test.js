import { module, test } from 'qunit';
import { setupTest } from 'ember-app-supabase-server-example/tests/helpers';
import sinon from 'sinon';

module('Unit | Controller | tables', function (hooks) {
  setupTest(hooks);

  test('tables.edit exists', function (assert) {
    let controller = this.owner.lookup('controller:tables.edit');
    assert.ok(controller);
  });

  test('add a row', function (assert) {
    const controller = this.owner.lookup('controller:tables.edit');

    const model = {
      store: {
        createRecord: function () {
          return {};
        },
      },
      table_rows: [],
    };

    controller.set('model', model);

    assert.strictEqual(controller.model.table_rows.length, 0);

    controller.send('addRow');

    assert.strictEqual(controller.model.table_rows.length, 1);
  });

  test('remove a row', function (assert) {
    const controller = this.owner.lookup('controller:tables.edit');

    const spy = sinon.spy();
    const model = {
      table_rows: [{}],
    };
    model.table_rows.removeObject = spy;

    controller.set('model', model);

    controller.send('removeRow');

    assert.ok(spy.calledOnce);
    assert.ok(spy.calledWith(model.table_rows[0]));
  });

  test('add a column', function (assert) {
    const controller = this.owner.lookup('controller:tables.edit');

    const spy = sinon.spy();
    const model = {
      store: { createRecord: spy },
      table_rows: [
        {
          table_columns: [],
        },
      ],
    };

    controller.set('model', model);

    assert.strictEqual(controller.model.table_rows[0].table_columns.length, 0);

    controller.send('addColumn');

    assert.ok(spy.calledOnce);
    assert.ok(
      spy.calledWith('table-column', {
        value: '',
        table_row: model.table_rows[0],
      })
    );
    assert.strictEqual(controller.model.table_rows[0].table_columns.length, 1);
  });

  test('remove a column', function (assert) {
    const controller = this.owner.lookup('controller:tables.edit');

    const spy = sinon.spy();
    const model = {
      table_rows: [
        {
          table_columns: [{}],
        },
      ],
    };
    model.table_rows[0].table_columns.removeObject = spy;

    controller.set('model', model);

    controller.send('removeColumn');

    assert.ok(spy.calledOnce);
    assert.ok(spy.calledWith(model.table_rows[0].table_columns[0]));
  });
});
