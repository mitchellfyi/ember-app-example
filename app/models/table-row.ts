import Model, { hasMany } from '@ember-data/model';
import type TableColumnModel from './table-column';

export default class TableRowModel extends Model {
  @hasMany('table_column', { async: false })
  declare table_columns: TableColumnModel[];
}
