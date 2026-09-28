let pantalla = 0;
let imgPortada;
let pantalla2 , pantalla3; 
let fuenteTitulo;
let fuenteBotones;
let cantidadTexto = 0;
let textoHistoria2 = [
"Marini trabaja como auxiliar de vuelo",
"en la ruta Roma-Teheran.",
"atendiendo pasajeros",
"cuando el avion pasa por la isla."
]
let textoHistoria3 = [
"al otro dia vuelven a pasar por la misma isla",
" y este la reconoce"

]
function preload(){
  pantalla3 = loadImage("data/pantalla3.jpg");
  imgPortada = loadImage("data/portada.png");
  fuenteTitulo = loadFont("data/DMSerifDisplay-Regular.ttf");
  fuenteBotones = loadFont("data/Oswald-VariableFont_wght.ttf");
  pantalla2 = loadImage("data/pantalla2.png");
}
function setup() {
createCanvas(800,450);

}


function draw() {

  if (pantalla == 0) {
    pantallaInicio();
    
    
  }
  if (pantalla == 1) {
    pantallaHistoria1();
    
  }
  
  if (pantalla ==  2) {
    pantallaHistoria2();
  }
}


function pantallaInicio() {

  image(imgPortada, 0, 0, width, height);

  // Título
  fill(255);
  textFont(fuenteTitulo);
  textSize(55);
  textAlign(CENTER, CENTER);
  text("LA ISLA A MEDIODÍA", width / 2, 90);

  // Botones
  dibujarBoton(300, 300, 200, 50, "INICIO");
  dibujarBoton(300, 370, 200, 50, "CRÉDITOS");
}

function pantallaHistoria1(){// ------------------------------------------------------------ pantalla 1
  image(pantalla2,0,0,width,height);
  
  fill(255);
  textFont(fuenteTitulo);
  textSize(30);
  textAlign(LEFT,TOP);

 for (let i = 0; i < cantidadTexto; i++) {
   text(textoHistoria2[i],40,300 + i * 35);
    
 }
 
  if (frameCount % 30 == 0 && cantidadTexto < textoHistoria2.length) {
    cantidadTexto++;
  
}

 dibujarBoton(550, 370, 200, 45, "CONTINUAR");
}
  
function pantallaHistoria2(){//-------------------------------------------------------------- pantalla 2
  image(pantalla3,0,0,width,height);
  fill(255);
  textFont(fuenteTitulo);
  textSize(30);
  textAlign(LEFT,TOP);
  
  for (let i = 0; i < cantidadTexto; i++){
    text(textoHistoria3[i],40,300 + i * 35);
    
  }
  
  if(frameCount % 30 == 0 && cantidadTexto < textoHistoria3.length) {
    cantidadTexto++;
}
}

  
  function mousePressed() {
    if(detectarZonaR(300,300,200,50)){
      pantalla = 1;
     // cantidadTexto = 0;
    }
    if (detectarZonaR(300,370,200,50)){
      pantalla = 100 //ejemplo
      
    }
    
    if(pantalla== 1 && detectarZonaR(550,370,200,45)){
      pantalla = 2;
     // cantidadTtexto = 0;
    }
    
  }
  
