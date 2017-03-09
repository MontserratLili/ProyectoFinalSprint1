var estudiantes = [];
var estudiante = {};//creamos un objeto en el que almacenaremos los nombres completos,
                    //la hice global para que las demas funciones pudieran acceder

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    return estudiantes;
}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado

    var nombres = prompt("Nombre de la Estudiante:"); // en esta variable almacenamos lo ingresado por el usuario
    var porcentajeTecnico = prompt("Porcentaje Técnico:"); // en esta variable almacenamos lo ingresado por el usuario
    var porcentajeHse = prompt("Porcentaje Habilidades Socio-Emocionales:"); // en esta variable almacenamos lo ingresado por el usuario
      estudiante.nombres = nombres.toLowerCase();  //almacenamos los nombres
      estudiante.porcentajeTecnico = porcentajeTecnico.toLowerCase(); //almacenamos el porcentaje técnico
      estudiante.porcentajeHse = porcentajeHse.toLowerCase(); //almacenamos el porcentaje de habilidades socio-emocionales
      estudiantes.push(estudiante);//almacenamos los nombres con sus puntajes del objeto en el arreglo
    return estudiante;
}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombres + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.porcentajeTecnico + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.porcentajeHse + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes

    for(var i = 0; i<estudiantes.length; i++){
    return ((i + 1) + " . " + estudiante.nombres + " " + estudiante.porcentajeTecnico + " " + estudiante.porcentajeHse +" </br>");
    }
}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
    nombre = nombre.tolowerCase();
    for(var i = 0; i<estudiantes.length; i++){
      if(nombre === estudiantes.nombres[i]){
      return agregarEstudiante();
      }
      else{
      alert("La persona no es alumna.");
      }
    }
}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
    estudiantes = estudiante.porcentajeTecnico.sort();
    var ordenados = estudiantes.length-1;
    return ordenados;
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    estudiantes = estudiante.porcentajeHse.sort();
    var ordenados = estudiantes.length-1;
    return ordenados;
}
