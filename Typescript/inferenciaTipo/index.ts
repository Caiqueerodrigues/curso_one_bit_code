//detectção automatica do tipo da variável

const spaceship = {
    name: "X-Wing",
    speed: 0
}

function accelerate(spaceship: { name?: string; speed?: number; ""?: any }, speed: number) {
    spaceship.speed = speed
}

accelerate(spaceship, 50)