import { BaseModule } from '../utils/BaseModule.js';
export class Coinflip extends BaseModule { constructor(config={}){ super(config); this.pf=config.provablyFair; } async play(){ const r=await this.pf.roll(); return { side:r.result<0.5?'heads':'tails', ...r }; } }
