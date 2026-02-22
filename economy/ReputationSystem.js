import { BaseModule } from '../utils/BaseModule.js';
export class ReputationSystem extends BaseModule {
  constructor(config={}){ super(config); this.state=config.state; }
  get score(){ const s=this.state.state; return Math.log10((s.trades?.length||0)+1)*10 + Math.sqrt(s.wagers||0)*0.05 + (s.caseOpens||0)*0.02 + (s.liquidityProvided||0)*0.1; }
}
