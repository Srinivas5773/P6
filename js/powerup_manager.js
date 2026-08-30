/**
 * Powerup Manager and Inventory Vault
 * Manages in-game powerup abilities (Peek, Freeze Timer, Auto Match).
 */

class PowerupManager {
  constructor() {
    this.powerups = {
      peek: { name: 'Card Peek', count: 3, duration: 1500 },
      freeze: { name: 'Time Freeze', count: 2, duration: 5000 },
      autoMatch: { name: 'Instant Match', count: 1, duration: 0 }
    };
  }

  usePowerup(type) {
    const powerup = this.powerups[type];
    if (!powerup || powerup.count <= 0) {
      return { success: false, remaining: 0 };
    }
    powerup.count -= 1;
    return { success: true, remaining: powerup.count, powerup };
  }

  addPowerup(type, quantity = 1) {
    if (this.powerups[type]) {
      this.powerups[type].count += quantity;
    }
  }

  getInventory() {
    return { ...this.powerups };
  }
}

module.exports = new PowerupManager();
