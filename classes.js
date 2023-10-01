// FF3131
class particle {
    constructor({ position = { x: 0, y: 0 }, velocity = { x: 0, y: 0 }, fallOff = 0.5, radius = 0.2, color = '#FF3131' }) {
        this.position = position
        this.velocity = velocity
        this.radius = radius
        this.color = color
        this.dirX = Math.random() > 0.5 ? 1 : -1;
        this.dirY = Math.random() > 0.5 ? 1 : -1;
    }

    draw() {
        ctx.fillStyle = this.color

        // ctx.moveTo(this.position.x, this.position.y);
        ctx.beginPath()
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
        // GLOW around each particle
        ctx.shadowBlur = 10;
        ctx.shadowColor = "white";
        ctx.beginPath()
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
    }
    update() {

        this.velocity.x = this.velocity.x * this.dirX
        this.velocity.y = this.velocity.y * this.dirY
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        if (this.position.x < 0 || this.position.x > canvas.width || this.position.y < 0 || this.position.y > canvas.height) {
            this.position.x = Math.floor(Math.random() * canvas.width)
            this.position.y = Math.floor(Math.random() * canvas.height)
        }
        this.draw()
    }
}