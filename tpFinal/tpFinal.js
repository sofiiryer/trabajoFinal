let pantalla = 0;
let imgPortada;
let pantalla2;
let fuenteTitulo;
let fuenteBotones;
function preload(){
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

function pantallaHistoria1(){
  image(pantalla2,0,0,width,height);
  
  fill(255);
  textFont(fuenteTitulo);
  textSize(30);
  textAlign(LEFT,TOP);

  text("Marini trabaja como auxiliar de vuelo\n en la ruta Roma-Teheran.",50,340);
  
}


  
  

  
  function mousePressed() {
    if(detectarZonaR(300,300,200,50)){
      pantalla = 1;
      
    }
    if (detectarZonaR(300,370,200,50)){
      pantalla = 100 //ejemplo
      
    }
    
    if(pantalla== 1 && detectarZonaR(550,370,200,45)){
      pantalla = 2;
    }
    
  }
  
