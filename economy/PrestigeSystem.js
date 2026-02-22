import { BaseModule } from '../utils/BaseModule.js';
export class PrestigeSystem extends BaseModule {
  constructor(config={}){ super(config); this.state=config.state; }
  get multiplier(){ return Math.min(1.5, 1 + this.state.state.prestigeLevel * 0.01); }
  prestige(){ this.state.state.wallet=1000; this.state.state.inventory=[]; this.state.state.trades=[]; this.state.state.prestigeLevel += 1; this.state.save(); }
}
