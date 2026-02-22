import { BasePage } from './BasePage.js';
import { Components } from '../Components.js';
export class DashboardPage extends BasePage {
  mount(root){
    const s=this.ctx.state.state;
    root.innerHTML = `<div class="grid">${Components.panel('Portfolio', Components.metric('Wallet', `$${s.wallet.toFixed(2)}`)+Components.metric('Inventory', s.inventory.length))}${Components.panel('Market', Components.metric('Index', this.ctx.market.price.toFixed(2))+Components.metric('Reputation', this.ctx.reputation.score.toFixed(2)))}</div>`;
  }
}
