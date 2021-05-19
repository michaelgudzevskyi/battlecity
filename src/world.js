import Tank from './tank.js'
export default class World {
    grid = []
    player1Tank = new Tank()
    player2Tank = null
    enemyTank = []

    update(key, isMoving) {
        if (isMoving) {
            if (key === 'ArrowUp') {
                this.player1Tank.y -=1
            }
        }
    }
}