

/* variables de insercion de datos 
aqui primero voy a aobtener en un array vacio los datos del DOM ya que este array funcionara
como variable volatil */

var arrayPostulante = [ ];

/* posteriormente se traslada aun json para que se organice como string y con ese se trabaje a manera de objeto */
var postulante = {
    nombre: " ",
    telefono: " ",
    email: " ",
    carrera: " ",
    semestre: " ",
    skills: " ",
    aboutYou: " "
}

/* controladores de obtencion de datos mediante manejo de DOM */

var submitForm = document.querySelector("#formPostulantes");
submitForm.addEventListener('submit', function(){
    arrayPostulante.push(document.querySelector("#nombre").value);
    arrayPostulante.push(document.querySelector("#telefono").value);
    arrayPostulante.push(document.querySelector("#mail").value);
    arrayPostulante.push(document.querySelector("#carrera").value);
    arrayPostulante.push(document.querySelector("#semestre").value);
    arrayPostulante.push(document.querySelector("#skills").value);
    arrayPostulante.push(document.querySelector("#aboutYou").value);

    console.log(arrayPostulante);
    
    postulante.nombre = arrayPostulante[0];
    postulante.telefono = arrayPostulante[1];
    postulante.email = arrayPostulante[2];
    postulante.carrera = arrayPostulante[3];
    postulante.semestre = arrayPostulante[4];
    postulante.skills = arrayPostulante[5];
    postulante.aboutYou = arrayPostulante[6];

    console.log(postulante);

    arrayPostulante = [];

    console.log(arrayPostulante);

})

