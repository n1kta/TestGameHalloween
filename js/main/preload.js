function preload ()
{

    /////////////////////// SPRITESHEETS /////////////////////

    this.load.spritesheet('dude', 'assets/player/walking_hero.png', { frameWidth: 50, frameHeight: 100 });
    this.load.spritesheet('dude2', 'assets/player/walking_hero_up_down.png', { frameWidth: 45, frameHeight: 80 });
    this.load.spritesheet('dude_punch', 'assets/player/punch.png', { frameWidth: 75, frameHeight: 80 });
    this.load.spritesheet('dudeStand', 'assets/player/animation_hero.png', {frameWidth: 45, frameHeight: 100});
    this.load.spritesheet('attack', 'assets/player/attack.png', {frameWidth: 100, frameHeight: 100});
    this.load.spritesheet('enemy', 'assets/player/walking.png', { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet('enemyStand', 'assets/player/animation.png', {frameWidth: 100, frameHeight: 100});

    ////////////////////// IMAGES ////////////////////////

    this.load.image('grass', 'assets/map/background.png');
    this.load.image('orange', 'assets/map/background-1.png');
    this.load.image('heart', 'assets/heart.png');
}