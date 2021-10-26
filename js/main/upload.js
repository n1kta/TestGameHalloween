const speed = 160;
const diffBetweenEnemyAndPlayer = 500;
const cooldown = 750;

let cooldownAttackEnemy = cooldown;
let cooldownAttackPlayer = cooldown - 250;
let counterAttackPlayer = 0;

const followPlayer = () => {
    if (enemy.health <= 0) {
        enemy.anims.play('turn', true);
        return;
    }

    if (enemy.x - player.x <= diffBetweenEnemyAndPlayer) {
        if (Math.abs(enemy.x - player.x) >= 50 || Math.abs(enemy.y - player.y) >= 50) {
            let angle_radians = Math.atan2(enemy.y - player.y, enemy.x - player.x - 50);
            let leftMovement = enemy.x - player.x - 50;

            if (leftMovement > 0) {
                enemy.anims.play('left', true);
            } else {
                enemy.anims.play('right', true);
            }

            enemy.y -= Math.sin(angle_radians) * (speed / 100);
            enemy.x -= Math.cos(angle_radians) * (speed / 100);
        } else {
            if (player.health === 3) {
                player.health -= enemy.attack;
                hearts.remove(hearts.getChildren()[player.health], true);
            } else if (cooldownAttackEnemy < 0) {
                player.health -= enemy.attack;
                cooldownAttackEnemy = cooldown;
                hearts.remove(hearts.getChildren()[player.health], true);
            } else {
                cooldownAttackEnemy -= 10;
            }
            
        }
    } else {
        enemy.anims.play('turn', true);
    }
}


function update ()
{
    //////////////////////////////////// HERO MOVEMENT //////////////////////////////////

    if(player.health === 0) {
        return;
    }

    if (cursors.left.isDown)
    {
        player.setVelocityX(-speed);
        player.setVelocityY(0);
        player.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(speed);
        player.setVelocityY(0);
        player.anims.play('right', true);
    }
    else if (cursors.down.isDown)
    {
        player.setVelocityY(speed);
        player.setVelocityX(0);
        player.anims.play('down', true);
    }
    else if (cursors.up.isDown)
    {
        player.setVelocityY(-speed);
        player.setVelocityX(0);
        player.anims.play('up', true);
    }
    else if (cursors.space.isDown)
    {
        if (counterAttackPlayer === 0){
            player.anims.play('attack', true);
            if (enemy.x - player.x <= diffBetweenEnemyAndPlayer) {
                enemy.health -= player.attack;
            }
            ++counterAttackPlayer;
        }

        if (cooldownAttackPlayer < 0) {
            player.anims.play('attack', true);
            if (enemy.x - player.x <= diffBetweenEnemyAndPlayer) {
                enemy.health -= player.attack;
            }
            cooldownAttackPlayer = cooldown - 250;
        } else {
            cooldownAttackPlayer -= 10;
        }
    }
    else
    {
        player.setVelocityX(0);
        player.setVelocityY(0);

        player.anims.play('turn', true)
    }

    //////////////////////////////////////////////////////////////////////////////////////

    followPlayer();
}