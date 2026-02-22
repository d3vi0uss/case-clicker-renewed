import { BaseModule } from '../utils/BaseModule.js';

export class GameState extends BaseModule {
  constructor(config = {}) {
    super(config);
    this.key = config.key || 'ccr-save-v1';
    this.state = {
      wallet: 1000,
      inventory: [],
      trades: [],
      wagers: 0,
      caseOpens: 0,
      liquidityProvided: 0,
      prestigeLevel: 0,
      createdAt: Date.now(),
    };
  }

  init() {
    super.init();
    const raw = localStorage.getItem(this.key);
    if (raw) this.state = { ...this.state, ...JSON.parse(raw) };
  }

  save() { localStorage.setItem(this.key, JSON.stringify(this.state)); }
}
