import { BaseModule } from '../utils/BaseModule.js';
export class Mines extends BaseModule { constructor(config={}){ super(config); this.pf=config.provablyFair; } async reveal(index=0){ const r=await this.pf.roll(); return { index, safe:r.result>0.2, ...r }; } }
