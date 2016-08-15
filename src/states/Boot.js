import Phaser from 'phaser';
import WebFont from 'webfontloader';

import Utils from '../Utils/Utils';

import Logo from '../Sprites/Logo';



export default class extends Phaser.State {
  init () {
    this.stage.backgroundColor = '#123';
    this.fontsReady = false;
    this.fontsLoaded = this.fontsLoaded.bind(this);
  }

  preload () {
    WebFont.load({
      google: {
        families: ['Nunito']
      },
      active: this.fontsLoaded
    });

    let text = this.add.text(this.world.centerX, this.world.centerY, 'loading fonts', { font: '16px Arial', fill: '#dddddd', align: 'center' });
    text.anchor.setTo(0.5, 0.5);

    this.load.image('loaderBg', './assets/images/loader-bg.png');
    this.load.image('loaderBar', './assets/images/loader-bar.png');
  }

  create() {
    this.logo = new Logo({
      game: this.game,
      x: this.game.world.centerX,
      y: this.game.world.centerY,
      asset: 'logo'
    });

    // set the sprite width to 30% of the game width
    Utils.setResponsiveWidth(this.logo, 30, this.game.world);
    this.game.add.existing(this.logo);

  }

  render () {
    if (this.fontsReady) {
      this.game.time.events.add( 1000,() => {
        this.state.start('Game');
      });
    }
  }

  fontsLoaded () {
    console.log('font loaded');
    this.fontsReady = true
  }

}
