//ficha
class Ficha {
    constructor( r, c) {
      
      this.radio = r ;
      this.color = c;
    }

    dibujar(x,y,contexto) {
        contexto.beginPath();
        contexto.arc(x, y, this.radio, 0, 2 * Math.PI);
       
        contexto.stroke();
        contexto.closePath();
        contexto.closePath();
    }

    mover(dx, dy) {
      this.x += dx;
      this.y += dy;
    }
}





  const canvas = document.getElementById('tablero');
  const contexto = canvas.getContext('2d');

  const filas = 7;
  const columnas = 7;

  const anchoCelda = (canvas.width/2) / columnas;
  const altoCelda = (canvas.height/2) / filas;

  let radioCirculo = 22; // Radio del círculo
  let separacion = 5;

  function dibujarTablero() {
    for (let fila = 0; fila < filas; fila++) {
      for (let columna = 0; columna < columnas; columna++) {
        if(fila!==0){
          contexto.fillStyle = "#FFFFFF"; // Color de celda blanca
          contexto.fillRect(columna * anchoCelda, fila * altoCelda, anchoCelda, altoCelda);
  
        // Dibuja un borde para resaltar las celdas
          contexto.strokeStyle = "#000000";
          contexto.strokeRect(columna * anchoCelda, fila * altoCelda, anchoCelda, altoCelda);
  
        // Dibuja un círculo en la celda (por ejemplo, en la fila 2, columna 3)
       
          contexto.beginPath();
          contexto.arc(
            columna * anchoCelda + anchoCelda / 2,
            fila * altoCelda + altoCelda / 2,
            radioCirculo,
            0,
            2 * Math.PI
          );
          contexto.strokeStyle = "#FF0000"; // Color del círculo (rojo en este caso)
          contexto.stroke();
          contexto.closePath();
       
        }
        
      }
    }
    
  }
      
  
  dibujarTablero();
  canvas.addEventListener('click',function(e){
    const x = e.clientX - canvas.getBoundingClientRect().left;
    const y = e.clientY - canvas.getBoundingClientRect().top;
    miFicha.dibujar(x,y,contexto)
});

  // Crear una instancia Ficha
  const miFicha = new Ficha(25, 'blue');

  // Dibuja la Ficha en el lienzo
 

  // Mover el cuadrado cuando se presionan las teclas de flecha
  /*window.addEventListener('keydown', (event) => {
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
    miFicha.dibujar(contexto);

    

    */


    

      