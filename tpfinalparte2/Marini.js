class Marini {
  constructor(x, y, imagen) {
  this.posX = x;
  this.posY = y;
  this.vel = 10;
  this.imagen = imagen;
}

dibujarMarini() {
  let alto = 150;
  let ancho = this.imagen.width * alto / this.imagen.height;

  image(this.imagen, this.posX - ancho / 2, this.posY - alto / 2, ancho, alto);
}

teclaPresionada(keyCode) {
  if (keyCode === 65) { // A
    this.moverIzquierda();
  } else if (keyCode === 68) { // D
    this.moverDerecha();
  }
}


  moverIzquierda() {
    this.posX -= this.vel;
  }

  moverDerecha() {
    this.posX += this.vel;
  }
}
