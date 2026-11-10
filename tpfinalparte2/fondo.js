class Acantilado {
  constructor(imagen) {
    this.imagen = imagen;
  }

  dibujarAcantilado() {
    image(this.imagen, 0, 0, width, height);
  }
}
