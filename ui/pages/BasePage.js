export class BasePage {
  constructor(ctx){ this.ctx = ctx; }
  init() {}
  mount(root){ root.innerHTML = '<div class="panel">Base Page</div>'; }
  unmount() {}
  update() {}
  destroy() {}
}
