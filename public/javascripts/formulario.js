const validarDatos = () => {
  //La unica diferencia del regex del js con el del middleware es:
  //Al coindicir con un caracter que no es solicitado, mandara true en la condición y mandara el error
  //en el middleware tiene que coincidir con la regex para que pueda solicitar de manera correcta la peticion
  emailRegex =
    /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
  const alert = document.querySelector("#alert");
  let postulante = {
    nombre: document.querySelector("#nombre").value.trim(),
    telefono: document.querySelector("#telefono").value.trim(),
    email: document.querySelector("#email").value.trim(),
    carrera: document.querySelector("#carrera").value.trim(),
    semestre: document.querySelector("#semestre").value.trim(),
    skills: document.querySelector("#skills").value.trim(),
    aboutYou: document.querySelector("#aboutYou").value.trim(),
  };

  for (const obj in postulante) {
    if (postulante[obj] === "") {
      alert.innerHTML =
        '<div class="alert alert-primary d-flex align-items-center" role="alert">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">' +
        '<path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>' +
        "</svg>" +
        "<div>" +
        "Faltan campos por llenar" +
        "</div>" +
        "</div>";
      window.scroll(0, 0);
      return false;
    }
    if (
      (obj === "nombre" &&
        (/\d/.test(postulante[obj]) || postulante[obj].length < 3)) ||
      (obj === "telefono" &&
        (isNaN(postulante[obj]) || postulante[obj].length < 10))
    ) {
      alert.innerHTML =
        '<div class="alert alert-primary d-flex align-items-center" role="alert">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">' +
        '<path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>' +
        "</svg>" +
        "<div>" +
        "Verifique sus datos, uno o más no son válidos" +
        "</div>" +
        "</div>";
      window.scroll(0, 0);
      return false;
    }
  }

  if (!emailRegex.test(postulante.email)) {
    alert.innerHTML =
      '<div class="alert alert-primary d-flex align-items-center" role="alert">' +
      '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">' +
      '<path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>' +
      "</svg>" +
      "<div>" +
      "Introduzca un email válido" +
      "</div>" +
      "</div>";
    window.scroll(0, 0);
    return false;
  }

  return true;
};
