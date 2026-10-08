let pantalla = 0;
let imagenes = [];

let nombresImagenes = [
  "data/portada.png",
  "data/pantalla2.png",
  "data/pantalla3.jpg",
  "data/pantalla4.jpeg",
  "data/pantalla5.jpeg",
  "data/pantalla5a.jpeg",
  "data/pantalla5b.jpeg",
  "data/pantalla6a.jpeg",
  "data/pantalla7a.jpeg",
  "data/pantalla8a.jpeg",
  "data/pantalla8b.jpeg",
  "data/final1.jpeg",
  "data/final2.jpeg",
  "data/final3.jpeg",
  "data/pantalla9b.jpeg",
  "data/pantalla10.jpeg",
  "data/pantalla11b.jpeg",
  "data/pantalla12a.jpeg",
  "data/pantalla12b.jpeg",
  "data/pantalla14a.jpeg",
  "data/pantalla14b.jpeg",
  "data/pantalla6b.jpeg",
  "data/pantalla7b.jpeg",
  "data/pantalla8.jpeg",
  "data/pantalla12.jpeg",
  "data/pantalla13b.jpeg"
];

let fuenteTitulo;
let fuenteBotones;

let cantidadTexto = 0;

let textoHistoria2 = [
  "Marini trabaja como auxiliar de vuelo",
  "en la ruta Roma-Teheran.",
  "atendiendo pasajeros",
  "cuando el avión pasa por la isla."
];

let textoHistoria3 = [
  "Un día, a mediodía Marini mira por la ventanilla",
  "y descubre una pequeña isla en el mar",
  "Y queda fascinado contemplándola."
];

let textoHistoria4 = [
  "Al día siguiente vuelven a pasar por la isla.",
  "Marini la reconoce, una pasajera le dice",
  "que esa isla es Xiros.",
  "Es ahi donde comienza su obsesión."
];

let Decision1y4 = [
  "¿QUÉ HACER CON ESA OBSESIÓN?"
];

// RAMA A

let textoHistoria5A = [
  "Marini decide ignorar la isla",
  "e intenta olvidarse de Xiros",
  "y acepta otra ruta de vuelo."
];

let textoHistoria6A = [
  "Marini logra olvidarse de la isla.",
  "Cambia sus horarios de trabajo",
  "Se enfoca en sus vuelos"
];

let textoHistoria7A = [
  "Xiros queda solamente como un recuerdo,",
  "acompañado de cierta nostalgia."
];

let textoHistoria8A = [
  "Marini vuelve a enfocarse en su vida cotidiana.",
  "Dejando atrás la obsesión que sentia."
];

let textoFinal1 = [
  "Empieza una nueva vida",
  "decidiendo dejar su trabajo de auxiliar de vuelo",
  "y formar una familia con Carla."
];

// RAMA B

let textoHistoria5B = [
  "Marini decide seguir con su obsesión",
  "Comienza a investigar sobre Xiros."
];

let textoHistoria6B = [
  "Marini decide viajar hasta Xiros",
  "y conoce a Klaios, quien lo ayuda",
  "a conocer la isla."
];

let textoHistoria7B = [
  "Marini recorre la isla,",
  "y piensa que deberia hacer",
  "finalmente con su vida."
];

let Decision2 = [
  "¿VOLVER O QUEDARSE EN XIROS?"
];

let textoHistoria8B = [
  "Marini decide quedarse,",
  "comienza a pensar en su vida",
  "y en todo lo que dejó atrás."
];

let textoHistoria9B = [
  "Cuando ve pasar",
  "el avión sobre la isla."
];

let Decision3 = [
  "¿SALIR A VER EL AVIÓN O NO VERLO?"
];

let textoHistoria11B = [
  "Piensa en como estaria ahora en su antigua rutina,",
  "y como estarán sus anteriores compañeros",
  "de vuelo."
];

let Decision4 = [
  "¿QUÉ LE DEPARA EL DESTINO A XIROS?"
];

let textoHistoria12A = [
  "Ve por ultima vez como el avión cumple su recorrido",
  "por la isla",
  "y decide despedir su antigua vida."
];

let textoHistoria13B = [
  "Cae el avión.",
  "Marini corre a ver si hay",
  "sobrevivientes."
];

let Decision5 = [
  "¿QUÉ ENCONTRARÁ ENTRE LOS RESTOS?"
];

let textoHistoria14A = [
  "Rescata el cuerpo sin vida de Felicia,",
  "su antigua compañera de vuelo."
];

let textoHistoria14B = [
  "Se da cuenta que el cuerpo que rescato",
  "es el de él mismo y que nunca llego a",
  "cumplir su obsesión de ir a la isla."
];

let textoFinal2 = [
  "Marini finalmente",
  "decide empezar a disfrutar su nueva",
  "vida en Isla."
];

let textoFinal3 = [
  "Marini creyó haber encontrado su destino.",
"Pero en Xiros, nada sucede por casualidad.",
"LA ISLA SIEMPRE COBRA SU PRECIO."
];

//--------------------------------------------
// PRELOAD
//--------------------------------------------

function preload() {

  for (let i = 0; i < nombresImagenes.length; i++) {
    imagenes[i] = loadImage(nombresImagenes[i]);
  }

  fuenteTitulo = loadFont("data/DMSerifDisplay-Regular.ttf");
  fuenteBotones = loadFont("data/Oswald-VariableFont_wght.ttf");

}

//--------------------------------------------
// SETUP
//--------------------------------------------

function setup() {
  createCanvas(800, 450);
}

//--------------------------------------------
// DRAW
//--------------------------------------------

function draw() {

  if (pantalla == 0) {
    pantallaInicio();
  }

  if (pantalla == 1) {
    pantallaHistoria1();
  }

  if (pantalla == 2) {
    pantallaHistoria2();
  }

  if (pantalla == 3) {
    pantallaHistoria3();
  }

  if (pantalla == 4) {
    pantallaHistoria4();
  }

  if (pantalla == 5) {
    pantallaHistoria5A();
  }

  if (pantalla == 6) {
    pantallaHistoria5b();
  }

  if (pantalla == 7) {
    pantallaHistoria6a();
  }

  if (pantalla == 8) {
    pantallaHistoria7a();
  }

  if (pantalla == 9) {
    pantallaHistoria8a();
  }

  if (pantalla == 10) {
    pantallaFinal1();
  }

  if (pantalla == 11) {
    pantallaHistoria6b();
  }

  if (pantalla == 12) {
    pantallaHistoria7b();
  }

  if (pantalla == 13) {
    pantallaDecision2();
  }

  if (pantalla == 14) {
    pantallaHistoria8b();
  }

  if (pantalla == 15) {
    pantallaHistoria9b();
  }

  if (pantalla == 16) {
    pantallaDecision3();
  }

  if (pantalla == 17) {
    pantallaHistoria11b();
  }

  if (pantalla == 18) {
    pantallaFinal2();
  }

  if (pantalla == 19) {
    pantallaDecision4();
  }

  if (pantalla == 20) {
    pantallaHistoria12a();
  }

  if (pantalla == 21) {
    pantallaHistoria12b();
  }

  if (pantalla == 22) {
    pantallaDecision5();
  }

  if (pantalla == 23) {
    pantallaHistoria14a();
  }

  if (pantalla == 24) {
    pantallaHistoria14b();
  }

  if (pantalla == 25) {
    pantallaFinal3();
  }

}

//--------------------------------------------
// PANTALLA INICIO
//--------------------------------------------

function pantallaInicio() {

  image(imagenes[0], 0, 0, width, height);

  fill(255);
  textFont(fuenteTitulo);
  textSize(55);
  textAlign(CENTER, CENTER);
  text("LA ISLA A MEDIODÍA", width / 2, 90);

  dibujarBoton(300, 300, 200, 50, "INICIO");
  dibujarBoton(300, 370, 200, 50, "CRÉDITOS");

}

//--------------------------------------------
// PANTALLA HISTORIA 1
//--------------------------------------------

function pantallaHistoria1() {

  image(imagenes[1], 0, 0, width, height);

  dibujarPanelTexto(30, 280, 740, 160);

  fill(255);
  textFont(fuenteTitulo);
  textSize(30);
  textAlign(LEFT, TOP);

  mostrarTexto(textoHistoria2, 40, 290, 35);

  dibujarBoton(550, 370, 200, 45, "CONTINUAR");

}

//--------------------------------------------
// PANTALLA HISTORIA 2
//--------------------------------------------

function pantallaHistoria2() {

  image(imagenes[2], 0, 0, width, height);

  dibujarPanelTexto(10, 290, 780, 150);

  fill(255);
  textFont(fuenteTitulo);
  textSize(30);
  textAlign(LEFT, TOP);

  mostrarTexto(textoHistoria3, 26, 300, 32);

  dibujarBoton(550, 370, 200, 45, "CONTINUAR");

}

//--------------------------------------------
// PANTALLA HISTORIA 3
//--------------------------------------------

function pantallaHistoria3() {

  image(imagenes[3], 0, 0, width, height);

  dibujarPanelTexto(10, 290, 780, 150);

  fill(255);
  textFont(fuenteTitulo);
  textSize(30);
  textAlign(LEFT, TOP);

  mostrarTexto(textoHistoria4, 15, 290, 35);

  dibujarBoton(550, 370, 200, 45, "CONTINUAR");

}

//--------------------------------------------
// PANTALLA HISTORIA 4 - DECISIÓN
//--------------------------------------------

function pantallaHistoria4() {

  image(imagenes[4], 0, 0, width, height);

  fill(255);
  textFont(fuenteTitulo);
  textSize(34);
  textAlign(CENTER, TOP);

  mostrarTexto(Decision1y4, 400, 40, 35);

  dibujarBoton(80, 330, 220, 55, "IGNORARLA");
  dibujarBoton(500, 330, 220, 55, "SEGUIRLA");

}

//--------------------------------------------
// RAMA A - IGNORAR
//--------------------------------------------

function pantallaHistoria5A() {

  image(imagenes[5], 0, 0, width, height);

  dibujarPanelTexto(10, 290, 780, 150);

  fill(255);
  textFont(fuenteTitulo);
  textSize(30);
  textAlign(LEFT, TOP);

  mostrarTexto(textoHistoria5A, 50, 310, 35);

  dibujarBoton(550, 370, 200, 45, "CONTINUAR");

}

function pantallaHistoria6a() {

  image(imagenes[7], 0, 0, width, height);

  dibujarPanelTexto(10, 290, 780, 150);

  fill(255);
  textFont(fuenteTitulo);
  textSize(30);
  textAlign(LEFT, TOP);

  mostrarTexto(textoHistoria6A, 50, 310, 35);

  dibujarBoton(550, 370, 200, 45, "CONTINUAR");

}

function pantallaHistoria7a() {

  image(imagenes[8], 0, 0, width, height);

  dibujarPanelTexto(10, 290, 780, 150);

  fill(255);
  textFont(fuenteTitulo);
  textSize(30);
  textAlign(LEFT, TOP);

  mostrarTexto(textoHistoria7A, 50, 320, 35);

  dibujarBoton(550, 370, 200, 45, "CONTINUAR");

}

function pantallaHistoria8a() {

  image(imagenes[9], 0, 0, width, height);

  dibujarPanelTexto(10, 290, 780, 150);

  fill(255);
  textFont(fuenteTitulo);
  textSize(30);
  textAlign(LEFT, TOP);

  mostrarTexto(textoHistoria8A, 50, 320, 35);

  dibujarBoton(550, 370, 200, 45, "CONTINUAR");

}

//--------------------------------------------
// FINAL 1
//--------------------------------------------

function pantallaFinal1() {

  image(imagenes[11], 0, 0, width, height);

  dibujarPanelTexto(10, 290, 780, 150);

  fill(255);
  textFont(fuenteTitulo);
  textSize(30);
  textAlign(LEFT, TOP);

  mostrarTexto(textoFinal1, 50, 300, 35);

  dibujarBoton(550, 370, 200, 45, "VOLVER AL INICIO");

}

//--------------------------------------------
// RAMA B - SEGUIR
//--------------------------------------------

function pantallaHistoria5b() {

  image(imagenes[6], 0, 0, width, height);

  dibujarPanelTexto(10, 290, 780, 150);

  fill(255);
  textFont(fuenteTitulo);
  textSize(30);
  textAlign(LEFT, TOP);

  mostrarTexto(textoHistoria5B, 50, 310, 35);

  dibujarBoton(550, 370, 200, 45, "CONTINUAR");

}

function pantallaHistoria6b() {

  image(imagenes[21], 0, 0, width, height);

  dibujarPanelTexto(10, 290, 780, 150);

  fill(255);
  textFont(fuenteTitulo);
  textSize(30);
  textAlign(LEFT, TOP);

  mostrarTexto(textoHistoria6B, 50, 310, 35);

  dibujarBoton(550, 370, 200, 45, "CONTINUAR");

}

function pantallaHistoria7b() {

  image(imagenes[22], 0, 0, width, height);

  dibujarPanelTexto(10, 290, 780, 150);

  fill(255);
  textFont(fuenteTitulo);
  textSize(30);
  textAlign(LEFT, TOP);

  mostrarTexto(textoHistoria7B, 50, 310, 35);

  dibujarBoton(550, 370, 200, 45, "CONTINUAR");

}

//--------------------------------------------
// DECISIÓN 2
//--------------------------------------------

function pantallaDecision2() {

  image(imagenes[23], 0, 0, width, height);

  fill(255);
  textFont(fuenteTitulo);
  textSize(34);
  textAlign(CENTER, TOP);

  mostrarTexto(Decision2, 400, 40, 35);

  dibujarBoton(80, 330, 220, 55, "VOLVER");
  dibujarBoton(500, 330, 220, 55, "QUEDARSE");

}

function pantallaHistoria8b() {

  image(imagenes[10], 0, 0, width, height);

  dibujarPanelTexto(10, 290, 780, 150);

  fill(255);
  textFont(fuenteTitulo);
  textSize(30);
  textAlign(LEFT, TOP);

  mostrarTexto(textoHistoria8B, 50, 310, 35);

  dibujarBoton(550, 370, 200, 45, "CONTINUAR");

}

function pantallaHistoria9b() {

  image(imagenes[14], 0, 0, width, height);

  dibujarPanelTexto(10, 290, 780, 150);

  fill(255);
  textFont(fuenteTitulo);
  textSize(30);
  textAlign(LEFT, TOP);

  mostrarTexto(textoHistoria9B, 50, 310, 35);

  dibujarBoton(550, 370, 200, 45, "CONTINUAR");

}

//--------------------------------------------
// DECISIÓN 3
//--------------------------------------------

function pantallaDecision3() {

  image(imagenes[15], 0, 0, width, height);

  fill(255);
  textFont(fuenteTitulo);
  textSize(30);
  textAlign(CENTER, CENTER);

  mostrarTexto(Decision3, 400, 130, 35);

  dibujarBoton(80, 330, 220, 55, "SALIR A VERLO");
  dibujarBoton(500, 330, 220, 55, "NO VERLO");

}

//--------------------------------------------
// FINAL 2
//--------------------------------------------

function pantallaFinal2() {

  image(imagenes[12], 0, 0, width, height);

  dibujarPanelTexto(10, 290, 780, 150);

  fill(255);
  textFont(fuenteTitulo);
  textSize(30);
  textAlign(LEFT, TOP);

  mostrarTexto(textoFinal2, 50, 310, 35);

  dibujarBoton(550, 370, 200, 45, "VOLVER AL INICIO");

}

//--------------------------------------------
// PANTALLA 11B
//--------------------------------------------

function pantallaHistoria11b() {

  image(imagenes[16], 0, 0, width, height);

  dibujarPanelTexto(10, 290, 780, 150);

  fill(255);
  textFont(fuenteTitulo);
  textSize(30);
  textAlign(LEFT, TOP);

  mostrarTexto(textoHistoria11B, 50, 310, 35);

  dibujarBoton(550, 370, 200, 45, "CONTINUAR");

}

//--------------------------------------------
// PANTALLA 12 - DECISIÓN 4
//--------------------------------------------

function pantallaDecision4() {

  image(imagenes[24], 0, 0, width, height);

  fill(255);
  textFont(fuenteTitulo);
  textSize(34);
  textAlign(CENTER, CENTER);

  mostrarTexto(Decision4, 400, 130, 35);

  dibujarBoton(80, 330, 220, 55, "UN NUEVO COMIENZO");
  dibujarBoton(500, 330, 220, 55, "UN GIRO INESPERADO");

}

//--------------------------------------------
// PANTALLA 12A - EL AVIÓN SIGUE
//--------------------------------------------

function pantallaHistoria12a() {

  image(imagenes[17], 0, 0, width, height);

  dibujarPanelTexto(10, 290, 780, 150);

  fill(255);
  textFont(fuenteTitulo);
  textSize(30);
  textAlign(LEFT, TOP);

  mostrarTexto(textoHistoria12A, 50, 310, 35);

  dibujarBoton(550, 370, 200, 45, "CONTINUAR");

}

//--------------------------------------------
// PANTALLA 12B - EL AVIÓN CAE
//--------------------------------------------

function pantallaHistoria12b() {

  image(imagenes[18], 0, 0, width, height);

  dibujarPanelTexto(10, 290, 780, 150);

  fill(255);
  textFont(fuenteTitulo);
  textSize(30);
  textAlign(LEFT, TOP);

  mostrarTexto(textoHistoria13B, 50, 310, 35);

  dibujarBoton(550, 370, 200, 45, "CONTINUAR");

}

//--------------------------------------------
// PANTALLA 13B - DECISIÓN 5
//--------------------------------------------

function pantallaDecision5() {

  image(imagenes[25], 0, 0, width, height);

  fill(255);
  textFont(fuenteTitulo);
  textSize(34);
  textAlign(CENTER, CENTER);

  mostrarTexto(Decision5, 400, 130, 35);

  dibujarBoton(80, 330, 220, 55, "UN RECUERDO");
  dibujarBoton(500, 330, 220, 55, "UNA REVELACIÓN");

}

//--------------------------------------------
// PANTALLA 14A - FELICIA
//--------------------------------------------

function pantallaHistoria14a() {

  image(imagenes[19], 0, 0, width, height);

  dibujarPanelTexto(10, 290, 780, 150);

  fill(255);
  textFont(fuenteTitulo);
  textSize(30);
  textAlign(LEFT, TOP);

  mostrarTexto(textoHistoria14A, 50, 310, 35);

  dibujarBoton(550, 370, 200, 45, "CONTINUAR");

}

//--------------------------------------------
// PANTALLA 14B - SU PROPIO CUERPO
//--------------------------------------------

function pantallaHistoria14b() {

  image(imagenes[20], 0, 0, width, height);

  dibujarPanelTexto(10, 290, 780, 150);

  fill(255);
  textFont(fuenteTitulo);
  textSize(30);
  textAlign(LEFT, TOP);

  mostrarTexto(textoHistoria14B, 50, 310, 35);

  dibujarBoton(550, 370, 200, 45, "CONTINUAR");

}

//--------------------------------------------
// FINAL 3 - ISLA MALDITA
//--------------------------------------------

function pantallaFinal3() {

  image(imagenes[13], 0, 0, width, height);

  dibujarPanelTexto(10, 290, 780, 150);

  fill(255);
  textFont(fuenteTitulo);
  textSize(30);
  textAlign(LEFT, TOP);

  mostrarTexto(textoFinal3, 50, 310, 35);

  dibujarBoton(550, 370, 200, 45, "VOLVER AL INICIO");

}

//--------------------------------------------
// BOTONES Y CAMBIOS DE PANTALLA
//--------------------------------------------

function mousePressed() {

  if (pantalla == 0 && detectarZonaR(300, 300, 200, 50)) {
    cambiarPantalla(1);
  }

  else if (pantalla == 0 && detectarZonaR(300, 370, 200, 50)) {
    cambiarPantalla(100);
  }

  else if (pantalla == 1 && detectarZonaR(550, 370, 200, 45)) {
    cambiarPantalla(2);
  }

  else if (pantalla == 2 && detectarZonaR(550, 370, 200, 45)) {
    cambiarPantalla(3);
  }

  else if (pantalla == 3 && detectarZonaR(550, 370, 200, 45)) {
    cambiarPantalla(4);
  }

  else if (pantalla == 4 && detectarZonaR(80, 330, 220, 55)) {
    cambiarPantalla(5);
  }

  else if (pantalla == 4 && detectarZonaR(500, 330, 220, 55)) {
    cambiarPantalla(6);
  }

  else if (pantalla == 5 && detectarZonaR(550, 370, 200, 45)) {
    cambiarPantalla(7);
  }

  else if (pantalla == 7 && detectarZonaR(550, 370, 200, 45)) {
    cambiarPantalla(8);
  }

  else if (pantalla == 8 && detectarZonaR(550, 370, 200, 45)) {
    cambiarPantalla(9);
  }

  else if (pantalla == 9 && detectarZonaR(550, 370, 200, 45)) {
    cambiarPantalla(10);
  }

  else if (pantalla == 10 && detectarZonaR(550, 370, 200, 45)) {
    cambiarPantalla(0);
  }

  else if (pantalla == 6 && detectarZonaR(550, 370, 200, 45)) {
    cambiarPantalla(11);
  }

  else if (pantalla == 11 && detectarZonaR(550, 370, 200, 45)) {
    cambiarPantalla(12);
  }

  else if (pantalla == 12 && detectarZonaR(550, 370, 200, 45)) {
    cambiarPantalla(13);
  }

  else if (pantalla == 13 && detectarZonaR(80, 330, 220, 55)) {
    cambiarPantalla(7);
  }

  else if (pantalla == 13 && detectarZonaR(500, 330, 220, 55)) {
    cambiarPantalla(14);
  }

  else if (pantalla == 14 && detectarZonaR(550, 370, 200, 45)) {
    cambiarPantalla(15);
  }

  else if (pantalla == 15 && detectarZonaR(550, 370, 200, 45)) {
    cambiarPantalla(16);
  }

  else if (pantalla == 16 && detectarZonaR(500, 330, 220, 55)) {
    cambiarPantalla(18);
  }

  else if (pantalla == 16 && detectarZonaR(80, 330, 220, 55)) {
    cambiarPantalla(17);
  }

  else if (pantalla == 17 && detectarZonaR(550, 370, 200, 45)) {
    cambiarPantalla(19);
  }

  else if (pantalla == 18 && detectarZonaR(550, 370, 200, 45)) {
    cambiarPantalla(0);
  }

  else if (pantalla == 19 && detectarZonaR(80, 330, 220, 55)) {
    cambiarPantalla(20);
  }

  else if (pantalla == 19 && detectarZonaR(500, 330, 220, 55)) {
    cambiarPantalla(21);
  }

  else if (pantalla == 20 && detectarZonaR(550, 370, 200, 45)) {
    cambiarPantalla(18);
  }

  else if (pantalla == 21 && detectarZonaR(550, 370, 200, 45)) {
    cambiarPantalla(22);
  }

  // UN RECUERDO -> FELICIA

  else if (pantalla == 22 && detectarZonaR(80, 330, 220, 55)) {
    cambiarPantalla(23);
  }

  // UNA REVELACIÓN -> SU PROPIO CUERPO

  else if (pantalla == 22 && detectarZonaR(500, 330, 220, 55)) {
    cambiarPantalla(24);
  }

  // FELICIA -> FINAL 3

  else if (pantalla == 23 && detectarZonaR(550, 370, 200, 45)) {
    cambiarPantalla(25);
  }

  // SU PROPIO CUERPO -> FINAL 3

  else if (pantalla == 24 && detectarZonaR(550, 370, 200, 45)) {
    cambiarPantalla(25);
  }

  // FINAL 3 -> INICIO

  else if (pantalla == 25 && detectarZonaR(550, 370, 200, 45)) {
    cambiarPantalla(0);
  }

}
