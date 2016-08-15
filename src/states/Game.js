/* globals __DEV__ */
import Phaser from 'phaser'

import Utils from '../utils/Utils'

class Game extends Phaser.State {
  init() {
  }

  preload() {
  }

  create() {
    let banner = this.add.text(this.game.world.centerX, this.game.height - 30, 'Phaser + ES6 + Webpack');
    banner.font = 'Nunito';
    banner.fontSize = 40;
    banner.fill = '#77BFA3';
    banner.anchor.setTo(0.5);


  };

/*  render() {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.logo, 32, 32);
    }
  }*/
}

export default Game;