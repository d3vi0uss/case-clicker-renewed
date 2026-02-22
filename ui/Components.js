export const Components = {
  panel: (title, body) => `<section class="panel"><h3>${title}</h3>${body}</section>`,
  metric: (label, value) => `<div class="metric"><span>${label}</span><strong>${value}</strong></div>`,
};
