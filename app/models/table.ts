import Model, { attr, hasMany } from '@ember-data/model';
import type TableRowModel from './table-row';

export default class TableModel extends Model {
  @attr('string') declare name: string;
  @attr('string') declare email: string;
  @hasMany('table_row', { async: false })
  declare table_rows: TableRowModel[];
}
