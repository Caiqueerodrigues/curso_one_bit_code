class Character {
   constructor(nome, pv, pa, df) {
      this.nome = nome,
      this.pontosVida = pv,
      this.pontosAtaque = pa,
      this.pontosDefesa = df
   }

   attack(target) {
      target.pontosVida -= this.pontosAtaque - target.pontosDefesa
   }
}

module.exports = Character