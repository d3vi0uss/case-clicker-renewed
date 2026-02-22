import { BaseModule } from '../utils/BaseModule.js';

export class ProvablyFair extends BaseModule {
  constructor(config = {}) {
    super(config);
    this.clientSeed = config.clientSeed || 'client-default';
    this.serverSeed = config.serverSeed || 'server-default';
    this.nonce = config.nonce || 0;
    this.history = [];
  }

  async roll(customNonce) {
    const nonce = customNonce ?? this.nonce++;
    const payload = `${this.clientSeed}${this.serverSeed}${nonce}`;
    const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(payload));
    const hash = [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('');
    const number = parseInt(hash.substring(0, 13), 16);
    const result = number / 2 ** 52;
    const entry = { clientSeed: this.clientSeed, serverSeed: this.serverSeed, nonce, hash, result };
    this.history.push(entry);
    return entry;
  }

  verify(entry) {
    return `${entry.clientSeed}${entry.serverSeed}${entry.nonce}`;
  }

  regenerateSeeds() {
    this.clientSeed = `client-${crypto.randomUUID()}`;
    this.serverSeed = `server-${crypto.randomUUID()}`;
    this.nonce = 0;
  }
}
