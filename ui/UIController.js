import { BaseModule } from '../utils/BaseModule.js';
import { Router } from './Router.js';
import { DashboardPage } from './pages/DashboardPage.js';
import { ClickPage } from './pages/ClickPage.js';
import { CasesPage } from './pages/CasesPage.js';
import { InventoryPage } from './pages/InventoryPage.js';
import { MarketPage } from './pages/MarketPage.js';
import { CasinoPage } from './pages/CasinoPage.js';
import { StatsPage } from './pages/StatsPage.js';
import { DatabasePage } from './pages/DatabasePage.js';
import { LiquidityPage } from './pages/LiquidityPage.js';
import { PrestigePage } from './pages/PrestigePage.js';
import { LeaderboardPage } from './pages/LeaderboardPage.js';
import { SettingsPage } from './pages/SettingsPage.js';

export class UIController extends BaseModule {
  constructor(config={}){
    super(config);
    this.ctx = config.ctx;
    this.root = config.root;
    this.page = null;
  }

  init(){
    super.init();
    const routes = {
      '#/dashboard': DashboardPage,
      '#/click': ClickPage,
      '#/cases': CasesPage,
      '#/inventory': InventoryPage,
      '#/market': MarketPage,
      '#/casino': CasinoPage,
      '#/stats': StatsPage,
      '#/database': DatabasePage,
      '#/liquidity': LiquidityPage,
      '#/prestige': PrestigePage,
      '#/leaderboard': LeaderboardPage,
      '#/settings': SettingsPage,
    };
    this.router = new Router({ routes, onRoute: (Page) => this.setPage(Page) });
    this.router.init();
  }

  setPage(Page){
    if(this.page) this.page.unmount();
    this.page = new Page(this.ctx);
    this.page.init();
    this.page.mount(this.root);
  }

  update(delta){ if(this.page?.update) this.page.update(delta); }
}
