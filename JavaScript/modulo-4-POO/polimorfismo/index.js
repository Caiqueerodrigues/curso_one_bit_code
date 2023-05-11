class Vehicle {
    move () {
        console.log('o veiculo está se movendo')
    }
}

class Car extends Vehicle {
    move () {
        console.log('O Carro está se movendo')
    }
}

class Ships extends Vehicle {
    move () {
        console.log('O navio está navegando')
    }
}

class Aircraft extends Vehicle {
    move (speed) {
    console.log(`A aeronave esta voando a ${speed} km/r`)
    }
}

const carro1 = new Car()
const navio1 = new Ships()
const nave1 = new Aircraft()

// carro1.move()
// navio1.move()
// nave1.move(100)


function start (Vehicle, speed) {
    console.log('iniciando um veiculo')
    Vehicle.move(speed)
}

start(carro1)
start(navio1)
start(nave1, 80)