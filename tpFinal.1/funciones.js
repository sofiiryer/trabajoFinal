//pestaña funciones
function mostrarTexto(texto, x, y, separacion) {

  for (let i = 0; i < cantidadTexto; i++) {
    text(texto[i], x, y + i * separacion);
  }

  if (frameCount % 30 == 0 && cantidadTexto < texto.length) {
    cantidadTexto++;
  }

}


function cambiarPantalla(nuevaPantalla) {

  pantalla = nuevaPantalla;
  cantidadTexto = 0;

}


function dibujarPanelTexto(x,y,tamX,tamY) {

  fill(0,0,0,150);
  rect(x,y,tamX,tamY,10);
  
}


function dibujarBoton(x, y, tamX, tamY, texto) {

  fill(0,0,0,180);
  rect(x, y, tamX, tamY, 10);

  fill(255);
  textFont(fuenteBotones);
  textSize(22);
  textAlign(CENTER, CENTER);
  text(texto, x + tamX / 2, y + tamY / 2);

}


function detectarZonaR(x, y, tamX, tamY) {

  if (mouseX > x && mouseX < x + tamX &&
      mouseY > y && mouseY < y + tamY) {
    return true;
  }

  return false;

}
