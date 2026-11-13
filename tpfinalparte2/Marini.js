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
  

  image(this.imagen, this.posX - this.ancho / 2, this.posY - this.alto / 2, this.ancho, this.alto);
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
