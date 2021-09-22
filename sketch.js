var xmover= 100;
var ymover= 300;

var xMinBotao = 148;
var xMaxBotao = xMinBotao + larguraBotao;
var yMinBotao1 = 200;
var yMaxBotao1 = yMinBotao1 + alturaBotao;
var larguraBotao = 170;
var alturaBotao = 35;

var yMinBotao2 = 150;
var yMaxBotao2 = yMinBotao2 + alturaBotao;

var yMinBotao3= 100
var yMaxBotao3= yMinBotao3 + alturaBotao;

var xMinBotaoEng= 20;
var larguraBotaoEng= xMinBotaoEng+20;
var yMinBotaoEng= 20;
var alturaBotaoEng= yMinBotaoEng+20;

var imagemProgramador;
var imagemEducador;
var imagemInstrucoesTemp;
var imagemTempJogo;
var imagemEngrenagem;
var imagemMob100;
var imagemFindIt;
var musicaMenu;
var imagemQuestao1;
var imagemDog1;
var imagemDog2;
var imagemDog3;
var imagemDog4;
var imagemDog5;
var imagemDog6;
var imagemDog7;
var imagemFinal;
var tela = 0;
//tela = 0 menu;
//tela = 1 de instruições;
//tela = 2 créditos;
//tela = 3 fase 01;
//tela = 4 fase 02;
//tela = 5 fase 03;
//tela = 6 1a parte da fase 03;
//tela = 7 2a parte da fase 03;
//tela = 8 3a parte da fase 03;
//tela = 9 4a parte da fase 03;
//tela = 11 5a parte da fase 03;
//tela = 12 6a parte da fase 03;
//tela = 13 7a parte da fase 03;

//tela = 10 tente novamente;


function tryagain(){
background(999);
let c = color(255, 204, 0);
    fill(c);
  rect(xMinBotaoEng, yMinBotaoEng, larguraBotaoEng, alturaBotaoEng);
  fill(0);
  textSize(12);
  text("BACK", 24, 45);
  if(mouseX > 20 && mouseX < 60 && mouseY > 20 && mouseY < 60){
      fill(0); 
        if (mouseIsPressed){ 
        tela = 0;
}
}
  noFill();
  rect(140, 90, 200, 60, 5)
  
  textSize(30);
  fill(0);
  textFont('serif');
  text("TRY AGAIN!", 154, 130);
  if(mouseX > 140 && mouseX < 340 && mouseY > 90 && mouseY < 150){
     let r = color(255, 204, 0);  
    fill(r);
    
     if (mouseIsPressed){ 
        tela = 3;
        }
  }
}

function game(){
  background(999);
//textSize(50);
  let c = color(255, 204, 0);
    fill(c);

  //botao voltar ao inicio
  
  
  rect(xMinBotaoEng, yMinBotaoEng, larguraBotaoEng, alturaBotaoEng);
  fill(0);
  textSize(12);
  text("BACK", 24, 45)
  if(mouseX > 20 && mouseX < 60 && mouseY > 20 && mouseY < 60){ 
        if (mouseIsPressed){ 
        tela = 0;
        }
  }

  //primeiro level
  image(imagemQuestao1, 70, 10, 425, 250)
  textSize(20);
  fill(0);
  textFont('serif')
  text("01. O título do texto, traduzido seria:", 10, 275)
  
  //primeira opção
  noFill();
  rect(10, 290, 150, 30)
  textSize(14);
  fill(0);
  textFont('serif');
  text("(A) Como está Neymar?", 21, 310)
  
  if(mouseX > 10 && mouseX < 160 && mouseY > 290 && mouseY <  320){
if (mouseIsPressed){
        tela = 10;  }
  }
  //segunda opção
  noFill();
  rect(10, 345, 150, 30)
  textSize(14);
  fill(0);
  textFont('serif');
  text("(B) O que é Neymar?", 25, 365)
  
   if(mouseX > 10 && mouseX < 160 && mouseY > 345 && mouseY <  375){
if (mouseIsPressed){
        tela = 10;  }
  }
  
  //terceira opção
  noFill();
  rect(230, 345, 150, 30)
  textSize(14);
  fill(0);
  textFont('serif');
  text("(D) Quem é Neymar?", 235, 365)
  
  
  
  if(mouseX > 230 && mouseX < 380 && mouseY > 345 && mouseY <  375){
if (mouseIsPressed){
        tela = 4;  }
  }
  //quarta opção
  noFill();
  rect(230, 290, 150, 30)
  textSize(14);
  fill(0);
  textFont('serif');
  text("(C) Como é Neymar?", 235, 310)
  
  if(mouseX > 230 && mouseX < 380 && mouseY > 290 && mouseY <  320){
if (mouseIsPressed){
        tela = 10;  }
  }
}

function fase02() {
  background(999);
let c = color(255, 204, 0);
    fill(c);
  rect(xMinBotaoEng, yMinBotaoEng, larguraBotaoEng, alturaBotaoEng);
  fill(0);
  textSize(12);
  text("BACK", 24, 45);
  if(mouseX > 20 && mouseX < 60 && mouseY > 20 && mouseY < 60){
      fill(0); 
        if (mouseIsPressed){ 
        tela = 0;
        }
}
    image(imagemQuestao1, 70, 10, 425, 250)
  textSize(15);
  fill(0);
  textFont('serif')
  text("02. Na oração: 'WHEN did Neymar first start playing soccer?', a palavra maiúscula significa:", 10, 275, 450)

//primeira opção
  noFill();
  rect(10, 310, 150, 30)
  textSize(14);
  fill(0);
  textFont('serif');
  text("(A) Quando", 47, 329)
  
  
  if(mouseX > 10 && mouseX < 160 && mouseY > 310 && mouseY <  340) {
if (mouseIsPressed){
        tela = 5;  }
  }
  
//segunda opção
  noFill();
  rect(10, 345, 150, 30)
  textSize(14);
  fill(0);
  textFont('serif');
  text("(B) Como", 47, 365)

  
   if(mouseX > 10 && mouseX < 160 && mouseY > 345 && mouseY <  375){
if (mouseIsPressed){
        tela = 10;  }
  }
  
//terceira opção
  noFill();
  rect(230, 310, 150, 30)
  textSize(14);
  fill(0);
  textFont('serif');
  text("(C) Quem", 265, 329)

  if(mouseX > 230 && mouseX < 380 && mouseY > 310 && mouseY <  340){
if (mouseIsPressed){
        tela = 10;  }
  }
  
//quarta opção

  noFill();
  rect(230, 345, 150, 30)
  textSize(14);
  fill(0);
  textFont('serif');
  text("(D) Onde", 265, 365)
  

  
}

function fase03(){
  background(999);
  
  let c = color(255, 204, 0);
  fill(c);
  rect(xMinBotaoEng, yMinBotaoEng, larguraBotaoEng, alturaBotaoEng);
  fill(0);
  textSize(12);
  text("BACK", 24, 45)
  if(mouseX > 20 && mouseX < 60 && mouseY > 20 && mouseY < 60){ 
        if (mouseIsPressed){ 
        tela = 0;
        }
  }
  
  textSize(14);
  fill(0);
  textFont('serif');
  text("03. Vai ser dada uma imagem e com ela, você classifica como o animal está, com: ON, IN, UNDER, IN FRONT OF, BEHIND, FAR, NEAR. \n OBS: Para continuar, clique no botão!", 10, 100,450)
  
  
if (mouseX > 150 && mouseX < 318 && mouseY > 320 && mouseY <  355){
      noFill();
      if (mouseIsPressed){
        tela = 6;
      }
    }
    
     rect( 150, 320 , larguraBotao, alturaBotao, 5)
     textSize(20);
     fill(100);
     text("LET'S GO!", xMinBotao + 40, yMinBotao2 + 193)


}

function dog1(){
 background(999);
  let c = color(255, 204, 0);
  fill(c);
  rect(xMinBotaoEng, yMinBotaoEng, larguraBotaoEng, alturaBotaoEng);
  fill(0);
  textSize(12);
  text("BACK", 24, 45);
  if(mouseX > 20 && mouseX < 60 && mouseY > 20 && mouseY < 60){
      fill(0); 
        if (mouseIsPressed){ 
        tela = 0;
        }
}
  
  textSize(20);
  fill(0);
  textFont('serif');
  text("03-A)", 10, 100,450);
  
  image(imagemDog1, 20, 140, 145, 180);
  
  //opção 01
  fill(c);
  rect(170, 170, 85, 25);
  
  textSize(13);
  fill(0);
  textFont('serif');
  text("IN FRONT OF", 173, 188);
  
  if (mouseX > 170 && mouseX < 255 && mouseY > 170 && mouseY < 195){
       if (mouseIsPressed){
           tela = 10;
    }
  }
    
  //opção 02
  fill(c);
  rect(170, 205, 85, 25);
  
  textSize(16);
  fill(0);
  textFont('serif');
  text("BEHIND", 184, 223);
  
  if (mouseX > 170 && mouseX < 255 && mouseY > 205 && mouseY < 230){
        if (mouseIsPressed){
            tela = 10;
    }
  }
  //opção 03
  fill(c);
  rect(170, 240, 85, 25);
  
  textSize(17);
  fill(0);
  textFont('serif');
  text("ON", 202, 258);
  
  if (mouseX > 170 && mouseX < 255 && mouseY > 240 && mouseY < 265){
      if (mouseIsPressed){
          tela = 10;
    }
  }
  
  //opção 04

  fill(c);
  rect(275, 240, 85, 25);
  
  
  textSize(17);
  fill(0);
  textFont('serif');
  text("IN", 308, 258);
  
  if (mouseX > 275 && mouseX < 360 && mouseY > 240 && mouseY < 265){
    if (mouseIsPressed){
        tela = 7;
      }
    }
  
   
  //opção 05
  fill(c);
  rect(275, 205, 85, 25);
  
  textSize(17);
  fill(0);
  textFont('serif');
  text("FAR", 303, 223);
  
  
  if (mouseX > 275 && mouseX < 360 && mouseY > 205 && mouseY < 230){
        if (mouseIsPressed){
            tela = 10;
    }
  }
  
  //opção 06
  fill(c);
  rect(275, 170, 85, 25);
  
  textSize(17);
  fill(0);
  textFont('serif');
  text("NEAR", 295, 188);
   
  if (mouseX > 275 && mouseX < 360 && mouseY > 170 && mouseY < 195){
      if (mouseIsPressed){
          tela = 10;
    }
  }
  
  //opção 07
  fill(c);
  rect(380, 205, 85, 25);
  
  textSize(17);
  fill(0);
  textFont('serif');
  text("UNDER", 394, 223);
  
  if (mouseX > 380 && mouseX < 465 && mouseY > 205 && mouseY < 230){
      if (mouseIsPressed){
          tela = 10;
    }
  }
  
}

function dog2(){
  background(999);
  let c = color(255, 204, 0);
  fill(c);
  rect(xMinBotaoEng, yMinBotaoEng, larguraBotaoEng, alturaBotaoEng);
  fill(0);
  textSize(12);
  text("BACK", 24, 45);
  if(mouseX > 20 && mouseX < 60 && mouseY > 20 && mouseY < 60){
      fill(0); 
        if (mouseIsPressed){ 
        tela = 0;
        }
}
  textSize(20);
  fill(0);
  textFont('serif');
  text("03-B)", 10, 100,450);
  
  image(imagemDog2, 173, 140, 145, 180);
  
  //opção 01
  fill(c);
  rect(20, 140, 85, 25);
  
  textSize(13);
  fill(0);
  textFont('serif');
  text("IN FRONT OF", 22, 158);
  
  if (mouseX > 20 && mouseX < 105 && mouseY > 140 && mouseY < 165){
       if (mouseIsPressed){
           tela = 8;
    }
  }
  //opção 02
  fill(c);
  rect(20, 175, 85, 25);
  
  textSize(16);
  fill(0);
  textFont('serif');
  text("BEHIND", 30, 192);
  
  if (mouseX > 20 && mouseX < 105 && mouseY > 175 && mouseY < 200){
        if (mouseIsPressed){
            tela = 10;
    }
  }
  
  //opção 03
  fill(c);
  rect(20, 210, 85, 25);
  
  textSize(17);
  fill(0);
  textFont('serif');
  text("ON", 50, 228);
  
  if (mouseX > 20 && mouseX < 105 && mouseY > 210 && mouseY < 235){
      if (mouseIsPressed){
          tela = 10;
    }
  }
  
  //opção 04

  fill(c);
  rect(20, 245, 85, 25);
  
  
  textSize(17);
  fill(0);
  textFont('serif');
  text("IN", 55, 265);
  
  if (mouseX > 20 && mouseX < 105 && mouseY > 245 && mouseY < 270){
    if (mouseIsPressed){
        tela = 10;
      }
    }
  //opção 05
  fill(c);
  rect(20, 280, 85, 25);
  
  textSize(17);
  fill(0);
  textFont('serif');
  text("FAR", 50, 298);
  
  
  if (mouseX > 20 && mouseX < 105 && mouseY > 280 && mouseY < 305){
        if (mouseIsPressed){
            tela = 10;
    }
  }
  //opção 06
  fill(c);
  rect(20, 315, 85, 25);
  
  textSize(17);
  fill(0);
  textFont('serif');
  text("NEAR", 42, 332);
   
  if (mouseX > 20 && mouseX < 105 && mouseY > 315 && mouseY < 340){
      if (mouseIsPressed){
          tela = 10;
    }
  }
    //opção 07 
  fill(c);
  rect(20, 350, 85, 25);
  
  textSize(17);
  fill(0);
  textFont('serif');
  text("UNDER", 35, 368);
   
  if (mouseX > 20 && mouseX < 105 && mouseY > 350 && mouseY < 375){
      if (mouseIsPressed){
          tela = 10;
      }
}

}

function dog3(){
  background(999);
  let c = color(255, 204, 0);
  fill(c);
  rect(xMinBotaoEng, yMinBotaoEng, larguraBotaoEng, alturaBotaoEng);
  fill(0);
  textSize(12);
  text("BACK", 24, 45);
  if(mouseX > 20 && mouseX < 60 && mouseY > 20 && mouseY < 60){
     fill(0); 
     if (mouseIsPressed){ 
         tela = 0;
        }
}
  textSize(20);
  fill(0);
  textFont('serif');
  text("03-C)", 10, 100,450);
  
    image(imagemDog3, 20, 140, 145, 180);

  //opção 01
  fill(c);
  rect(170, 170, 85, 25);
  
  textSize(13);
  fill(0);
  textFont('serif');
  text("IN FRONT OF", 173, 188);
  
  if (mouseX > 170 && mouseX < 255 && mouseY > 170 && mouseY < 195){
       if (mouseIsPressed){
           tela = 10;
    }
  }
  //opção 02
  fill(c);
  rect(170, 205, 85, 25);
  
  textSize(16);
  fill(0);
  textFont('serif');
  text("BEHIND", 184, 223);
  
  if (mouseX > 170 && mouseX < 255 && mouseY > 205 && mouseY < 230){
        if (mouseIsPressed){
            tela = 9;
    }
  }
  //opção 03
  fill(c);
  rect(170, 240, 85, 25);
  
  textSize(17);
  fill(0);
  textFont('serif');
  text("ON", 202, 258);
  
  if (mouseX > 170 && mouseX < 255 && mouseY > 240 && mouseY < 265){
      if (mouseIsPressed){
          tela = 10;
    }
  }
  //opção 04

  fill(c);
  rect(275, 240, 85, 25);
  
  
  textSize(17);
  fill(0);
  textFont('serif');
  text("IN", 308, 258);
  
  if (mouseX > 275 && mouseX < 360 && mouseY > 240 && mouseY < 265){
       if (mouseIsPressed){
          tela = 10;
      }
    }
    //opção 05
  fill(c);
  rect(275, 205, 85, 25);
  
  textSize(17);
  fill(0);
  textFont('serif');
  text("FAR", 303, 223);
  
  
  if (mouseX > 275 && mouseX < 360 && mouseY > 205 && mouseY < 230){
      if (mouseIsPressed){
          tela = 10;
    }
  }
  //opção 06
  fill(c);
  rect(275, 170, 85, 25);
  
  textSize(17);
  fill(0);
  textFont('serif');
  text("NEAR", 295, 188);
   
  if (mouseX > 275 && mouseX < 360 && mouseY > 170 && mouseY < 195){
      if (mouseIsPressed){
          tela = 10;
    }
  }
  //opção 07
  fill(c);
  rect(380, 205, 85, 25);
  
  textSize(17);
  fill(0);
  textFont('serif');
  text("UNDER", 394, 223);
  
  if (mouseX > 380 && mouseX < 465 && mouseY > 205 && mouseY < 230){
      if (mouseIsPressed){
          tela = 10;
       }
     }
}

function dog4(){
  background(999);
  let c = color(255, 204, 0);
  fill(c);
  rect(xMinBotaoEng, yMinBotaoEng, larguraBotaoEng, alturaBotaoEng);
  fill(0);
  textSize(12);
  text("BACK", 24, 45);
  if(mouseX > 20 && mouseX < 60 && mouseY > 20 && mouseY < 60){
     fill(0); 
     if (mouseIsPressed){ 
         tela = 0;
        }
} 
  textSize(20);
  fill(0);
  textFont('serif');
  text("03-D)", 10, 100,450);

    image(imagemDog4, 173, 140, 145, 180);
  
  //opção 01
  fill(c);
  rect(20, 140, 85, 25);
  
  textSize(13);
  fill(0);
  textFont('serif');
  text("IN FRONT OF", 22, 158);
  
  if (mouseX > 20 && mouseX < 105 && mouseY > 140 && mouseY < 165){
       if (mouseIsPressed){
           tela = 10;
       }
    }
  //opção 02
  fill(c);
  rect(20, 175, 85, 25);
  
  textSize(16);
  fill(0);
  textFont('serif');
  text("BEHIND", 30, 192);
  
  if (mouseX > 20 && mouseX < 105 && mouseY > 175 && mouseY < 200){
       if (mouseIsPressed){
            tela = 10;
           }
       }
  //opção 03
  fill(c);
  rect(20, 210, 85, 25);
  
  textSize(17);
  fill(0);
  textFont('serif');
  text("ON", 50, 228);
  
  if (mouseX > 20 && mouseX < 105 && mouseY > 210 && mouseY < 235){
      if (mouseIsPressed){
          tela = 10;
    }
  }

    //opção 04

  fill(c);
  rect(20, 245, 85, 25);
  
  
  textSize(17);
  fill(0);
  textFont('serif');
  text("IN", 55, 265);
  
  if (mouseX > 20 && mouseX < 105 && mouseY > 245 && mouseY < 270){
    if (mouseIsPressed){
        tela = 10;
      }
    }
    //opção 05
  fill(c);
  rect(20, 280, 85, 25);
  
  textSize(17);
  fill(0);
  textFont('serif');
  text("FAR", 50, 298);
  
  
  if (mouseX > 20 && mouseX < 105 && mouseY > 280 && mouseY < 305){
        if (mouseIsPressed){
            tela = 10;
    }
  }
    //opção 06
  fill(c);
  rect(20, 315, 85, 25);
  
  textSize(17);
  fill(0);
  textFont('serif');
  text("NEAR", 42, 332);
   
  if (mouseX > 20 && mouseX < 105 && mouseY > 315 && mouseY < 340){
      if (mouseIsPressed){
          tela = 10;
    }
  }
  //opção 07 
  fill(c);
  rect(20, 350, 85, 25);
  
  textSize(17);
  fill(0);
  textFont('serif');
  text("UNDER", 35, 368);
   
  if (mouseX > 20 && mouseX < 105 && mouseY > 350 && mouseY < 375){
      if (mouseIsPressed){
          tela = 11;
      }
}
}

function dog5(){
  background(999);
  let c = color(255, 204, 0);
  fill(c);
  rect(xMinBotaoEng, yMinBotaoEng, larguraBotaoEng, alturaBotaoEng);
  fill(0);
  textSize(12);
  text("BACK", 24, 45);
  if(mouseX > 20 && mouseX < 60 && mouseY > 20 && mouseY < 60){
     fill(0); 
     if (mouseIsPressed){ 
         tela = 0;
        }
}
  textSize(20);
  fill(0);
  textFont('serif');
  text("03-E)", 10, 100,450);
  
    image(imagemDog5, 20, 140, 145, 180);

  //opção 01
  fill(c);
  rect(170, 170, 85, 25);
  
  textSize(13);
  fill(0);
  textFont('serif');
  text("IN FRONT OF", 173, 188);
  
  if (mouseX > 170 && mouseX < 255 && mouseY > 170 && mouseY < 195){
       if (mouseIsPressed){
           tela = 10;
    }
  }
  //opção 02
  fill(c);
  rect(170, 205, 85, 25);
  
  textSize(16);
  fill(0);
  textFont('serif');
  text("BEHIND", 184, 223);
  
  if (mouseX > 170 && mouseX < 255 && mouseY > 205 && mouseY < 230){
        if (mouseIsPressed){
            tela = 10;
    }
  }
  //opção 03
  fill(c);
  rect(170, 240, 85, 25);
  
  textSize(17);
  fill(0);
  textFont('serif');
  text("ON", 202, 258);
  
  if (mouseX > 170 && mouseX < 255 && mouseY > 240 && mouseY < 265){
      if (mouseIsPressed){
          tela = 12;
    }
  }
  //opção 04
  fill(c);
  rect(275, 240, 85, 25);
  
  textSize(17);
  fill(0);
  textFont('serif');
  text("IN", 308, 258);
  
  if (mouseX > 275 && mouseX < 360 && mouseY > 240 && mouseY < 265){
    if (mouseIsPressed){
        tela = 10;
      }
    }
  //opção 05
  fill(c);
  rect(275, 205, 85, 25);
  
  textSize(17);
  fill(0);
  textFont('serif');
  text("FAR", 303, 223);
  
  
  if (mouseX > 275 && mouseX < 360 && mouseY > 205 && mouseY < 230){
        if (mouseIsPressed){
            tela = 10;
    }
  }
  
  //opção 06
  fill(c);
  rect(275, 170, 85, 25);
  
  textSize(17);
  fill(0);
  textFont('serif');
  text("NEAR", 295, 188);
   
  if (mouseX > 275 && mouseX < 360 && mouseY > 170 && mouseY < 195){
      if (mouseIsPressed){
          tela = 10;
    }
  }
  //opção 07
  fill(c);
  rect(380, 205, 85, 25);
  
  textSize(17);
  fill(0);
  textFont('serif');
  text("UNDER", 394, 223);
  
  if (mouseX > 380 && mouseX < 465 && mouseY > 205 && mouseY < 230){
      if (mouseIsPressed){
          tela = 10;
    }
  }
}

function dog6(){
  background(999);
  let c = color(255, 204, 0);
  fill(c);
  rect(xMinBotaoEng, yMinBotaoEng, larguraBotaoEng, alturaBotaoEng);
  fill(0);
  textSize(12);
  text("BACK", 24, 45);
  if(mouseX > 20 && mouseX < 60 && mouseY > 20 && mouseY < 60){
     fill(0); 
     if (mouseIsPressed){ 
         tela = 0;
        }
}
  textSize(20);
  fill(0);
  textFont('serif');
  text("03-F)", 10, 100,450);
  
      image(imagemDog6, 173, 140, 145, 180);

    //opção 01
  fill(c);
  rect(20, 140, 85, 25);
  
  textSize(13);
  fill(0);
  textFont('serif');
  text("IN FRONT OF", 22, 158);
  
  if (mouseX > 20 && mouseX < 105 && mouseY > 140 && mouseY < 165){
       if (mouseIsPressed){
           tela = 10;
    }
  }
  //opção 02
  fill(c);
  rect(20, 175, 85, 25);
  
  textSize(16);
  fill(0);
  textFont('serif');
  text("BEHIND", 30, 192);
  
  if (mouseX > 20 && mouseX < 105 && mouseY > 175 && mouseY < 200){
        if (mouseIsPressed){
            tela = 10;
    }
  }
  //opção 03
  fill(c);
  rect(20, 210, 85, 25);
  
  textSize(17);
  fill(0);
  textFont('serif');
  text("ON", 50, 228);
  
  if (mouseX > 20 && mouseX < 105 && mouseY > 210 && mouseY < 235){
      if (mouseIsPressed){
          tela = 10;
    }
  }
  //opção 04
  fill(c);
  rect(20, 245, 85, 25);
  
  textSize(17);
  fill(0);
  textFont('serif');
  text("IN", 55, 265);
  
  if (mouseX > 20 && mouseX < 105 && mouseY > 245 && mouseY < 270){
    if (mouseIsPressed){
        tela = 10;
      }
    }
    //opção 05
  fill(c);
  rect(20, 280, 85, 25);
  
  textSize(17);
  fill(0);
  textFont('serif');
  text("FAR", 50, 298);
  
  
  if (mouseX > 20 && mouseX < 105 && mouseY > 280 && mouseY < 305){
        if (mouseIsPressed){
            tela = 13;
    }
  }
  //opção 06
  fill(c);
  rect(20, 315, 85, 25);
  
  textSize(17);
  fill(0);
  textFont('serif');
  text("NEAR", 42, 332);
   
  if (mouseX > 20 && mouseX < 105 && mouseY > 315 && mouseY < 340){
      if (mouseIsPressed){
          tela = 10;
    }
  }
  //opção 07 
  fill(c);
  rect(20, 350, 85, 25);
  
  textSize(17);
  fill(0);
  textFont('serif');
  text("UNDER", 35, 368);
   
  if (mouseX > 20 && mouseX < 105 && mouseY > 350 && mouseY < 375){
      if (mouseIsPressed){
          tela = 10;
      }
}
}

function dog7(){
  background(999);
  let c = color(255, 204, 0);
  fill(c);
  rect(xMinBotaoEng, yMinBotaoEng, larguraBotaoEng, alturaBotaoEng);
  fill(0);
  textSize(12);
  text("BACK", 24, 45);
  if(mouseX > 20 && mouseX < 60 && mouseY > 20 && mouseY < 60){
     fill(0); 
     if (mouseIsPressed){ 
         tela = 0;
        }
}
  textSize(20);
  fill(0);
  textFont('serif');
  text("03-G)", 10, 100,450);
  
    image(imagemDog7, 20, 140, 158, 180);

    //opção 01
  fill(c);
  rect(170, 170, 85, 25);
  
  textSize(13);
  fill(0);
  textFont('serif');
  text("IN FRONT OF", 173, 188);
  
  if (mouseX > 170 && mouseX < 255 && mouseY > 170 && mouseY < 195){
       if (mouseIsPressed){
           tela = 10;
    }
  }
    //opção 02
  fill(c);
  rect(170, 205, 85, 25);
  
  textSize(16);
  fill(0);
  textFont('serif');
  text("BEHIND", 184, 223);
  
  if (mouseX > 170 && mouseX < 255 && mouseY > 205 && mouseY < 230){
        if (mouseIsPressed){
            tela = 10;
    }
  }
    //opção 03
  fill(c);
  rect(170, 240, 85, 25);
  
  textSize(17);
  fill(0);
  textFont('serif');
  text("ON", 202, 258);
  
  if (mouseX > 170 && mouseX < 255 && mouseY > 240 && mouseY < 265){
      if (mouseIsPressed){
          tela = 10;
    }
  }
    //opção 04

  fill(c);
  rect(275, 240, 85, 25);
  
  
  textSize(17);
  fill(0);
  textFont('serif');
  text("IN", 308, 258);
  
  if (mouseX > 275 && mouseX < 360 && mouseY > 240 && mouseY < 265){
    if (mouseIsPressed){
        tela = 10;
      }
    }
  //opção 05
  fill(c);
  rect(275, 205, 85, 25);
  
  textSize(17);
  fill(0);
  textFont('serif');
  text("FAR", 303, 223);
  
  
  if (mouseX > 275 && mouseX < 360 && mouseY > 205 && mouseY < 230){
        if (mouseIsPressed){
            tela = 10;
    }
  }
    //opção 06
  fill(c);
  rect(275, 170, 85, 25);
  
  textSize(17);
  fill(0);
  textFont('serif');
  text("NEAR", 295, 188);
   
  if (mouseX > 275 && mouseX < 360 && mouseY > 170 && mouseY < 195){
      if (mouseIsPressed){
          tela = 14;
    }
  }
  //opção 07
  fill(c);
  rect(380, 205, 85, 25);
  
  textSize(17);
  fill(0);
  textFont('serif');
  text("UNDER", 394, 223);
  
  if (mouseX > 380 && mouseX < 465 && mouseY > 205 && mouseY < 230){
      if (mouseIsPressed){
          tela = 10;
    }
  }
}

function final(){
 background(999);
  
  let c = color(255, 204, 0);
  fill(c);
  rect(xMinBotaoEng, yMinBotaoEng, larguraBotaoEng, alturaBotaoEng);
  fill(0);
  textSize(12);
  text("BACK", 24, 45);
  if(mouseX > 20 && mouseX < 60 && mouseY > 20 && mouseY < 60){
     fill(0); 
     if (mouseIsPressed){ 
         tela = 0;
        }
}
  textSize(40);
  fill(c);
  textFont('serif');
  text("CONGRATULATIONS!", 45, 132);
  image(imagemFinal, 85, 140, 300, 180);

}

function telaInstruicoes(){
    background(220);
  textSize(25);
  textSize(25);
  fill(20)
  text("the Boss (the teacher or whoever is running the APP at the time) will give a question and a text, in which the participants, as a group, will analyze the text and answer what was asked.", 50, 100, 450)
    text("INSTRUÇÕES:", 70, 65);

  //botao para voltar ao inicio
  rect(xMinBotaoEng, yMinBotaoEng, larguraBotaoEng, alturaBotaoEng);
  fill(400);
  textSize(12);
  text("BACK", 24, 45)
  if(mouseX > 20 && mouseX < 60 && mouseY > 20 && mouseY < 60){
      fill(0); 
        if (mouseIsPressed){ 
        tela = 0;
        }
  }
}

function telaCreditos(){
  background(220);
  textSize(35);
  fill(5);
  text("CREDITS", 150,50);
  //sobre o professor
  textSize(20);
  fill(40);
  text("Teacher name", 250, 100);
  textSize(15);
  text("Teacher", 200, 120);
  textSize(13);
  text("FALAR UM POUCO DO PROFESSOR", 200, 140, 300);
  image(imagemEducador, 20, 70, 140, 140) //foto temporária
  
  //sobre mim
  textSize(20);
  fill(40);
  text("NÍCOLAS PEREIRA DA SILVA", 210, 250);
  textSize(15);
  text("COMPUTER PROGRAMER", 200, 270);
  textSize(13);
  text("FALAR UM POUCO DE MIM", 200, 290, 300)
  image(imagemProgramador, 20, 230, 140, 140)
  
  //botao de voltar pro inicio
  
  rect(xMinBotaoEng, yMinBotaoEng, larguraBotaoEng, alturaBotaoEng);
  fill(400);
  textSize(12);
  text("BACK", 24, 45)
  if(mouseX > 20 && mouseX < 60 && mouseY > 20 && mouseY < 60){
      fill(0); 
        if (mouseIsPressed){ 
        tela = 0;
        }
  }
}

function preload(){
  imagemProgramador= loadImage("nicolasprogramador.jpg");
  imagemEducador= loadImage("fototemporaria.jpg");
  imagemFindIt=loadImage("lupajust.png");
  soundFormats('mp3');
  musicaMenu=loadSound("musicamenu.mp3");
  musicaMenu.setVolume(0.3);
  imagemQuestao1= loadImage("q01.png");
  imagemDog1= loadImage("dog1.png");
  imagemDog2= loadImage("dog2.png")
  imagemDog3= loadImage("dog3.png")
  imagemDog4= loadImage("dog4.png")
  imagemDog5= loadImage("dog5.png")
  imagemDog6= loadImage("dog6.png")
  imagemDog7= loadImage("dog7.png")
  imagemFinal= loadImage("finalhaikyuu.gif")
}

function setup() {
    createCanvas(500, 400);
    
    musicaMenu.play();


}

function draw() {
  if (tela == 0) {
    background(220);  
    image(imagemFindIt, 0, 1, 500, 400);

  textSize(40);
    fill(0);
  text("FIND IT!", 155, 65);
        //botao 1 créditos
      noFill();
      if(mouseX > 148 && mouseX < 318 && mouseY > 200 && mouseY <  235){
      fill(0); 
        if (mouseIsPressed){ 
        tela = 2;
        } 
      
      }
    
      rect( xMinBotao, yMinBotao1 , larguraBotao, alturaBotao, 5)
 textSize(20);
        fill(50);
        text("CREDITS",  xMinBotao + 45 , yMinBotao1 + 25 );
    
    //botao 2 INSTRUÇÕES;
    if (mouseX > 148 && mouseX < 318 && mouseY > 150 && mouseY <  185){
      noFill();
      if (mouseIsPressed){
        tela = 1;
      }
    }
    
     rect( xMinBotao, yMinBotao2 , larguraBotao, alturaBotao, 5)
     textSize(20);
     fill(100);
     text("INSTRUCTIONS", xMinBotao + 10, yMinBotao2 + 25)
    
    
    //botao 3 jogar
    let c = color(255, 204, 0);
    fill(c);
    rect( xMinBotao, yMinBotao3 , larguraBotao, alturaBotao, 5)
    textSize(20);
    fill(0);
    text("PLAY!", xMinBotao + 55, yMinBotao3 + 25 )
    
    
    if (mouseX > 148 && mouseX < 318 && mouseY > 100 && mouseY <  135){
      fill(300);
      if (mouseIsPressed){
        tela = 3;
      }
    }

  }
  
  
  if (tela == 1 ){
      telaInstruicoes();

  }
  if (tela == 2){
      telaCreditos();
  }
  if (tela == 3){
    game();
  }
  if (tela == 4){
    fase02();
  }
  if (tela==10){
    tryagain();
  }
    
  if (tela == 5){
    fase03();
  }
  if (tela ==6){
    dog1();
  }
  if (tela == 7){
    dog2();
  }
  if (tela== 8){
    dog3();
  }
  if (tela == 9){
    dog4();
  }
  if (tela == 11){
    dog5();
  }
  if (tela == 12){
    dog6();
  }
  if (tela== 13){
    dog7();
  }
  if (tela == 14){
    final();
  }
}
