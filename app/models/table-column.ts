import Model, { attr } from '@ember-data/model';

export default class TableColumnModel extends Model {
  @attr('string') declare value: string;
}
