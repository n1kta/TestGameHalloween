const healthPlayer = 3;
const healthSimpleEnemy = 1;
const healthHardEnemy = 5;
var scoreText;
let score = 0;

const attack = 1;

function create ()
{
    /////////////// GROUPS /////////////////////////


    walls = this.physics.add.staticGroup();
    floor = this.physics.add.staticGroup();
    hearts = this.physics.add.staticGroup();
    gameOver = this.physics.add.staticGroup();

    /// 1:positionToInsertX, 2:positionToInsertY, 3:ItemsX, 4:ItemsY, 5:image, 6:width, 7:height, 8:entity
    mapGen(50, 50, 13, 1, 'grass', 100, 100, walls);
    mapGen(50, 150, 1, 6, 'grass', 100, 100, walls);
    mapGen(50, 750, 13, 1, 'grass', 100, 100, walls);
    mapGen(150, 150, 12, 6, 'orange', 100, 100, floor);

    //////////////////////////// ENTITIES ////////////////////////

    // hearts.create(100, 100, 'heart').setScrollFactor(0);
    // hearts.create(150, 100, 'heart').setScrollFactor(0);
    // hearts.create(200, 100, 'heart').setScrollFactor(0);
    heart = this.physics.add.sprite(100, 100, 'heart').setScrollFactor(0)
    heart1 = this.physics.add.sprite(150, 100, 'heart').setScrollFactor(0)
    heart2 = this.physics.add.sprite(200, 100, 'heart').setScrollFactor(0)

    player = this.physics.add.sprite(200, 200, 'dude');
    player.health = 3;
    player.attack = attack;
    // player.setCollideWorldBounds(true);

    enemy = this.physics.add.sprite(1000, 200, 'enemy');
    enemy.health = healthSimpleEnemy;
    enemy.attack = attack;
    enemy.setBounce(0.2);

    enemy2 = this.physics.add.sprite(1200, 400, 'enemy');
    enemy2.health = healthSimpleEnemy;
    enemy2.attack = attack;
    enemy2.setBounce(0.2);


    boss = this.physics.add.sprite(400, 300, 'boss');

    scoreText = this.add.text(window.innerWidth - 300, 75, 'POINTS: 0', { fontFamily: 'Revalia' ,fontSize: '42px', fill: '#fff' }).setScrollFactor(0);
    // player.health = hearts.children.entries.length;
    // player.setBounce(0.2);
    // player.setCollideWorldBounds(true);

    cursors = this.input.keyboard.createCursorKeys();

    ///////////////////////////// ANIMATIONS //////////////////////////

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 8, end: 15 }),
        frameRate: 20,
        repeat: -1
    });
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 7 }),
        frameRate: 20,
        repeat: -1
    });

    this.anims.create({
        key: 'up',
        frames: this.anims.generateFrameNumbers('dude2', { start: 6, end: 11 }),
        frameRate: 20,
        repeat: -1
    });

    this.anims.create({
        key: 'down',
        frames: this.anims.generateFrameNumbers('dude2', { start: 0, end: 5 }),
        frameRate: 20,
        repeat: -1
    });
    this.anims.create({
        key: 'turn',
        frames: this.anims.generateFrameNumbers('dudeStand', { start: 0, end: 4 }),
        frameRate: 8,
    });

    this.anims.create({
        key: 'leftE',
        frames: this.anims.generateFrameNumbers('walkingEnemy', { start: 6, end: 11 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'rightE',
        frames: this.anims.generateFrameNumbers('walkingEnemy', { start: 0, end: 5 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'rightStandE',
        frames: this.anims.generateFrameNumbers('enemyStand', { start: 0, end: 2 }),
        frameRate: 5,
        repeat: -1
    });
    this.anims.create({
        key: 'leftStandE',
        frames: this.anims.generateFrameNumbers('enemyStand', { start: 3, end: 5 }),
        frameRate: 5,
        repeat: -1
    });
    this.anims.create({
        key: 'leftPunchE',
        frames: this.anims.generateFrameNumbers('enemyPunch', { start: 7, end: 13 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'rightPunchE',
        frames: this.anims.generateFrameNumbers('enemyPunch', { start: 0, end: 6 }),
        frameRate: 10,
        repeat: -1
    });
    // this.anims.create({
    //     key: 'turn',
    //     frames: this.anims.generateFrameNumbers('enemyStand', { start: 0, end: 4 }),
    //     frameRate: 10,
    // });

    this.anims.create({
        key: 'attackRight',
        frames: this.anims.generateFrameNumbers('dude_punch', { start: 0, end: 4 }),
        frameRate: 20,
    });

    this.anims.create({
        key: 'attackLeft',
        frames: this.anims.generateFrameNumbers('dude_punch', { start: 5, end: 9 }),
        frameRate: 20,
    });


    this.anims.create({
        key: 'heart',
        frames: this.anims.generateFrameNumbers('heart', { start: 0, end: 8 }),
        frameRate: 5,
    });



    this.anims.create({
        key: 'standB',
        frames: this.anims.generateFrameNumbers('boss', { start: 0, end: 10 }),
        frameRate: 10,
    })
    this.anims.create({
        key: 'walkBossR',
        frames: this.anims.generateFrameNumbers('bossWalking', { start: 0, end: 7 }),
        frameRate: 10,
    })
    this.anims.create({
        key: 'walkBossL',
        frames: this.anims.generateFrameNumbers('bossWalking', { start: 8, end: 15 }),
        frameRate: 10,
    })
    this.anims.create({
        key: 'attackBossR',
        frames: this.anims.generateFrameNumbers('bossAttack', { start: 0, end: 3 }),
        frameRate: 10,
    })
    this.anims.create({
        key: 'attackBossL',
        frames: this.anims.generateFrameNumbers('bossAttack', { start: 4, end: 7 }),
        frameRate: 10,
    })




    this.anims.create({
        key: 'enemyDeath',
        frames: this.anims.generateFrameNumbers('enemyDeath', { start: 0, end: 3 }),
        frameRate: 10,
    })


    ///////////////////////////// COLLISION //////////////////////////

    this.physics.add.collider(player, walls);
    this.physics.add.collider(enemy, walls);

    this.cameras.main.startFollow(player, true);

    // this.scale.startFullscreen()
    // console.log(this.scale.isFullscreen)
}