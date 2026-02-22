import { BaseModule } from '../utils/BaseModule.js';
import { Dice } from './Dice.js';
import { Coinflip } from './Coinflip.js';
import { Mines } from './Mines.js';

export class CasinoManager extends BaseModule {
  constructor(config = {}) {
    super(config);
    this.games = {
      dice: new Dice(config),
      coinflip: new Coinflip(config),
      mines: new Mines(config),
    };
  }
  init() { super.init(); Object.values(this.games).forEach((g) => g.init()); }
}
