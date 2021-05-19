export default class Game {
    constructor({ world, view, levels }) {
        this.world = world
        this.view = view
        this.levels = levels
        this.isMoving = false
        this.key = ''

        this.loop = this.loop.bind(this)
    }

    async init() {
        this.view.init()

        document.addEventListener('keydown', event => {
            event.preventDefault()
 
            switch (event.code) {
                case 'ArrowUp': 

                case 'ArrowRight':
                case 'ArrowDown':
                case 'ArrowLeft':
                    this.isMoving = true
                case 'Space':
                case 'Enter':
            }

            this.key = event.code
        })

        document.addEventListener('keyup', event => {
            event.preventDefault()
 
            switch (event.code) {
                case 'ArrowUp': 
                case 'ArrowRight':
                case 'ArrowDown':
                case 'ArrowLeft':
                    this.isMoving = false
                case 'Space':
                case 'Enter':
            }

            this.key = ''
        })
    }

    start() {
        requestAnimationFrame(this.loop)
    }

    loop() {
    
        // get input
        this.world.update(this.key, this.isMoving)
        this.view.update(this.world)

        requestAnimationFrame(this.loop)
    }
}