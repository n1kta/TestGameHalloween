const healthPlayer = 3;
const healthSimpleEnemy = 1;
const healthHardEnemy = 5;

const attack = 1;

function create ()
{
    /////////////// GROUPS /////////////////////////

    walls = this.physics.add.staticGroup();
    floor = this.physics.add.staticGroup();
    hearts = this.physics.add.staticGroup();

    /// 1:positionToInsertX, 2:positionToInsertY, 3:ItemsX, 4:ItemsY, 5:image, 6:width, 7:height, 8:entity
    mapGen(50, 50, 13, 1, 'grass', 100, 100, walls);
    mapGen(50, 150, 1, 6, 'grass', 100, 100, walls);
    mapGen(50, 750, 13, 1, 'grass', 100, 100, walls);
    mapGen(150, 150, 12, 6, 'orange', 100, 100, floor);

    //////////////////////////// ENTITIES ////////////////////////
    hearts.create(150, 50, 'heart');
    hearts.create(200, 50, 'heart');
    hearts.create(250, 50, 'heart');

    player = this.physics.add.sprite(200, 200, 'dude');
    player.health = hearts.children.entries.length;
    player.attack = attack;
    player.setCollideWorldBounds(true);

    enemy = this.physics.add.sprite(1000, 200, 'enemy');
    enemy.health = healthSimpleEnemy;
    enemy.attack = attack;
    enemy.setCollideWorldBounds(true);

    cursors = this.input.keyboard.createCursorKeys();

    ///////////////////////////// ANIMATIONS //////////////////////////

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 7, end: 13 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 6 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'up',
        frames: this.anims.generateFrameNumbers('dude2', { start: 6, end: 11 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'down',
        frames: this.anims.generateFrameNumbers('dude2', { start: 0, end: 5 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'turn',
        frames: this.anims.generateFrameNumbers('dudeStand', { start: 0, end: 4 }),
        frameRate: 10,
    });

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('enemy', { start: 7, end: 13 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('enemy', { start: 0, end: 6 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'turn',
        frames: this.anims.generateFrameNumbers('enemyStand', { start: 0, end: 4 }),
        frameRate: 10,
    });

    this.anims.create({
        key: 'attack',
        frames: this.anims.generateFrameNumbers('dude_punch', { start: 0, end: 4 }),
        frameRate: 20,
    });

    ///////////////////////////// COLLISION //////////////////////////

    this.physics.add.collider(player, walls);
    this.physics.add.collider(enemy, walls);
}