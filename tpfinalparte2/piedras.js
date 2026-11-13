
class Piedra {
  constructor(x, y, tam, vel, imagen) {
    this.posX = x;
    this.posY = y;
    this.tam = tam;
    this.vel = vel;
    this.imagen = imagen;
  }

  dibujarPiedra() {
    image(this.imagen, this.posX - this.tam / 2,
      this.posY - this.tam / 2, this.tam, this.tam);
  }

  caer() {
    this.posY = this.posY + this.vel;
  }
}
