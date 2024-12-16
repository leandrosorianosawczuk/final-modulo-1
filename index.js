let shante = document.getElementById("shante");
let cohete = document.getElementById("cohete");
let animacion = setInterval(cambiar_imagen,50);
let animacion_cohete = setInterval(cambiar_cohete, 50);
let num_imagen = 0;
let num_cohete = 0;
let x = 0;
let y = 0;
let z = shante.offsetWidth / 2;
let disparar;

function cambiar_imagen(){
    num_imagen = num_imagen + 1;
    let direc;
    if (num_imagen > 15){
        num_imagen = 1;
    }
    direc = "img/shante/Shante_"+num_imagen+".png";
    shante.setAttribute("src",direc);
}

function cambiar_cohete() {
    num_cohete = num_cohete + 1;
    let direc;
    if (num_cohete > 4) {
        num_cohete = 1;
    }
    direc = "img/HannyahNED/Cohete_" + num_cohete + ".png";
    cohete.setAttribute("src", direc);
}

function disparar_cohete() {
    cohete.style.display = 'block';
    cohete.style.top = (shante.y + 100) + 'px';
    cohete.style.left = (shante.x + 30) + 'px';
    z = z + 5;
    cohete.style.left = ((shante.x + 30) + z) + 'px';
    if (cohete.x > (window.innerWidth - cohete.offsetWidth)) {
        clearInterval(disparar);
        cohete.style.display = 'none';
        z = shante.offsetWidth / 2;
        console.log('Cohete destruido');
    }
}

document.addEventListener("keydown", mover);
function mover(event){
    console.log(event.keyCode);
    if (event.keyCode == 68){
        if ((shante.x + shante.offsetWidth) < event.view.innerWidth) {
            console.log("Me moveré 5 pixeles a la derecha");
            x = x + 5;
        } else {
            console.log('Ha alcanzado el limite derecho');
        }
    }
    if (event.keyCode == 65){
        if (shante.x > 0) {
            console.log("Me moveré 5 pixeles a la izquierda");
            x = x - 5;
        } else {
            console.log('Ha alcanzado el limite izquierdo');
        }
    }
    if (event.keyCode == 87) {
        if (shante.y > 0) {
            console.log("Me moveré 5 pixeles hacia arriba");
            y = y - 5;
        } else {
            console.log('Ha alcanzado el limite superior');
        }
    }
    if (event.keyCode == 83) {
        if ((shante.y + shante.offsetHeight) < event.view.innerHeight) {
            console.log("Me moveré 5 pixeles hacia abajo");
            y = y + 5;
        } else {
            console.log('Ha alcanzado el limite inferior');
        }
    }
    if (event.keyCode == 69) {
        clearInterval(disparar);
        console.log('Disparando cohete');
        disparar = setInterval(disparar_cohete, 10);
    }
    shante.style.left = x + "px";
    shante.style.top = y + "px";
}

console.log("Esta es una modificación");
//shante.setAttribute("src","img/Vidas/heart_1.png");