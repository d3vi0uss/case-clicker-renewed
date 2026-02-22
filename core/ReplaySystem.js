import { BaseModule } from '../utils/BaseModule.js';
export class ReplaySystem extends BaseModule {
  constructor(config = {}) { super(config); this.events = []; }
  record(event) { this.events.push({ t: Date.now(), event }); }
}
