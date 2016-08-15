import Phaser from 'phaser'

import Boot from './Boot';
import Game from './Game';

import Utils  from '../utils/Utils';

class Preloader extends Phaser.State {
  init () {}

  preload () {
    //put all your assets here if you'd like them in one place
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg');
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar');
    Utils.centerGameObjects([this.loaderBg, this.loaderBar]);

    this.load.setPreloadSprite(this.loaderBar);
    //
    // load your assets
    //
    this.load.image('logo', 'assets/images/logo-ka.png');
  }

  create () {
    this.initStates();
    this.setScale();

    this.game.state.start("Boot");
  }

  initStates() {
    this.game.state.add('Boot',Boot);
    this.game.state.add('Game',Game);
  }

  setScale() {
    this.game.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
  }
}

export default Preloader;