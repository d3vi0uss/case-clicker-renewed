import { BaseModule } from '../utils/BaseModule.js';

export class BackgroundEngine extends BaseModule {
  constructor(config={}){ super(config); this.el=config.el; this.t=0; }
  update(delta){ this.t += delta*0.0002; if(this.el) this.el.style.background = `radial-gradient(circle at ${50+Math.sin(this.t)*10}% 20%, #1a1a26, #0c0c12)`; }
}
