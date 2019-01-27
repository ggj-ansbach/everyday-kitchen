class StoveScene extends Phaser.Scene {
  constructor () {
    super({key: game_data.scene_list.STOVE});
  }

  onDown () {
    console.log("Going back to MainScene");
    this.scene.switch(game_data.scene_list.MAIN, {});
    game.sound.stopAll();
  }

  preload () {
    this.load.image('cook', '/assets/images/backgrounds/cook.png');
    this.load.image('close', '/assets/images/objects/close.png');
  }

  create () {
    console.log("In the StoveScene");
    this.add.sprite(400 , 300, 'cook');

    // Add time text:
    timerHeader = this.add.bitmapText(105, 460, 'carrier_command', 'TIME', 20);
    timerValue = this.add.bitmapText(100, 510, 'carrier_command', timerInitValue, 40);
    timerText = this.add.bitmapText(190, 530, 'carrier_command', 's', 20);

    // Create close after tablet, otherwise backgroudn may cover close
    let close = this.add.sprite(755, 45, 'close');
    close.setInteractive();
    close.on('pointerdown', this.onDown.bind(this));

    this.input.keyboard.on("keyup_ESC", () => {
      this.onDown();
    }, this);

    console.log('StoveScene created');
  }
}
