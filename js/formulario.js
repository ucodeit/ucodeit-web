

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

/* controladores de obtencion de datos mediante manejo de DOM lo que se esta haciendo en la primera version es 
obtener los datos dentro de un array, y esos datos pasarselos a un json, posteriormente se borra el array para que solo se
conserve el json, de esta manera, si es necesario se puede dividir el programa en varios scripts para que no se vea la info*/
/* para que este archivo tenga un mejor orden, debe de estar dividido en funciones */
var submitForm = document.querySelector("#formPostulantes");
submitForm.addEventListener('submit', function(){

    obtencionDatos();

})

/* aqui separarremos  */
function obtencionDatos()
{
    /*En el futuro mejorar la validación para que esta pueda aceptar almenos el + por aquello de las LADAS*/
    if(isNaN(document.querySelector('#nombre').value) && !isNaN(document.querySelector('#telefono').value))
    {
        arrayPostulante.push(document.querySelector("#nombre").value);
        arrayPostulante.push(document.querySelector("#telefono").value);
        arrayPostulante.push(document.querySelector("#mail").value);
        arrayPostulante.push(document.querySelector("#carrera").value);
        arrayPostulante.push(document.querySelector("#semestre").value);
        arrayPostulante.push(document.querySelector("#skills").value);
        arrayPostulante.push(document.querySelector("#aboutYou").value);

        if( arrayPostulante[0].trim() != "" &&
            arrayPostulante[1].trim() != "" &&
            arrayPostulante[2].trim() != "" &&
            arrayPostulante[5].trim() != "" &&
            arrayPostulante[6].trim() != "" )
        {
            /* console.log(arrayPostulante); esta linea es para comprobacion obtenciocn de datos*/
            guardadoDatos();
            /* console.log(postulante); esta linea es para comprobacion de traspaso de datos*/
            arrayPostulante = [];
        }
        else
        {
            alert('Favor de Introducir los datos necesarios');
            arrayPostulante = [];
        }
    }
    else
    {
        alert('La información introducida en el formulario es invalida');
    }
    
}

function guardadoDatos()
{
    postulante.nombre = arrayPostulante[0].trim();
    postulante.telefono = arrayPostulante[1].trim();
    postulante.email = arrayPostulante[2].trim();
    postulante.carrera = arrayPostulante[3].trim();
    postulante.semestre = arrayPostulante[4].trim();
    postulante.skills = arrayPostulante[5].trim();
    postulante.aboutYou = arrayPostulante[6].trim();
}