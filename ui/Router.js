import { BaseModule } from '../utils/BaseModule.js';

export class Router extends BaseModule {
  constructor(config = {}) {
    super(config);
    this.routes = config.routes || {};
    this.onRoute = config.onRoute;
    this.current = null;
  }

  init() {
    super.init();
    window.addEventListener('hashchange', () => this.resolve());
    this.resolve();
  }

  resolve() {
    const key = location.hash || '#/dashboard';
    const Page = this.routes[key] || this.routes['#/dashboard'];
    this.current = key;
    this.onRoute(Page, key);
  }
}
