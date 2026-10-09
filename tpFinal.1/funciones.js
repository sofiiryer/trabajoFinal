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
function configurarTexto(tamano,alinX,alinY,colorTexto){
  textFont(fuenteTitulo);
  textSize(tamano);
  textAlign(alinX, alinY);
  fill(colorTexto); 
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
function controlarMusica() {

  if (getAudioContext().state !== "running") {
    return;
  }

  if (!musicaPortada.isPlaying()) {
    musicaPortada.loop();
  }

}
function pantallaCreditos() {

  background(0);

  fill(255);
  textAlign(CENTER, CENTER);
  textFont(fuenteTitulo);

  textSize(38);
  text("LA ISLA AL MEDIODÍA", 400, creditos);

  textSize(22);
  text("Basado en un cuento de Julio Cortázar", 400, creditos + 80);

  text("Una aventura gráfica interactiva", 400, creditos + 150);

  textSize(26);
  text("NOMBRES Y APELLIDOS", 400, creditos + 270);

  textSize(22);
  text("Rocio Montero y Sofia Rayer", 400, creditos + 320);

  textSize(28);
  text("AGRADECIMIENTOS", 400, creditos + 450);

  textSize(21);
  text("A la IA, por las imágenes.", 400, creditos + 520);

  text("Y a los errores de código,", 400, creditos + 590);
  text("por aparecer cuando todo parecía funcionar...", 400, creditos + 625);
  


  // Animación: los textos suben lentamente
  creditos = creditos - 0.5;

  // Cuando terminan de subir, vuelven a empezar
  if (creditos < -750) {
    creditos = 450;
  }

  dibujarBoton(550, 380, 200, 45, "VOLVER");

}



