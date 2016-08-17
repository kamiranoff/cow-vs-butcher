import Blood from './Blood';

class BloodEmitter {
  constructor(game, width, gravity) {
    this.game = game;
    this.emitter = this.game.add.emitter(100, 100, 2000);
    this.emitter.particleClass = Blood;
    this.emitter.width = width;
    this.emitter.makeParticles("Blood");
    this.emitter.gravity = gravity;
    this.emitter.setAlpha(0.8, 0.3);
  }

  start(x, y, explode, lifespan, frequency, quantity, forceQuantity) {
    this.emitter.x = x;
    this.emitter.y = y;
    this.emitter.start(explode, lifespan, frequency, quantity, forceQuantity);
  }
}

export default BloodEmitter;