import { BasePage } from './BasePage.js';
export class PrestigePage extends BasePage {
  mount(root){
    root.innerHTML=`<div class="panel"><h3>Prestige</h3><p>Multiplier: ${this.ctx.prestige.multiplier.toFixed(2)}x</p><button id="prestigeBtn">Prestige Reset</button></div>`;
    root.querySelector('#prestigeBtn').onclick=()=>{ this.ctx.prestige.prestige(); alert('Prestiged'); };
  }
}
