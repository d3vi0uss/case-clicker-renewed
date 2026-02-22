import { BaseModule } from '../utils/BaseModule.js';

export class EventBus extends BaseModule {
  constructor(config = {}) {
    super(config);
    this.handlers = new Map();
    this.queue = [];
  }

  on(event, handler) {
    const arr = this.handlers.get(event) || [];
    arr.push(handler);
    this.handlers.set(event, arr);
  }

  emit(event, payload) {
    this.queue.push({ event, payload });
  }

  process() {
    while (this.queue.length) {
      const e = this.queue.shift();
      (this.handlers.get(e.event) || []).forEach((h) => h(e.payload));
    }
  }

  destroy() {
    super.destroy();
    this.handlers.clear();
    this.queue = [];
  }
}
