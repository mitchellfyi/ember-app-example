import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TablesEditRoute extends Route {
  @service store: any;

  model({ table_id }: { table_id: string }) {
    return this.store.findRecord('table', table_id);
  }
}
