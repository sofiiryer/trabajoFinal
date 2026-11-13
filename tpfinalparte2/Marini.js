
class Marini {
  constructor(x, y, imagen) {
    this.posX = x;
    this.posY = y;
    this.vel = 4;
    this.imagen = imagen;
    this.alto = 100;
    this.ancho = this.imagen.width * this.alto / this.imagen.height;
  }

  dibujarMarini() {
    image(
      this.imagen,
      this.posX - this.ancho / 2,
      this.posY - this.alto / 2,
      this.ancho,
      this.alto
    );
  }

  teclaPresionada(keyCode) {
    if (keyCode === 65) {
      this.moverIzquierda();
    }

    if (keyCode === 68) {
      this.moverDerecha();
    }
  }

  moverIzquierda() {
    if (this.posX - this.ancho / 2 > 190) {
      this.posX = this.posX - this.vel;
    }

    if (this.posX - this.ancho / 2 < 190) {
      this.posX = 190 + this.ancho / 2;
    }
  }

  moverDerecha() {
    if (this.posX + this.ancho / 2 < 610) {
      this.posX = this.posX + this.vel;
    }

    if (this.posX + this.ancho / 2 > 610) {
      this.posX = 610 - this.ancho / 2;
    }
  }
}

