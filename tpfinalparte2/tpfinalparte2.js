let imagenMarini;
let imagenPiedra;
let juego;

function preload() {
  imagenMarini = loadImage("data/Marini.png");
  imagenPiedra = loadImage("data/Piedra.png");
  imagenAcantilado = loadImage("data/acantilado.png");
}

function setup() {
  createCanvas(800, 450);
  juego = new Juego(imagenMarini, imagenPiedra, imagenAcantilado);
}

function draw() {
  juego.dibujarJuego();
}

function keyPressed() {
  juego.teclaPresionada(keyCode);
}
