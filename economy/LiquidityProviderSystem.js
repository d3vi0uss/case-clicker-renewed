import { BaseModule } from '../utils/BaseModule.js';
export class LiquidityProviderSystem extends BaseModule { constructor(config={}){ super(config); this.totalLiquidity=0; this.systemProfit=0; this.utilization=0.5; } getAPY(){ return this.totalLiquidity? (this.systemProfit/this.totalLiquidity)*this.utilization:0; } }
