import WebFont from 'webfontloader';


import Utils from '../Utils/Utils';
import Logo from '../Sprites/Logo';

import {HALF} from '../contants/math';

class Boot extends Phaser.State {
  init() {
    this.fontsReady = false;
    this.fontsLoaded = this.fontsLoaded.bind(this);
  }

  preload() {


    WebFont.load({
      google: {
        families: ['Nunito']
      },
      custom: {
        families: ['28-days-later'],
        urls: ['src/css/style.css']
      },
      active: this.fontsLoaded
    });

    this.game.load.image("Logo", "src/assets/images/logo-ka.png");
    this.game.load.image("PreloaderBackground", "src/assets/Boot/Background.png");
    this.game.load.image("bloodier_saw", "src/assets/Game/saws/bloodier_saw.png");

    //Cow
    this.game.load.atlas("Cow", "src/assets/Game/Cow/Cow.png", "src/assets/Game/Cow/Cow.json");
    this.game.load.atlas("Cow2", "src/assets/Game/Cow/Cow2.png", "src/assets/Game/Cow/Cow2.json");

    //Butcher
    this.game.load.atlas("Butcher", "src/assets/Game/Butcher/Butcher.png", "src/assets/Game/Butcher/Butcher.json");
    this.game.load.atlas("Butcher2", "src/assets/Game/Butcher/Butcher2.png", "src/assets/Game/Butcher/Butcher2.json");

  }

  create() {
    const halfWidth = this.game.width * HALF;
    const halfHeight = this.game.height * HALF;

    this.game.stage.backgroundColor = "#FFF";
    this.game.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
    const bootLogo = this.game.add.image(halfWidth, halfHeight, "Logo");
    bootLogo.anchor.set(HALF,HALF);

  }

  render() {
    if (this.fontsReady) {
      this.game.state.start("Preloader");
    }
  }

  fontsLoaded() {
    console.log('font loaded');
    this.fontsReady = true
  }

}


export default Boot;