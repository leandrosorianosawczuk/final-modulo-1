let shante = document.getElementById("shante");
let animacion = setInterval(cambiar_imagen,50);
let num_imagen = 0;
let x = 0;

function cambiar_imagen(){
    num_imagen = num_imagen + 1;
    let direc;
    if (num_imagen > 15){
        num_imagen = 1;
    }
    direc = "img/shante/Shante_"+num_imagen+".png";
    shante.setAttribute("src",direc);
}

document.addEventListener("keydown", mover);
function mover(event){
    console.log(event.keyCode);
    if (event.keyCode == 68){
        console.log("Me moveré 5 pixeles a la derecha");
        x = x + 5;
    }
    if (event.keyCode == 65){
        console.log("Me moveré 5 pixeles a la izquierda");
        x = x - 5;
    }
    shante.style.left = x + "px";
}

console.log("Esta es una modificación");
//shante.setAttribute("src","img/Vidas/heart_1.png");