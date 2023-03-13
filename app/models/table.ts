import Model, { attr } from '@ember-data/model';

export default class TableModel extends Model {
  @attr('string') name: string;
  @attr('string') email: string;
  @attr rows: any[];
}
