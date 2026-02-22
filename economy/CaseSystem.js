import { BaseModule } from '../utils/BaseModule.js';
import { MathUtils } from '../utils/MathUtils.js';

export class CaseSystem extends BaseModule {
  constructor(config = {}) {
    super(config);
    this.rng = config.rng;
    this.state = config.state;
    this.rarities = [
      ['Consumer', 0.7992], ['Industrial', 0.1598], ['Mil-Spec', 0.032], ['Restricted', 0.0064],
      ['Classified', 0.0013], ['Covert', 0.00026], ['Rare Special', 0.00005],
    ];
  }

  openCase(price = 100) {
    if (this.state.state.wallet < price) return null;
    this.state.state.wallet -= price;
    const roll = this.rng.next();
    let acc = 0;
    let rarity = 'Consumer';
    for (const [name, p] of this.rarities) { acc += p; if (roll <= acc) { rarity = name; break; } }
    const wearFloat = MathUtils.triangularRandom(() => this.rng.next(), 0, 1, 0.25);
    const item = { id: crypto.randomUUID(), rarity, wearFloat, value: this.estimateValue(rarity, price) };
    this.state.state.inventory.push(item);
    this.state.state.caseOpens += 1;
    this.state.save();
    return item;
  }

  estimateValue(rarity, price) {
    const bands = {
      'Consumer': [0.4, 0.6], 'Industrial': [0.7, 1.0], 'Mil-Spec': [1.1, 1.5], 'Restricted': [1.5, 2.5],
      'Classified': [3, 6], 'Covert': [8, 15], 'Rare Special': [30, 80],
    };
    const [lo, hi] = bands[rarity];
    return Number((price * (lo + (hi - lo) * this.rng.next())).toFixed(2));
  }
}
