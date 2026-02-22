import { BasePage } from './BasePage.js';
export class CasesPage extends BasePage {
  mount(root){
    root.innerHTML = `<div class="panel"><h3>Cases</h3><button id="openCase">Open Case ($100)</button><pre id="caseResult"></pre></div>`;
    root.querySelector('#openCase').onclick = () => {
      const item = this.ctx.caseSystem.openCase(100);
      root.querySelector('#caseResult').textContent = item ? JSON.stringify(item, null, 2) : 'Not enough funds';
    };
  }
}
