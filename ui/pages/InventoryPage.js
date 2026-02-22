import { BasePage } from './BasePage.js';
export class InventoryPage extends BasePage { mount(root){ const items=this.ctx.state.state.inventory.map(i=>`<li>${i.rarity} · float ${i.wearFloat.toFixed(4)} · $${i.value}</li>`).join(''); root.innerHTML=`<div class="panel"><h3>Inventory</h3><ul>${items||'<li>Empty</li>'}</ul></div>`;} }
