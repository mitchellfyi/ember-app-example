import Route from '@ember/routing/route';

export default class TablesRoute extends Route {
  model() {
    return {
      id: 1,
      name: 'Example Table 1',
    };
  }
}
