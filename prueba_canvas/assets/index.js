class Ficha {
    constructor( r, c) {
      
      this.radio = r ;
      this.color = c;
    }

    dibujar(x,y,contexto) {
        
        contexto.arc(x, y, this.radio, 0, 2 * Math.PI);
       
        contexto.stroke();
    }

    mover(dx, dy) {
      this.x += dx;
      this.y += dy;
    }
}
  const canvas = document.getElementById('miCanvas');
  const contexto = canvas.getContext('2d');

  // Crear una instancia Ficha
  const miFicha = new Ficha(100, 'blue');

  // Dibuja la Ficha en el lienzo
 

  // Mover el cuadrado cuando se presionan las teclas de flecha
 /* window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      miFicha.mover(10, 0);
    } else if (event.key === 'ArrowLeft') {
        miFicha.mover(-10, 0);
    } else if (event.key === 'ArrowUp') {
        miFicha.mover(0, -10);
    } else if (event.key === 'ArrowDown') {
        miFicha.mover(0, 10);
    }
    contexto.clearCircle(0, 0, canvas.width, canvas.height);
    miFicha.dibujar(contexto);*/

    canvas.addEventListener('click',function(e){
        const x = e.clientX - canvas.getBoundingClientRect().left;
        const y = e.clientY - canvas.getBoundingClientRect().top;
        miFicha.dibujar(x,y,contexto)
    });
  
   