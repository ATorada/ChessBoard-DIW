/**
 * Función que se encarga de generar un tablero de ajedrez
 */

function generarTablero() {

   //Obtiene el div que contiene el tablero
   var tablero = document.getElementById('tablero');
   //Genera un tablero de 8x8
   for (var i = 0; i < 8; i++) {
      for (var j = 0; j < 8; j++) {
         //Por cada celda se crea un div y una imagen
         let celda = document.createElement("div");
         let img = document.createElement("img");

         //En caso de encontrarse en las en la primera o última cargará las figuras principales
         if (i == 0 || i == 7) {
            switch (j) {
               case 0:
               case 7:
                  img.src = "img/torre_" + i + ".svg";
                  celda.appendChild(img);
                  break;
               case 1:
               case 6:
                  img.src = "img/caballo_" + i + ".svg";
                  celda.appendChild(img);
                  break;
               case 2:
               case 5:
                  img.src = "img/alfil_" + i + ".svg";
                  celda.appendChild(img);
                  break;
               case 3:
                  img.src = "img/dama_" + i + ".svg";
                  celda.appendChild(img);
                  break;
               case 4:
                  img.src = "img/rey_" + i + ".svg";
                  celda.appendChild(img);
                  break;
               default:
                  break;
            }
         }

         //En caso de encontrarse en la segunda o penúltima fila cargará los peones
         if (i == 1 || i == 6) {
            img.src = "img/peon_" + i + ".svg";
            celda.appendChild(img);
         }

         //A cada celda se le añadirá un id con su posición
         celda.id = i + "-" + j;

         //A cada celda se le añadirán las siguientes clases: "celda" y "celda[Color]"
         celda.className = 'celda celdaNegra';

         if ((i + j) % 2 == 0) {
            celda.className = 'celda celdaBlanca';
         }

         tablero.appendChild(celda);
      }
   }

}