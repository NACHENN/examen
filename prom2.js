
function validarNumero(n) {
    return new Promise((resolve, reject) => {

      if ( n > 5 ) {
        resolve("numero  aceptado"); 
       } else  {
        if ( n < 5)
        reject("numero rechazado");
      }

      });
  }
