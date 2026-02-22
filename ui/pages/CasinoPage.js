import { BasePage } from './BasePage.js';
export class CasinoPage extends BasePage {
  mount(root){
    root.innerHTML = `<div class="panel"><h3>Casino</h3><button id="diceBtn">Roll Dice (<50 wins)</button><pre id="diceOut"></pre></div>`;
    root.querySelector('#diceBtn').onclick = async () => {
      const r = await this.ctx.casino.games.dice.play(50);
      root.querySelector('#diceOut').textContent = JSON.stringify(r, null, 2);
    };
  }
}
