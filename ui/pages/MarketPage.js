import { BasePage } from './BasePage.js';
export class MarketPage extends BasePage { mount(root){ root.innerHTML=`<div class="panel"><h3>Market</h3><p>GBM Price: $${this.ctx.market.price.toFixed(2)}</p><p>Tick every 5s</p></div>`;} }
