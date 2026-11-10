class Juego {
  constructor(imagenMarini, imagenPiedra) {
    this.personaje = new Marini(width / 2, height - 100, imagenMarini);
    this.piedras = [];
    this.piedras[0] = new Piedra(280, -30, 30, 3, imagenPiedra);
    this.piedras[1] = new Piedra(400, -160, 45, 4, imagenPiedra);
    this.piedras[2] = new Piedra(520, -280, 25, 5, imagenPiedra);
    this.acantilado = new Acantilado(imagenAcantilado);
  }

  dibujarJuego() {
   this.acantilado.dibujarAcantilado();
  

    this.personaje.dibujarMarini();

    for (let i = 0; i < this.piedras.length; i++) {
      this.piedras[i].dibujarPiedra();
      this.piedras[i].caer();
    }
  }

 teclaPresionada(keyCode) {
  this.personaje.teclaPresionada(keyCode);
}
}
