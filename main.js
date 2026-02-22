import { RNG } from './core/RNG.js';
import { GameState } from './core/GameState.js';
import { EventBus } from './core/EventBus.js';
import { ProvablyFair } from './core/ProvablyFair.js';
import { CaseSystem } from './economy/CaseSystem.js';
import { MarketSystem } from './economy/MarketSystem.js';
import { LiquidityProviderSystem } from './economy/LiquidityProviderSystem.js';
import { ReputationSystem } from './economy/ReputationSystem.js';
import { PrestigeSystem } from './economy/PrestigeSystem.js';
import { CasinoManager } from './casino/CasinoManager.js';
import { BackgroundEngine } from './graphics/BackgroundEngine.js';
import { UIController } from './ui/UIController.js';

const sidebar = document.getElementById('sidebar');
const routes = ['dashboard','click','cases','inventory','market','casino','stats','database','liquidity','prestige','leaderboard','settings'];
sidebar.innerHTML = routes.map((r)=>`<a href="#/${r}">${r[0].toUpperCase()+r.slice(1)}</a>`).join('');

const rng = new RNG({ seed: 424242 });
const state = new GameState();
const eventBus = new EventBus();
const provablyFair = new ProvablyFair();
const caseSystem = new CaseSystem({ rng, state });
const market = new MarketSystem({ rng });
const liquidity = new LiquidityProviderSystem({});
const reputation = new ReputationSystem({ state });
const prestige = new PrestigeSystem({ state });
const casino = new CasinoManager({ provablyFair });
const background = new BackgroundEngine({ el: document.body });
const ui = new UIController({ root: document.getElementById('app'), ctx: { state, rng, eventBus, provablyFair, caseSystem, market, liquidity, reputation, prestige, casino } });

[state, eventBus, provablyFair, caseSystem, market, liquidity, reputation, prestige, casino, background, ui].forEach((m)=>m.init());

let last = performance.now();
function loop(now){
  const delta = now - last; last = now;
  ui.update(delta);
  background.update(delta);
  market.update(delta);
  eventBus.process();
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);

window.addEventListener('beforeunload', ()=>state.save());
if ('serviceWorker' in navigator) navigator.serviceWorker.register('./service-worker.js');
