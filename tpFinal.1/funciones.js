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
