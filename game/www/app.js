let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");

let person = new Image();
let bg = new Image();
let fire = new Image();
let fg = new Image();

person.src = "img/protagonist-v2.png";
bg.src = "img/DoZ3MXTXgAER5Po.jpg";
fire.src = "img/123.png";
fg.src = "img/2.png";

// Припятствие 

let fir = [];
fir[0] = {
    x : 1060,
    y : 740

}

// Позиция персонажа 

let xPos = 0;
let yPos = 720;
let grav = 1;

// Упровление

 document.addEventListener("keydown" , moveUp);

function  moveUp() {
    
    if (event.code == 'KeyW')
    yPos -= 40;
     
    onclick = event.preventDefault();
    
 }

 document.addEventListener("keyup" , moveDo);

  function  moveDo() {
    if (event.code == 'KeyW')
    yPos += 40;

    onclick = event.preventDefault();
    
 }


 document.addEventListener("keydown" , riteUp);

  function  riteUp(event) {
   
    if (event.code == 'KeyD')
      xPos += 10;
    

      onclick = event.preventDefault();
     
  }


  document.addEventListener("keyup" , riteeDo);

 function  riteeDo() {
     if (event.code == 'KeyD')
     xPos += 5;

     onclick = event.preventDefault();
    
 }























// Движок




function draw() {
    ctx.drawImage(bg, 0, 0);
    
    for(let i = 0; i < fir.length; i++) {
        ctx.drawImage(fire, fir[i].x, fir[i].y);

        fir[i].x--;

        if(fir[i].x == 210){
            fir.push({
                x : 1050,
                y : 740
            });
        }

        if(xPos + person.width >= fir[i].x &&
            xPos <= fir[i].x + 40 && (yPos <= fir[i].y + 40
                || yPos + 40 >= fir[i].y + 40)) {
                   let g = location.reload();
                }
    }

    ctx.drawImage(fire, 140, 728);

    ctx.drawImage(person, xPos, yPos);

    ctx.drawImage(fg, 0, 775)

    // xPos += grav;
    requestAnimationFrame(draw);
}

fg.onload = draw;


