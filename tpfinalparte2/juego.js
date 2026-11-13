class Juego {
  constructor(imagenMarini, imagenPiedra) {
    this.personaje = new Marini(width / 2, height - 100, imagenMarini);

    this.vidas = 3;
    this.puntos = 0;
    this.perdio = false;
    this.gano = false;
    this.tiempoFinal = 0;

    //animaciones
    this.brillo = 0;
    this.cambioBrillo = 3;
    this.brilloTexto = 0;
    this.oscuridad = 0;

    this.piedras = [];
    this.piedras[0] = new Piedra(280, -30, 30, 3, imagenPiedra);
    this.piedras[1] = new Piedra(400, -160, 45, 4, imagenPiedra);
    this.piedras[2] = new Piedra(520, -280, 25, 3, imagenPiedra);
    this.piedras[3] = new Piedra(230, -450, 35, 3, imagenPiedra);
    this.piedras[4] = new Piedra(350, -650, 40, 4, imagenPiedra);
    this.piedras[5] = new Piedra(470, -850, 30, 3, imagenPiedra);
    this.piedras[6] = new Piedra(570, -1050, 35, 4, imagenPiedra);

    this.acantilado = new Acantilado(imagenAcantilado);
  }

  dibujarJuego() {
    if (this.perdio || this.gano) {
      this.dibujarFinal();
      return;
    }

    //personaje y piedras
    this.acantilado.dibujarAcantilado();
    this.personaje.dibujarMarini();

    for (let i = 0; i < this.piedras.length; i++) {
      this.piedras[i].dibujarPiedra();
      this.piedras[i].caer();
    }

    //colisiones y puntos
    this.verificarColisiones();

    if (this.perdio == false) {
      this.contarPuntos();
    }

    //vidas y puntaje en pantalla
    textAlign(LEFT);
    textFont("Georgia");
    textStyle(BOLD);
    fill(255);
    textSize(22);
    text("VIDAS:", 20, 35);

    fill(200, 50, 50);
    textSize(25);

    for (let i = 0; i < this.vidas; i++) {
      text("♥", 110 + i * 30, 35);
    }

    fill(255);
    textSize(22);
    text("PIEDRAS: " + this.puntos + "/15", 570, 35);
  }

  //movimiento
  teclaPresionada(keyCode) {
    if (this.perdio == false && this.gano == false) {
      this.personaje.teclaPresionada(keyCode);
    }
  }

  //colisiones
  verificarColisiones() {
    for (let i = 0; i < this.piedras.length; i++) {
      if (
        this.personaje.posX + this.personaje.ancho / 2 > this.piedras[i].posX - this.piedras[i].tam / 2 &&
        this.personaje.posX - this.personaje.ancho / 2 < this.piedras[i].posX + this.piedras[i].tam / 2 &&
        this.personaje.posY + this.personaje.alto / 2 > this.piedras[i].posY - this.piedras[i].tam / 2 &&
        this.personaje.posY - this.personaje.alto / 2 < this.piedras[i].posY + this.piedras[i].tam / 2
      ) {
        this.vidas = this.vidas - 1;
        this.piedras[i].posY = -500;

        if (this.vidas <= 0) {
          this.vidas = 0;
          this.perdio = true;
          this.tiempoFinal = frameCount;

          detenerMusicaJuego();

          if (sonidoPerdiste && sonidoPerdiste.isLoaded()) {
            sonidoPerdiste.setVolume(1);
            sonidoPerdiste.play();
          } else {
            console.log("El sonido de derrota no está cargado");
          }
        }
      }
    }
  }

  //puntaje
  contarPuntos() {
    for (let i = 0; i < this.piedras.length; i++) {
      if (
        this.piedras[i].posY - this.piedras[i].tam / 2 >
        this.personaje.posY + this.personaje.alto / 2
      ) {
        if (
          this.piedras[i].posX > this.personaje.posX - 140 &&
          this.piedras[i].posX < this.personaje.posX + 140
        ) {
          this.puntos = this.puntos + 1;
        }

        this.piedras[i].posY = -500;

        if (this.puntos >= 15) {
          this.gano = true;
          this.tiempoFinal = frameCount;

          detenerMusicaJuego();

          if (sonidoGanaste && sonidoGanaste.isLoaded()) {
            sonidoGanaste.setVolume(1);
            sonidoGanaste.play();
          } else {
            console.log("El sonido de victoria no está cargado");
          }

          return;
        }
      }
    }
  }

  //pantalla final
  dibujarFinal() {
    this.acantilado.dibujarAcantilado();

    //animacion oscurecimiento del fondo
    if (this.oscuridad < 255) {
      this.oscuridad = this.oscuridad + 2;
    }

    if (this.oscuridad > 255) {
      this.oscuridad = 255;
    }

    noStroke();
    fill(0, 0, 0, this.oscuridad);
    rect(0, 0, width, height);

    //animación del título
    textAlign(CENTER);
    textFont("Georgia");
    textStyle(BOLD);

    this.brillo = this.brillo + this.cambioBrillo;

    if (this.brillo >= 255) {
      this.brillo = 255;
      this.cambioBrillo = -3;
    }

    if (this.brillo <= 60) {
      this.brillo = 60;
      this.cambioBrillo = 3;
    }

    textSize(85);

    //textos de las pantallas finales ganar y perder
    if (this.perdio) {
      fill(200, 30, 30, this.brillo);
      text("PERDISTE", width / 2, 155);
    }

    if (this.gano) {
      fill(80, 200, 120, this.brillo);
      text("GANASTE", width / 2, 155);
    }

    //parte texto de los finales de cada pantalla
    if (frameCount > this.tiempoFinal + 60) {
      if (this.brilloTexto < 255) {
        this.brilloTexto = this.brilloTexto + 2;
      }

      if (this.brilloTexto > 255) {
        this.brilloTexto = 255;
      }

      fill(245, 230, 220, this.brilloTexto);
      textStyle(NORMAL);
      textSize(19);

      if (this.perdio) {
        text("Las rocas impidieron que Marini", width / 2, 210);
        text("llegara a la cima.", width / 2, 240);
      }

      if (this.gano) {
        text("Marini logró esquivar las rocas", width / 2, 210);
        text("y llegar a la cima.", width / 2, 240);
      }
    }

    //botones
    stroke(190, 125, 115);
    strokeWeight(2);

    if (mouseX > 300 && mouseX < 500 &&
        mouseY > 275 && mouseY < 325) {
      fill(145, 55, 65);
    } else {
      fill(85, 30, 40);
    }

    rect(300, 275, 200, 50, 12);
    noStroke();
    fill(245, 230, 220);
    textAlign(CENTER);
    textFont("Georgia");
    textStyle(BOLD);
    textSize(19);

    if (this.perdio) {
      text("REINTENTAR", 400, 307);
    }

    if (this.gano) {
      text("VOLVER A JUGAR", 400, 307);
    }

    stroke(190, 125, 115);
    strokeWeight(2);

    if (mouseX > 300 && mouseX < 500 &&
        mouseY > 345 && mouseY < 395) {
      fill(145, 55, 65);
    } else {
      fill(85, 30, 40);
    }

    rect(300, 345, 200, 50, 12);
    noStroke();
    fill(245, 230, 220);
    textAlign(CENTER);
    textFont("Georgia");
    textStyle(BOLD);
    textSize(17);
    text("VOLVER AL INICIO", 400, 377);
  }

  //reiniciar juego
  reiniciarJuego() {
    if (sonidoGanaste && sonidoGanaste.isPlaying()) {
      sonidoGanaste.stop();
    }

    if (sonidoPerdiste && sonidoPerdiste.isPlaying()) {
      sonidoPerdiste.stop();
    }

    detenerMusicaJuego();

    this.vidas = 3;
    this.puntos = 0;
    this.perdio = false;
    this.gano = false;
    this.tiempoFinal = 0;

    this.brillo = 0;
    this.cambioBrillo = 3;
    this.brilloTexto = 0;
    this.oscuridad = 0;

    this.personaje.posX = width / 2;
    this.personaje.posY = height - 100;

    this.piedras[0].posY = -30;
    this.piedras[1].posY = -160;
    this.piedras[2].posY = -280;
    this.piedras[3].posY = -450;
    this.piedras[4].posY = -650;
    this.piedras[5].posY = -850;
    this.piedras[6].posY = -1050;
  }
}
