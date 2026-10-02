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
"Un día, a mediodía Marini mira por la ventanilla",  
"y descubre una pequeña isla en el mar",  
"Y queda fascinado contemplándola."  
]  
let textoHistoria4 = [  
"Al día siguiente vuelve a pasar por la isla.",  
"Marini la reconoce",
"y una pasajera le dice que es Xiros.",  
"A partir de ese momento, comienza su obsesión."  

]  
let Decision1y4 = [
"¿QUÉ HACER CON ESA OBSESIÓN?"
]//---------------------------------------------
let textoHistoria5A = [//ignora
"Marini decide ignorar la isla",
"e intenta olvidarse de Xiros y acepta otra ruta de vuelo."
]
let textoHistoria6A = ["Marini logra olvidarse de la isla."]
let textoHistoria7A = ["Xiros queda solamente como un recuerdo,", "acompañado de cierta nostalgia."];
let textoHistoria8A = ["Marini vuelve a enfocarse en su vida cotidiana."];
let textoFinal1 = ["FINAL 1: Una nueva vida", "Marini decide dejar su trabajo de auxiliar de vuelo", "y forma una familia con Carla."];
//--------------------------------------------------------
let textoHistoria5B = [//sigue
"Marini decide seguir.",
"Comienza a investigar sobre Xiros."
]
let textoHistoria6B = ["Marini decide viajar hasta Xiros", "y conoce a Klaios."];
let textoHistoria7B = ["Marini recorre la isla."];
let Decision2 = ["¿VOLVER O QUEDARSE EN XIROS?"];
let textoHistoria8B = ["Marini decide quedarse",
"comienza a pensar en su vida", "y en todo lo que dejó atrás."];
let textoHistoria9B = ["Marini ve pasar el avión sobre la isla."];
let Decision3 = ["¿SALIR A VER EL AVIÓN O NO VERLO?"];
let Decision4 = ["¿EL AVIÓN CAE O NO CAE?"];
let textoFinal2 = ["FINAL 2: Una nueva vida en la isla",
"Marini decide quedarse definitivamente en Xiros", 
"y comienza una nueva vida allí."];
let Decision5 = ["EL AVIÓN CAE A CERCANÍAS DE LA ISLA", "¿A QUIÉN BUSCA RESCATAR?"];
let pantalla10A = ["cuerpo de felisa"];
let pantalla10B = ["cuerpo de Marini"];
let textoFinal3 = ["FINAL 3: La isla maldita", "Marini encuentra una versión de sí mismo", "y queda atrapado en la tragedia de Xiros."];

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
  
 mostrarTexto(textoHistoria2, 40, 300, 35);// esto es una funcion ahora bro (funciondetext)
  
 dibujarBoton(550, 370, 200, 45, "CONTINUAR");  
}  
    
function pantallaHistoria2(){//-------------------------------------------------------------- pantalla 2  
  image(pantalla3,0,0,width,height);  
  fill(255);  
  textFont(fuenteTitulo);  
  textSize(30);  
  textAlign(LEFT,TOP);  
    
 mostrarTexto(textoHistoria3, 10, 330, 32); 
  
dibujarBoton(550, 370, 200, 45, "CONTINUAR");  
} // ------------------------------------------------------ pabtalla 3
  
function pantallaHistoria3(){  
  image(pantalla4,0,0,width,height);  
  fill(255);  
  textFont(fuenteTitulo);  
  textSize(30);  
  textAlign(LEFT,TOP);  
  
  mostrarTexto(textoHistoria4,10,300,35);
  dibujarBoton(550, 370, 200, 45, "CONTINUAR");  
}  
 // ----------------------------------------------------- pantalla 4
function pantallaHistoria4(){  
  image(pantalla5,0,0,width,height);  
  fill(255);  
  textFont(fuenteTitulo);  
  textSize(34);  
  textAlign(CENTER,TOP);  
  
    
    mostrarTexto(Decision1y4,400,40,35);
  
  dibujarBoton(80, 330, 220, 55, "IGNORARLA");  
  dibujarBoton(500, 330, 220, 55, "SEGUIRLA");  
}  //------------------------------------------------
  
function pantallaHistoria5a(){  
  image(pantalla5a,0,0,width,height);  
}  
  
function pantallaHistoria5b(){  
  image(pantalla5b,0,0,width,height);  
}  
  
  
  function mousePressed() {  
    if(detectarZonaR(300,300,200,50)){  
      cambiarPantalla(1);  
     //cantidadTexto = 0;  
    }  
    if (detectarZonaR(300,370,200,50)){  
       cambiarPantalla(100);  // esto es un ej no exite una pantalla 100
        
    }  
    if(pantalla== 1 && detectarZonaR(550,370,200,45)){  
       cambiarPantalla(2);
    }  
    else if(pantalla== 2 && detectarZonaR(550,370,200,45)){  
       cambiarPantalla(3); 
    }  
    else if(pantalla== 3 && detectarZonaR(550,370,200,45)){  
       cambiarPantalla(4); 
    }  
    else if(pantalla== 4 && detectarZonaR(80,330,220,55)){  
       cambiarPantalla(6);
    }  
    else if(pantalla== 4 && detectarZonaR(500,330,220,55)){  
       cambiarPantalla(7);  
    }  
  }
  
  
