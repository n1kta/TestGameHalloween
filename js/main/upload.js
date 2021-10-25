const speed = 160;
const diffBetweenEnemyAndPlayer = 500;

const followPlayer = () => {
    
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
            // Attack
        }
    }

}


function update ()
{
    //////////////////////////////////// HERO MOVEMENT //////////////////////////////////

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
        player.anims.play('left', true);
    }
    else if (cursors.up.isDown)
    {
        player.setVelocityY(-speed);
        player.setVelocityX(0);
        player.anims.play('right', true);
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