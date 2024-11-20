function crearPromesa() {
    return new Promise((resolve, reject) => {
      setTiempo(() => {
        resolve("Promesa resuelta");
      }, 2000);
    });
  }
  
  
  crearPromesa().then((mensaje) => {
    console.log(mensaje); 
  });
  