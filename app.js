// Menu lado izquierdo
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible=false;
    }
}

let links = document.querySelectorAll("nav a");
for(var x=0; x <links.length;x++){
    links[x].onclick=function(){
        menu.style.display="none";
        menu_visible=false
    }
}
//Barras animadas identificadas por ID
function crear_barra(id_barra){
    for(i=0;i<=16; i++){
        let div =document.createElement("div");
        div.className ="e";
        id_barra.appendChild(div);
    }
}

//Creacion de las barras para poder utilizarlas mas adelantes
let html = document.getElementById("html");
crear_barra(html);
let css = document.getElementById("css");
crear_barra(css);
let javascript = document.getElementById("javascript");
crear_barra(javascript);
let word = document.getElementById("word");
crear_barra(word);
let powerPoint = document.getElementById("powerpoint");
crear_barra(powerpoint);
let Excel = document.getElementById("excel");
crear_barra(excel);



//Voy a pintar como si estaria cargando
//Arrancan en -1 porque no tiene ninguna porcion pintada
// let contadores = [-1,-1,-1,-1,-1,-1];
//ESTA VB LA SE UTILIZA COMO BANDERA PARA 
let entro = false;

//FX PARA LAS ANIMACIONES


function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval((function(){
            pintarBarra(html, 16, 0, intervalHtml);
        },100));
        const intervalCSS = setInterval(function(){
          pintarbarra(css, 11, 1, intervalCss);  
        },100)
        const intervalJavascript = setInterval(function(){
          pintarbarra(javascript, 11, 2, intervalJavascript);  
        },100)
        const intervalWORD = setInterval(function(){
          pintarbarra(word, 11, 3, intervalword);  
        },100)
        const intervalPowerpoint = setInterval(function(){
          pintarbarra(powerpoint, 11, 4, intervalPowerpoint);  
        },100)
        const intervalEXCEL = setInterval(function(){
          pintarbarra(excel, 11, 5, intervalExcel);  
        },100)
    }
}

//lleno una barra
function pintarbarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor="#940253";      
    }else{
        clearInterval(interval)
    }
}

//detecto el scrolling del mouse para aplicar la animacion
window.onscroll = function(){
    efectoHabilidades();}