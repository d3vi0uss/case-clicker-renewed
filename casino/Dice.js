import { BaseModule } from '../utils/BaseModule.js';
export class Dice extends BaseModule {
  constructor(config={}){ super(config); this.pf=config.provablyFair; }
  async play(target=50){ const r=await this.pf.roll(); return { roll:r.result*100, win:r.result*100<target, ...r }; }
}
