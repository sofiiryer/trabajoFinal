function dibujarBoton(x, y, tamX, tamY, nombre) {

  if (detectarZonaR(x, y, tamX, tamY)) {
    fill(180);
  } else {
    fill(70);
  }

  rect(x, y, tamX, tamY, tamY / 4);

  textSize(tamY / 3);
  textAlign(CENTER, CENTER);
  fill(255);

  text(nombre, x + tamX / 2, y + tamY / 2);
}


function detectarZonaR(x, y, tamX, tamY) {

  if (mouseX > x &&
      mouseX < x + tamX &&
      mouseY > y &&
      mouseY < y + tamY) {

    return true;

  } else {

    return false;

  }
}
