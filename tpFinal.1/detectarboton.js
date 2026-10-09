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
