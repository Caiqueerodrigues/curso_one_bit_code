class Reservations {
    constructor(hospedes, quarto, dias) {
        this. hospedes = hospedes
        this.quarto = quarto
        this. dias = dias
        this.total = dias * Reservations.taxa
    }

    static taxa = 150

    static showTaxa () {
        console.log(`a taxa da diária é ${Reservations.taxa}`)
    }

    static get premium () {
        return Reservations.taxa * 1.5
    }
}

Reservations.showTaxa()

const reserva1 = new Reservations(4,'102', 10)
console.log(reserva1)

Reservations.taxa = 200
const reserva2 = new Reservations(6,'308', 5)
console.log(reserva2)
console.log(`Taxa premium é $${Reservations.premium}`)