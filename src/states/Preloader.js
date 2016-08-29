import Boot from './Boot';
import Game from './Game';

import BloodEmitter from '../GraphicUtils/BloodEmitter';

import Utils  from '../Utils/Utils';
import {HALF} from '../contants/math';
import {BLOOD2,BLOOD1} from '../contants/colors';

class Preloader extends Phaser.State {

  preload() {
    //put all your assets here if you'd like them in one place
    //
    // load your assets
    //

    //UI
    this.game.load.image("MainScreen", "src/assets/Boot/main_screen.png");
    this.game.load.image("PlayButton", "src/assets/Boot/play_butt.png");
    this.game.load.image("QuitButton", "src/assets/Boot/quit_butt.png");
    this.game.load.image("Field", "src/assets/Boot/field.png");
    //Level 1
    this.game.load.image("sky", "src/assets/Game/Backgrounds/Level 1/sky.png");
    this.game.load.image("mountains_front", "src/assets/Game/Backgrounds/Level 1/mountains_front2.png");
    this.game.load.image("mountains_back", "src/assets/Game/Backgrounds/Level 1/mountains_back1.png");
    this.game.load.image("floor_outdoor", "src/assets/Game/Backgrounds/Level 1/floor_outdoor.png");
    this.game.load.image("grass", "src/assets/Game/Backgrounds/Level 1/grass.png");
    this.game.load.image("tree", "src/assets/Game/Backgrounds/Level 1/tree.png");
    this.game.load.image("rock1", "src/assets/Game/Backgrounds/Level 1/rock1.png");
    this.game.load.image("rock2", "src/assets/Game/Backgrounds/Level 1/rock2.png");
    //Level 2
    this.game.load.image("steak", "src/assets/Game/Backgrounds/Level 2/steak.png");
    this.game.load.image("slaughter_background", "src/assets/Game/Backgrounds/Level 2/background.png");
    this.game.load.image("platform", "src/assets/Game/Backgrounds/Level 2/platform_top.png");
    this.game.load.image("ground", "src/assets/Game/Backgrounds/Level 2/floor_slaughter.png");
    //Killer Collection
    this.game.load.image("default_saw", "src/assets/Game/Saws/default_saw.png");
    this.game.load.image("bloody_saw", "src/assets/Game/Saws/bloody_saw.png");
    //Particles
    this.game.load.image("bloody_bone", "src/assets/Game/Particles/bloody-bone.png");
    this.game.load.image("bone", "src/assets/Game/Particles/bone.png");
    this.game.load.image("burger", "src/assets/Game/Particles/burger.png");
    this.game.load.image("sausage", "src/assets/Game/Particles/sausage.png");
    this.game.load.image("knife", "src/assets/Game/Particles/knife.png");
    this.game.load.image("bullet", "src/assets/Game/Particles/bullet.png");
    this.game.load.image("grenade", "src/assets/Game/Particles/grenade.png");
    this.game.load.image("feather", "src/assets/Game/Particles/bird-feather.png");
    //Bird
    this.game.load.atlas("Bird", "src/assets/Game/Particles/Bird.png", "src/assets/Game/Particles/Bird.json");
    //Buttons
    this.game.load.image("grenadeButtonBW", "src/assets/Game/Buttons/GrenadeBW.png");
    this.game.load.image("grenadeButton", "src/assets/Game/Buttons/Grenade.png");
    this.game.load.image("knifeButtonBW", "src/assets/Game/Buttons/ChopperBW.png");
    this.game.load.image("knifeButton", "src/assets/Game/Buttons/Chopper.png");
    this.game.load.image("shotgunButtonBW", "src/assets/Game/Buttons/ShotgunBW.png");
    this.game.load.image("shotgunButton", "src/assets/Game/Buttons/Shotgun.png");
    this.game.load.image("gmoButtonBW", "src/assets/Game/Buttons/GmoBW.png");
    this.game.load.image("gmoButton", "src/assets/Game/Buttons/Gmo.png");
    //Chests
    this.game.load.atlas("Chests", "src/assets/Game/Chests/ChestsAtlas.png", "src/assets/Game/Chests/ChestsAtlas.json");
    //Gameover
    this.game.load.image("gameOver1", "src/assets/GameOver/game_over_1.png");
    this.game.load.image("gameOver2", "src/assets/GameOver/game_over_2.png");
    this.game.load.image("platformIndoor1", "src/assets/Game/Platforms/platform_indoor_1.png");
    this.game.load.image("platformIndoor2", "src/assets/Game/Platforms/platform_indoor_2.png");
    this.game.load.image("platformOutdoor", "src/assets/Game/Platforms/platform_outdoor.png");
    this.game.load.image("wallIndoor", "src/assets/Game/Platforms/wall_indoor.png");
    this.game.load.image("wallOutdoor", "src/assets/Game/Platforms/wall_outdoor.png");
    this.game.load.image("barbeque", "src/assets/Game/Particles/barbecue.png");
    this.game.load.atlasXML("smoke", "src/assets/Game/Particles/smoke.png", "src/assets/Game/Particles/smoke.xml");

  }

  // you initialize all variables, images, sounds, classes, etc...
  create() {
    // this.game.load.onLoadComplete.add(())
    const halfWidth = this.game.width * HALF;
    const halfHeight = this.game.height * HALF;
    const thirdHeight = this.game.height * 0.33;

    this.game.time.events.add(1000, () => {
      this.game.state.start("Menu");
    }, this);

    this.game.add.sprite(0, 0, "PreloaderBackground");
    const field = this.game.add.image(halfWidth, halfHeight, "Field");
    field.anchor.set(HALF, HALF);
    field.anchor.set(0.5);
    field.rotation -= 0.05;

    const loadingStyle = { fill: BLOOD2 };
    const loadingText = this.game.add.text(halfWidth, halfHeight, "Loading", loadingStyle);
    loadingText.font = "28-days-later";
    loadingText.anchor.set(HALF, HALF);
    loadingText.fontSize = 90;
    loadingText.fontWeight = "normal";

    const bloodEmitter = new BloodEmitter(this.game, 50, 1000);
    bloodEmitter.emitter.x = halfWidth;
    bloodEmitter.emitter.y = thirdHeight;
    bloodEmitter.emitter.start(false, 2000, 0, 5000, false);

    this.saw = this.game.add.sprite(halfWidth, this.game.height * 0.3, "bloodier_saw");
    this.saw.scale.set(0.5);
    this.saw.anchor.set(0.5);

  }

  update() {
    this.saw.rotation += 0.02;
  }


}

export default Preloader;