
canvas = document.querySelector('canvas')
ctx = canvas.getContext('2d')

particles = []
let particleCount = 1000
for (let i = 0; i < particleCount; i++) {
    temp = new particle({
        position: {
            x: (Math.random() * window.innerWidth),
            y: (Math.random() * window.innerHeight)
        },
        velocity: {
            x: Math.random() * 0.2,
            y: Math.random() * 0.2
        },
        radius: (Math.random() * 1)
    })
    particles.push(temp)
}
function animate() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // ctx.fillStyle = '#000';
    // ctx.fillRect(0, 0, canvas.width, canvas.height)

    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0.5, 'rgba(159, 43, 43, 0)'); // Slightly red at 0% position
    gradient.addColorStop(1, 'rgba(159, 43, 43, 0.2)'); // Fully transparent red at 100% position
    
    

    // Fill the canvas with the gradient
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);


    particles.forEach((particle) => {
        particle.update()
    })

    requestAnimationFrame(animate)
}
animate()