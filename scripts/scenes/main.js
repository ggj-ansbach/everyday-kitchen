let player;
let controls;
let blocks;

class Main extends Phaser.Scene {
  constructor() {
    super({key: "Main"});
  }

  preload() {
    this.load.image('floor', '/assets/floor.png');
    let hud = this.load.image('hud', '/assets/hud.png');
    hud.scaleX = 0.5
    hud.scaleY = 0.5
    this.load.image('shelve', '/assets/shelve.png');
    this.load.image('table', '/assets/table.png');
    this.load.image('stove', '/assets/stove.png');
    this.load.spritesheet('chef', '/assets/chef.png', {frameWidth: 54, frameHeight: 78});
  }

  create() {
    blocks = this.physics.add.staticGroup();

    blocks.create(400, 300, 'floor');
    blocks.create(400, 508, 'hud');
    blocks.create(118, 38, 'shelve');
    blocks.create(420, 348, 'table');
    blocks.create(732, 178, 'stove');

    player = this.physics.add.sprite(150, 325, 'chef').setScale(2);

    player.body.allowGravity = false;
    player.setCollideWorldBounds(true);

    // Character Frame Set:
    // 0   1  2  3 [Base, Down]
    // 4   5  6  7 [Left]
    // 8   9 10 11 [Right]
    // 12 13 14 15 [Up

    this.anims.create({
      key: 'up',
      frames: this.anims.generateFrameNumbers('chef', {start: 12, end: 15}),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'down',
      frames: this.anims.generateFrameNumbers('chef', {start: 0,  end: 3}),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('chef', {start: 4, end: 7}),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('chef', {start: 8, end: 11}),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'turn',
      frames: [{key: 'chef', frame: 0}],
      frameRate: 10
    });

    this.physics.add.collider(player, blocks);

    controls = this.input.keyboard.createCursorKeys();
  }

  update() {
    if (controls.up.isDown) {
      player.setVelocityY(-180);
      player.anims.play('up', true);
    } else if (controls.down.isDown) {
      player.setVelocityY(180);
      player.anims.play('down', true);
    } else if (controls.left.isDown) {
      player.setVelocityX(-180);
      player.anims.play('left', true);
    } else if (controls.right.isDown) {
      player.setVelocityX(180);
      player.anims.play('right', true);
    } else {
      player.setVelocityX(0);
      player.setVelocityY(0);
      player.anims.play('turn', true);
    }
  }
}
