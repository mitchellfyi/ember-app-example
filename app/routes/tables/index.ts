import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TablesIndexRoute extends Route {
  @service store: any;

  model() {
    return this.store.findAll('table');
  }
}
