import { BaseModule } from '../utils/BaseModule.js';

export class MarketSystem extends BaseModule {
  constructor(config = {}) {
    super(config);
    this.rng = config.rng;
    this.price = 100;
    this.mu = 0.0002;
    this.sigma = 0.04;
    this.dt = 1;
    this.tickMs = 5000;
    this.elapsed = 0;
    this.history = [];
  }

  update(deltaTime) {
    this.elapsed += deltaTime;
    if (this.elapsed < this.tickMs) return;
    this.elapsed = 0;
    const epsilon = (this.rng.next() - 0.5) * 2;
    const orderImbalanceImpact = (this.rng.next() - 0.5) * 0.002 * this.price;
    const dP = this.mu * this.price * this.dt + this.sigma * this.price * epsilon * Math.sqrt(this.dt) + orderImbalanceImpact;
    this.price = Math.max(1, this.price + dP);
    this.history.push({ t: Date.now(), p: this.price });
  }
}
