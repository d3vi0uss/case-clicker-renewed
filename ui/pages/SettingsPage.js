import { BasePage } from './BasePage.js';
export class SettingsPage extends BasePage {
  mount(root){
    root.innerHTML='<div class="panel"><h3>Settings</h3><button id="seedBtn">Regenerate Seeds</button><button id="exportBtn">Export Save</button></div>';
    root.querySelector('#seedBtn').onclick=()=>this.ctx.provablyFair.regenerateSeeds();
    root.querySelector('#exportBtn').onclick=()=>{
      const blob = new Blob([JSON.stringify(this.ctx.state.state,null,2)], {type:'application/json'});
      const a = document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='save.json'; a.click();
    };
  }
}
