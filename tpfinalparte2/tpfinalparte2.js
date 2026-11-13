
let imagenMarini;
let imagenPiedra;
let imagenAcantilado;
let sonidoGanaste;
let sonidoPerdiste;
let sonidoJuego;
let juego;
let pantalla = 0;

function preload() {
  imagenMarini = loadImage("data/Marini.png");
  imagenPiedra = loadImage("data/Piedra.png");
  imagenAcantilado = loadImage("data/acantilado.png");
}

function setup() {
  createCanvas(800, 450);
  juego = new Juego(imagenMarini, imagenPiedra);
}

function draw() {
  if (pantalla == 0) dibujarInicio();
  if (pantalla == 1) dibujarInstrucciones();

  if (pantalla == 2) {
    if (keyIsPressed && (keyCode == 65 || keyCode == 68)) {
      juego.teclaPresionada(keyCode);
    }
    juego.dibujarJuego();
  }

  if (pantalla == 3) dibujarCreditos();
}

function dibujarFondo() {
  image(imagenAcantilado, 0, 0, width, height);
  noStroke();
  fill(0, 0, 0, 190);
  rect(0, 0, width, height);
}

function dibujarBoton(texto, x, y, ancho, alto) {
  stroke(190, 125, 115);
  strokeWeight(2);

  if (mouseX > x && mouseX < x + ancho &&
      mouseY > y && mouseY < y + alto) {
    fill(145, 55, 65);
  } else {
    fill(85, 30, 40);
  }

  rect(x, y, ancho, alto, 12);
  noStroke();
  fill(245, 230, 220);
  textAlign(CENTER);
  textFont("Georgia");
  textStyle(BOLD);
  textSize(19);
  text(texto, x + ancho / 2, y + alto / 2 + 7);
}

function dibujarInicio() {
  dibujarFondo();
  textAlign(CENTER);
  textFont("Georgia");

  fill(210, 170, 160);
  textStyle(NORMAL);
  textSize(20);
  text("LA ISLA DEL MEDIODÍA", 400, 105);

  fill(245, 230, 220);
  textStyle(BOLD);
  textSize(43);
  text("DESAFÍO EN LAS ALTURAS", 400, 180);

  fill(220, 200, 190);
  textStyle(ITALIC);
  textSize(19);
  text("¿Logrará Marini llegar a la cima?", 400, 225);

  dibujarBoton("JUGAR", 300, 275, 200, 50);
  dibujarBoton("CRÉDITOS", 300, 345, 200, 50);
}

function dibujarInstrucciones() {
  dibujarFondo();
  textAlign(CENTER);
  textFont("Georgia");
  textStyle(BOLD);
  fill(245, 230, 220);
  textSize(42);
  text("INSTRUCCIONES", 400, 85);

  textStyle(NORMAL);
  textSize(21);
  text("Ayudá a Marini a llegar a la cima.", 400, 145);
  text("Esquivá 15 rocas para ganar.", 400, 185);
  text("Tenés 3 vidas.", 400, 225);

  textSize(22);
  fill(220, 175, 165);
  text("A = IZQUIERDA     D = DERECHA", 400, 275);

  dibujarBoton("COMENZAR", 300, 335, 200, 50);
}

function dibujarCreditos() {
  dibujarFondo();
  textAlign(CENTER);
  textFont("Georgia");
  textStyle(BOLD);
  fill(245, 230, 220);
  textSize(48);
  text("CRÉDITOS", 400, 95);

  fill(210, 170, 160);
  textSize(23);
  text("LA ISLA DEL MEDIODÍA", 400, 155);

  fill(245, 230, 220);
  textSize(21);
  text("ALUMNAS:", 400, 215);
  textSize(24);
  text("SOFIA RAYER", 400, 255);
  text("ROCIO MONTERO", 400, 290);

  dibujarBoton("VOLVER", 300, 345, 200, 50);
}

function iniciarMusicaJuego() {
  if (sonidoJuego && sonidoJuego.isLoaded()) {
    if (!sonidoJuego.isPlaying()) {
      sonidoJuego.setVolume(0.35);
      sonidoJuego.loop();
    }
  }
}

function detenerMusicaJuego() {
  if (sonidoJuego && sonidoJuego.isPlaying()) {
    sonidoJuego.stop();
  }
}

function cargarSonidos() {
  if (!sonidoGanaste) {
    sonidoGanaste = loadSound(
      "data/ganaste.mp3",
      function() {
        console.log("Sonido GANASTE cargado correctamente");
      },
      function(error) {
        console.log("Error al cargar GANASTE:", error);
      }
    );
  }

  if (!sonidoPerdiste) {
    sonidoPerdiste = loadSound(
      "data/perdiste.mp3",
      function() {
        console.log("Sonido PERDISTE cargado correctamente");
      },
      function(error) {
        console.log("Error al cargar PERDISTE:", error);
      }
    );
  }

  if (!sonidoJuego) {
    sonidoJuego = loadSound(
      "data/juego.mp3",
      function() {
        console.log("Música del juego cargada correctamente");
        if (pantalla == 2 && !juego.gano && !juego.perdio) {
          iniciarMusicaJuego();
        }
      },
      function(error) {
        console.log("Error al cargar música del juego:", error);
      }
    );
  } else {
    iniciarMusicaJuego();
  }
}

function mousePressed() {
  if (pantalla == 0) {
    if (mouseX > 300 && mouseX < 500 &&
        mouseY > 275 && mouseY < 325) {
      pantalla = 1;
    } else if (mouseX > 300 && mouseX < 500 &&
               mouseY > 345 && mouseY < 395) {
      pantalla = 3;
    }
  }

  else if (pantalla == 1) {
    if (mouseX > 300 && mouseX < 500 &&
        mouseY > 335 && mouseY < 385) {

      userStartAudio();
      juego.reiniciarJuego();
      pantalla = 2;
      cargarSonidos();
    }
  }

  else if (pantalla == 3) {
    if (mouseX > 300 && mouseX < 500 &&
        mouseY > 345 && mouseY < 395) {
      pantalla = 0;
    }
  }

  else if (pantalla == 2) {
    if (juego.perdio || juego.gano) {
      if (mouseX > 300 && mouseX < 500 &&
          mouseY > 275 && mouseY < 325) {
        userStartAudio();
        juego.reiniciarJuego();
        iniciarMusicaJuego();
      } else if (mouseX > 300 && mouseX < 500 &&
                 mouseY > 345 && mouseY < 395) {
        juego.reiniciarJuego();
        detenerMusicaJuego();
        pantalla = 0;
      }
    }
  }
}
