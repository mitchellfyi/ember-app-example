import Route from '@ember/routing/route';

export default class TablesRoute extends Route {
  async model() {
    let response = await fetch('/api/v1/tables.json');
    let json = await response.json();

    return json[0];
  }
}
