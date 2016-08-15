/* globals __DEV__ */
import Phaser from 'phaser'

import Utils from '../Utils/Utils'

class Game extends Phaser.State {

  init() {
  }

  preload() {

  }

  create() {
    let bitmapData = this.game.add.bitmapData(200, 200);

    bitmapData.ctx.beginPath();
    bitmapData.ctx.fillStyle = '#456';
    bitmapData.ctx.strokeStyle = '#ccc';
    bitmapData.ctx.lineWidth = 20;
    bitmapData.ctx.arc(bitmapData.width / 2, bitmapData.height / 2, 50, 0, Math.PI * 2);
    bitmapData.ctx.stroke();
    bitmapData.ctx.fill();
    bitmapData.ctx.closePath();

    this.bitmapDataSprite = this.game.add.sprite(400, 400, bitmapData);
    this.bitmapDataSprite.anchor.set(0.5, 0.5);

    var alphaTween = this.game.add.tween(this.bitmapDataSprite);
    alphaTween.to({ alpha: 0 }, 1000, Phaser.Easing.Default, true, 100, false, true);

    var positionTween = this.game.add.tween(this.bitmapDataSprite.position);
    positionTween.to({ x: 800, y: 500 }, 2000, Phaser.Easing.Bounce.Out, true, 0, false, true);
  };

  update() {

  }

  /*  render() {
   if (__DEV__) {
   this.game.debug.spriteInfo(this.logo, 32, 32);
   }
   }*/
}

export default Game;