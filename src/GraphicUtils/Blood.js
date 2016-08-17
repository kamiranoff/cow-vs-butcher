import Utils from '../Utils/Utils';
import {HALF} from '../contants/math';
import {BLOOD1} from '../contants/colors';

class Blood extends Phaser.Particle {

  constructor(game, x, y) {
    super(game, x, y, game.cache.getBitmapData("Blood"));
    this.game = game;
    this.radius = 5 + Math.round(Utils.getRandomFloatingPoint(0, 5));
    this.x = x;
    this.y = y;
    this.createBlood();

  }

  update() {
    if(this.alpha > 0.01) {
      this.alpha = this.alpha -  Utils.getRandomFloatingPoint(0.005,0.009);
    }
    super.update();

  }

  createBlood() {
    const bitmapData = this.game.add.bitmapData(this.radius * 2, this.radius * 2);
    bitmapData.circle(bitmapData.width * HALF, bitmapData.height * HALF, this.radius, BLOOD1);
    this.game.cache.addBitmapData("Blood", bitmapData)
  }

}

export default Blood;