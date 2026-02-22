export class BaseModule {
  constructor(config = {}) {
    this.config = config;
    this.initialized = false;
  }

  init() { this.initialized = true; }
  update() {}
  destroy() { this.initialized = false; }
}
