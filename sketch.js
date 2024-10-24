//Variáveis
var raio = 8;
var larguraRet = 15;
var alturaRet = 80;

var posxRet1 = 30;
var posyRet1 = 150;

var posxRet2 = 650;
var posyRet2 = 150;

var posxCir = 350;
var posyCir = 192;
var velocidadeRet = 4;
var velocidadeBolax = 5;
var velocidadeBolay = 5;

var rebater = true

var pontos1 = 0;
var pontos2 = 0;

function setup() {
  createCanvas(700, 400);
  alert ("Clique em OK para começar")
  
  //Sons
  sonzinho = loadSound('sonzinho.mp3')
  som = loadSound('som.mp3')
  barulho = loadSound('barulho.mp3')
}

function draw() {
  background(255, 204, 0,150);
  
  //Linha pontilhada do meio
  
  line (350,10,350,30);
  line (350,40,350,60);
  line (350,70,350,90);
  line (350,100,350,120);
  line (350,130,350,150);
  line (350,160,350,180);
  line (350,190,350,210);
  line (350,220,350,240);
  line (350,250,350,270);
  line (350,280,350,300);
  line (350,310,350,330);
  line (350,340,350,360);
  line (350,370,350,390);
  
  
  //Desenho da Tela
  
  rect(posxRet1,posyRet1, larguraRet, alturaRet);
  rect(posxRet2,posyRet2,larguraRet, alturaRet);
  
  circle(posxCir,posyCir,raio*2);
  
  text (pontos1, 175, 50);
  text (pontos2,525, 50);
  textSize (40);
  textFont ("Calibri");
  
//Movimentos das barras
  
  if(keyIsDown(UP_ARROW)&&posyRet1>2){
    posyRet1-=velocidadeRet
  }
  if(keyIsDown(DOWN_ARROW)&&posyRet1<318){
    posyRet1+=velocidadeRet
  }  
  if(keyIsDown(87)&&posyRet2>2){
    posyRet2-=velocidadeRet
  }
  if(keyIsDown(83)&&posyRet2<318){
    posyRet2+=velocidadeRet
  }
  
//Movimento da Bola
  
  posxCir+=velocidadeBolax
  posyCir+=velocidadeBolay
  
  
  if (posxCir >= posxRet2+5){
    posxCir = 350
    pontos1 += 1
    sonzinho.setVolume(0.2)
    sonzinho.play()
  }
  if (posxCir <= posxRet1-5){
    posxCir = 350
    pontos2 += 1
    sonzinho.setVolume(0.2)
    sonzinho.play()
  }
  if (posyCir+raio >= 400){
      velocidadeBolay *= -1
    barulho.setVolume(0.2)
      barulho.play()
      
    
      }
  if (posyCir-raio <= 0){
      velocidadeBolay *= -1
    barulho.setVolume(0.2)
      barulho.play()
    
      }
  if (posxCir + raio >= posxRet2 && posyCir >= posyRet2 && posyCir <= posyRet2 + alturaRet&& rebater == true){
    rebater = false
    velocidadeBolax *= -1
    som.setVolume(0.2)
    som.play()
      }
  if (posxCir - raio  <= posxRet1 + larguraRet  && posyCir >= posyRet1 && posyCir <= posyRet1 + alturaRet&& rebater == false ){
    rebater = true
    velocidadeBolax*= -1
    som.setVolume(0.2)
    som.play()
  }
}






