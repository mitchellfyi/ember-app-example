import Route from '@ember/routing/route';

export default class TablesRoute extends Route {
  model() {
    return [
      {
        name: 'Example Table',
      },
    ];
  }
}
