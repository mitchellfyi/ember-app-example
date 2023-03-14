import Controller from '@ember/controller';
import { action } from '@ember/object';
import type TableModel from '../../models/table';

export default class TablesEditController extends Controller {
  declare model: TableModel;

  get newTableColumn() {
    return this.model.store.createRecord('table-column');
  }

  @action
  addColumn() {
    this.model.table_rows = this.model.table_rows.map((row) => {
      const column = this.model.store.createRecord('table-column', {
        value: '',
        table_row: row,
      });

      row.table_columns.push(column);

      // column.save();

      return row;
    });
  }

  @action addRow() {
    const row = this.model.store.createRecord('table-row', {
      table: this.model,
    });

    let columns = this.model.table_rows[0]?.table_columns?.slice()?.map(() => {
      const column = this.model.store.createRecord('table-column', {
        value: '',
        table_row: row,
      });

      // column.save();

      return column;
    });

    if (!columns || columns.length === 0) {
      const column = this.model.store.createRecord('table-column', {
        value: '',
        table_row: row,
      });

      columns = [column];

      // column.save();
    }

    row.table_columns = columns;

    this.model.table_rows.push(row);

    // row.save();
  }

  @action removeRow() {
    const hasValues =
      this.model.table_rows
        .slice(-1)[0]
        ?.table_columns.map((column) => column.value)
        .join('') !== '';

    if (
      !hasValues ||
      (hasValues && confirm('Are you sure you want to delete this row?'))
    ) {
      const row = this.model.table_rows.slice(-1)[0];

      if (row) {
        this.model.table_rows.removeObject(row);
        // row.destroyRecord();
      }
    }
  }

  @action removeColumn() {
    const hasValues =
      this.model.table_rows
        .map((row) => row.table_columns.slice(-1)[0]?.value)
        .join('') !== '';

    if (
      !hasValues ||
      (hasValues && confirm('Are you sure you want to delete this column?'))
    ) {
      this.model.table_rows = this.model.table_rows.map((row) => {
        const column = row.table_columns.slice(-1)[0];

        if (column) {
          row.table_columns.removeObject(column);
          // column.destroyRecord();
        }

        return row;
      });
    }
  }

  @action onSubmit(event: Event) {
    this.model.save();

    event.preventDefault();
  }
}
