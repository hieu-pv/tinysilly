// import { Authenticate } from '@nsilly/auth';
// import { RequestParser, ServiceProvider } from '@nsilly/support';
// import { App } from '@nsilly/container';
// import Models from '../Models';

// export default class AppServiceProvider extends ServiceProvider {
export default class AppServiceProvider {
  register() {
    // App.singleton('Auth', Authenticate);
    // App.singleton('Request', RequestParser);
  }
  boot() {
    // App.make('Auth').setModel(Models);
  }
}
