import RESTAdapter from '@ember-data/adapter/rest';
import ENV from 'ember-app-supabase-server-example/config/environment';

export default class ApplicationAdapter extends RESTAdapter {
  namespace = ENV.API_NAMESPACE;
  host = ENV.API_HOST;

  buildURL(...args: any[]) {
    return `${super.buildURL(...args)}.json`;
  }
}
