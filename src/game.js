export default class Game {
    constructor({ world, view, levels }) {
        this.world = world
        this.view = view
        this.levels = levels

        this.loop = this.loop.bind(this)
    }

    async init() {
        this.view.init()
    }

    start() {
        requestAnimationFrame(this.loop)
    }

    loop() {
        console.log('loop');
        // get input
        this.world.update()
        this.view.update()

        requestAnimationFrame(this.loop)
    }
}