import { HALF } from '../contants/math';
import BloodEmitter from '../GraphicUtils/BloodEmitter';

class Menu extends Phaser.State {

  startGame() {
    this.game.state.start('Game')
  }

  exitGame() {

    this.game.destroy();

  }

  preload() {
    let saw1, saw2, saw3, sawGroup;

  }

  create() {
    const halfWidth = this.game.width * HALF;
    const halfHeight = this.game.height * HALF;

    this.game.add.image(0, 0, "MainScreen");

    let playButton = this.game.add.button(halfWidth, this.game.height * 0.55, "PlayButton", this.startGame, this);
    playButton.input.priorityID = 1;
    playButton.anchor.set(0.5);

    let quitButton = this.game.add.button(halfWidth, this.game.height * 0.8, "QuitButton", this.exitGame, this);
    quitButton.input.priorityID = 1;
    quitButton.anchor.set(0.5);


    this.saw1 = this.game.add.image(230, 100, 'bloody_saw');
    this.saw1.scale.set(0.3);
    this.saw1.anchor.set(0.5);


    this.saw2 = this.game.add.image(1130, 230, 'bloodier_saw');
    this.saw2.scale.set(0.4);
    this.saw2.anchor.set(0.5);


    this.saw3 = this.game.add.image(50, 670, 'bloodier_saw');
    this.saw3.scale.set(0.9);
    this.saw3.anchor.set(0.5);

    this.sawGroup = this.game.add.group();
    this.sawGroup.addMultiple([this.saw1, this.saw2, this.saw3]);

    let bloofEmitter = new BloodEmitter(this.game, 50, 1000);
    bloofEmitter.emitter.x = this.game.width * 0.18;
    bloofEmitter.emitter.y = this.game.height * 0.18;
    bloofEmitter.emitter.start(false, 1000, 0, 2000, false);

    let bloofEmitter2 = new BloodEmitter(this.game, 50, 1000);
    bloofEmitter2.emitter.x = this.game.width * 0.88;
    bloofEmitter2.emitter.y = this.game.height * 0.4;
    bloofEmitter2.emitter.start(false, 1000, 0, 2000, false);


    this.game.world.bringToTop(this.sawGroup);
  }

  update() {
    this.saw1.rotation += 0.04;
    this.saw2.rotation -= 0.05;
    this.saw3.rotation += 0.02;


  }
}


export default Menu;