import { BaseModule } from '../utils/BaseModule.js';

export class RNG extends BaseModule {
  constructor(config = {}) {
    super(config);
    this.seed = config.seed || 123456789;
  }

  setSeed(seed) { this.seed = seed >>> 0; }

  next() {
    this.seed = (1664525 * this.seed + 1013904223) >>> 0;
    return this.seed / 4294967296;
  }
}
