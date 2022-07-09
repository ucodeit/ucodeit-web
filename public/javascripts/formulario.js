/* variables de insercion de datos 
aqui primero voy a aobtener en un array vacio los datos del DOM ya que este array funcionara
como variable volatil */
var arrayPostulante = [];

/* posteriormente se traslada aun json para que se organice como string y con ese se trabaje a manera de objeto */
var postulante = {
  nombre: " ",
  telefono: " ",
  email: " ",
  carrera: " ",
  semestre: " ",
  skills: " ",
  aboutYou: " ",
};

/* controladores de obtencion de datos mediante manejo de DOM lo que se esta haciendo en la primera version es 
obtener los datos dentro de un array, y esos datos pasarselos a un json, posteriormente se borra el array para que solo se
conserve el json, de esta manera, si es necesario se puede dividir el programa en varios scripts para que no se vea la info*/
/* para que este archivo tenga un mejor orden, debe de estar dividido en funciones */
// var submitForm = document.querySelector("#formPostulantes");


let form = document.getElementById("formPostulantes");
if(form != null){
    form.addEventListener("submit", obtencionDatos);
    console.log("Ejemplo");
}

/* aqui separarremos  */
function obtencionDatos() {
  /*En el futuro mejorar la validación para que esta pueda aceptar almenos el + por aquello de las LADAS*/
  if (
    isNaN(document.querySelector("#nombre").value) &&
    !isNaN(document.querySelector("#telefono").value)
  ) {
    arrayPostulante.push(document.querySelector("#nombre").value);
    arrayPostulante.push(document.querySelector("#telefono").value);
    arrayPostulante.push(document.querySelector("#mail").value);
    arrayPostulante.push(document.querySelector("#carrera").value);
    arrayPostulante.push(document.querySelector("#semestre").value);
    arrayPostulante.push(document.querySelector("#skills").value);
    arrayPostulante.push(document.querySelector("#aboutYou").value);

    if (
      arrayPostulante[0].trim() != "" &&
      arrayPostulante[1].trim() != "" &&
      arrayPostulante[2].trim() != "" &&
      arrayPostulante[5].trim() != "" &&
      arrayPostulante[6].trim() != ""
    ) {
      /* console.log(arrayPostulante); esta linea es para comprobacion obtenciocn de datos*/
      guardadoDatos();
      /* console.log(postulante); esta linea es para comprobacion de traspaso de datos*/
      arrayPostulante = [];
    } else {
      alert("Favor de Introducir los datos necesarios");
      arrayPostulante = [];
    }
  } else {
    alert("La información introducida en el formulario es invalida");
  }
}

function guardadoDatos() {
  postulante.nombre = arrayPostulante[0].trim();
  postulante.telefono = arrayPostulante[1].trim();
  postulante.email = arrayPostulante[2].trim();
  postulante.carrera = arrayPostulante[3].trim();
  postulante.semestre = arrayPostulante[4].trim();
  postulante.skills = arrayPostulante[5].trim();
  postulante.aboutYou = arrayPostulante[6].trim();
}

//[> Este es una llamada a la api EmailJS, se espera que esta api pueda recibir los datos del formulario, sin embargo
//hay que comprobar si los recibe desde el form o desde el JSON */
//function enviarEmail(event) {
  //[> la funcion init permite establecer la conexion con las promesas de la appi, si no se usara esta funcion
    //solo hay que poner el User id del init como 4to parametro de la funcion send o send form */
    //console.log("Se esta ejecutando");
  //event.preventDefault();
  ////emailjs.init("Va0gnkrE16yx6ZTiH");
  //emailsjs.init("cxFoL33icVu_kmj0c")
  //obtencionDatos();

  //btnEnviar.value = "Enviando...";
  //[> estas variables son las que se necesitan para obtener el servicio de la cuenta y poder enviarlos a la funcion.
        //Sin embargo el servicio puede ser cambiado en el futuro si se establece un correo para ucodeit solo para poder usar
        //emailjs ya que ahorita utilizar mi correo personal como servicio intermedio*/
  //const serviceID = "service_v4il83b"
  //const templateID = "template_i0qalvf" 
  ////const serviceID = "service_8os59jx";
  ////const templateID = "template_nls1hzv";
  //[> a diferencia de sendForm este metodo permite el envio de mensaje con parametros provenientes de otro lugar
        //que no es el form directamente, de esta manera se supone el script funciona. */
  //emailjs.send(serviceID, templateID, postulante).then(
    //() => {
      //btnEnviar.value = "Enviar mensaje";
      //alert(
        //"Formulario enviado, Bienvenido tu mensaje sera respondido en un plazo de 72 horas"
      //);
      //[> console.log(emailjs); Este console. log es para encontrar si es que enserio recibe dichos parametros<]
    //},
    //(err) => {
      //btnEnviar.value = "Enviar mensaje";
      //alert(JSON.stringify(err));
    //}
  //);
//}
