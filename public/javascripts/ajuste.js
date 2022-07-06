function ajuste(){
    let tamaño = document.getElementById("agenda");
    let diseño = document.getElementById("liner"); 
    diseño.style.setProperty('height', `calc(${tamaño.offsetHeight}px - 40px)`);
    diseño.style.margin = `0px 210px 35px 0px`
}

ajuste();

