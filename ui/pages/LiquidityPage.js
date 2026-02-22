import { BasePage } from './BasePage.js';
export class LiquidityPage extends BasePage { mount(root){ root.innerHTML=`<div class="panel"><h3>Liquidity</h3><p>APY: ${(this.ctx.liquidity.getAPY()*100).toFixed(2)}%</p></div>`;} }
