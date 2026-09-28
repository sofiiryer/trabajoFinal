let pantalla = 0;  
let imgPortada;  
let pantalla2 , pantalla3, pantalla4, pantalla5, pantalla5a, pantalla5b;  
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
"Al otro día vuelven a pasar por la misma isla",  
" y Marini la reconoce. Una pasajera le comenta",  
"que la isla se llama Xiros."  
]  
let textoHistoria4 = [  
"La escena vuelve a repetirse.",  
"Marini descubre que siempre ve Xiros al mediodía y",  
"comienza a obsesionarse con la isla."   

]  
let textoHistoria5 = [
"¿QUÉ HACER CON ESA OBSESIÓN?"
]
  
function preload(){  
  imgPortada = loadImage("data/portada.png");  
  fuenteTitulo = loadFont("data/DMSerifDisplay-Regular.ttf");  
  fuenteBotones = loadFont("data/Oswald-VariableFont_wght.ttf");  
  pantalla2 = loadImage("data/pantalla2.png");  
  pantalla3 = loadImage("data/pantalla3.jpg");  
  pantalla4 = loadImage ("data/pantalla4.jpeg");  
  pantalla5 = loadImage ("data/pantalla5.jpeg");  
  pantalla5a = loadImage ("data/pantalla5a.jpeg");  
  pantalla5b = loadImage ("data/pantalla5b.jpeg");  
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
    
  if(pantalla==3) {  
    pantallaHistoria3 ();  
  }  
  if(pantalla==4) {  
    pantallaHistoria4 ();  
  }  
  if(pantalla==6) {  
    pantallaHistoria5a ();  
  }  
  if(pantalla==7) {  
    pantallaHistoria5b ();  
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
dibujarBoton(550, 370, 200, 45, "CONTINUAR");  
}  
  
function pantallaHistoria3(){  
  image(pantalla4,0,0,width,height);  
  fill(255);  
  textFont(fuenteTitulo);  
  textSize(30);  
  textAlign(LEFT,TOP);  
  
  for (let i = 0; i < cantidadTexto; i++){  
    text(textoHistoria4[i],40,300 + i * 35);  
  }  
  
  if(frameCount % 30 == 0 && cantidadTexto < textoHistoria4.length) {  
    cantidadTexto++;  
  }  
  
  dibujarBoton(550, 370, 200, 45, "CONTINUAR");  
}  
  
function pantallaHistoria4(){  
  image(pantalla5,0,0,width,height);  
  fill(255);  
  textFont(fuenteTitulo);  
  textSize(34);  
  textAlign(CENTER,TOP);  
  
  for (let i = 0; i < cantidadTexto; i++){  
    text(textoHistoria5[i],400,40 + i * 35);  
  }  
  
  if(frameCount % 30 == 0 && cantidadTexto < textoHistoria5.length) {  
    cantidadTexto++;  
  }  
  
  dibujarBoton(80, 330, 220, 55, "IGNORARLA");  
  dibujarBoton(500, 330, 220, 55, "SEGUIRLA");  
}  
  
function pantallaHistoria5a(){  
  image(pantalla5a,0,0,width,height);  
}  
  
function pantallaHistoria5b(){  
  image(pantalla5b,0,0,width,height);  
}  
  
  
  function mousePressed() {  
    if(detectarZonaR(300,300,200,50)){  
      pantalla = 1;  
     //cantidadTexto = 0;  
    }  
    if (detectarZonaR(300,370,200,50)){  
      pantalla = 100   
        
    }  
    if(pantalla== 1 && detectarZonaR(550,370,200,45)){  
      pantalla = 2;  
      cantidadTexto = 0;  
    }  
    else if(pantalla== 2 && detectarZonaR(550,370,200,45)){  
      pantalla = 3;  
      cantidadTexto = 0;  
    }  
    else if(pantalla== 3 && detectarZonaR(550,370,200,45)){  
      pantalla = 4;  
      cantidadTexto = 0;  
    }  
    else if(pantalla== 4 && detectarZonaR(80,330,220,55)){  
      pantalla = 6;  
      cantidadTexto = 0;  
    }  
    else if(pantalla== 4 && detectarZonaR(500,330,220,55)){  
      pantalla = 7;  
      cantidadTexto = 0;  
    }  
  }
  
