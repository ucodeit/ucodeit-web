class Accordion {
    constructor(el) {
      // Almacena el elemento <details>
      this.el = el;
      //Almaceno el elemento <summary>
      this.summary = el.querySelector('summary');
      // Almaceno el elemento <div class="content"> 
      this.content = el.querySelector('.content');
  
      // Se almacena la animacion del objeto (Lo podemos cancelar si lo necesitamos)
      this.animation = null;
      //Almacena si el elento esta cerrado
      this.isClosing = false;
      // Almacena si el elemnto de desplego
      this.isExpanding = false;
      // Detecta si el usuario dio clic en el elemento <sumarry>
      this.summary.addEventListener('click',(e) => this.onClick(e));
    }
  
    onClick(e) {
      // Detener el comportamiento por defecto del navegador
      e.preventDefault();
      // Añade un desbordamiento en el <details> para evitar que el contenido se desborde
      this.el.style.overflow = 'hidden';
      // Checa si el elemento es cerrado
      if (this.isClosing || !this.el.open) {
        this.open();
      // Checa si el elemento ya esta abierto
      } else if (this.isExpanding || this.el.open) {
        this.shrink();
      }
    }
  
    shrink() {
      // Establecer que el elemento se va a cerrar
      this.isClosing = true;
      
      // Almacena la altura actual del elemento
      const startHeight = `${this.el.offsetHeight}px`;
      // Calculamos la altura del <sumamry>
      const endHeight = `${this.summary.offsetHeight}px`;
      
      // Si ya hay una animacion corriendo
      if (this.animation) {
        // Cancela la animacion
        this.animation.cancel();
      }
      
      // inicia la animación WAAPI 
      this.animation = this.el.animate({
        // Se establece los keyframes desde el startHeight al endHeight
        height: [startHeight, endHeight]
      }, {
        duration: 400,
        easing: 'ease-out'
      });
      
      //Cuando la animacion se complete, llamamos a onAnimationFinish()
      this.animation.onfinish = () => this.onAnimationFinish(false);
      // Si la animacion es canselada, la variable isClosing debera ser falsa
      this.animation.oncancel = () => this.isClosing = false;
    }
  
    open() {
      // Se aplica la altura fija del elemento para mostrar el contenido
      this.el.style.height = `${this.el.offsetHeight}px`;
      // Forzamos el atributo [open] en el elemento <details>
      this.el.open = true;
      // Esperamos por el seguiente frame para llamar a la funcion call
      window.requestAnimationFrame(() => this.expand());
    }
  
    expand() {
      // Se coloca que el elemento se va a expandir
      this.isExpanding = true;
      //Obtenemos la altura fija del elemento
      const startHeight = `${this.el.offsetHeight}px`;
      //Calculamos la altura del open del elemento (altura del sumarry + <content>)
      const endHeight = `${this.summary.offsetHeight + this.content.offsetHeight}px`;
      
       // Si ya hay una animacion corriendo
       if (this.animation) {
        // Cancela la animacion
        this.animation.cancel();
      }
      
      // inicia la animación WAAPI 
      this.animation = this.el.animate({
        // Se establece los keyframes desde el startHeight al endHeight
        height: [startHeight, endHeight]
      }, {
        duration: 400,
        easing: 'ease-out'
      });
       //Cuando la animacion se complete, llamamos a onAnimationFinish()
       this.animation.onfinish = () => this.onAnimationFinish(true);
       // Si la animacion es canselada, la variable isExpanding debera ser falsa
       this.animation.oncancel = () => this.isExpanding = false;
    }
  
    onAnimationFinish(open) {
      // Set the open attribute based on the parameter
      // Se coloca el valor del atributo basado en el parametro
      this.el.open = open;
      // Se limpia la animacion alamcenada
      this.animation = null;
      // Se reinicia isClosing y isExpanding
      this.isClosing = false;
      this.isExpanding = false;
      //Se elimina el hidden overflow y el fixed height
      this.el.style.height = this.el.style.overflow = '';
    }
  }
  
  document.querySelectorAll('details').forEach((el) => {
    new Accordion(el);
  });