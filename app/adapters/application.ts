import RESTAdapter from '@ember-data/adapter/rest';

export default class ApplicationAdapter extends RESTAdapter {
  namespace = 'api/v1';
  host = 'http://localhost:4200';

  buildURL(...args: any[]) {
    return `${super.buildURL(...args)}.json`;
  }
}
