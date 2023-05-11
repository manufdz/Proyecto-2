// console.log(partidos.matches[0])
// console.log(partidos.matches[0].homeTeam.name)
// console.log(partidos.matches[0].awayTeam.name)
// console.log(partidos.matches[0].score.fullTime)
// console.log(partidos.matches[0].matchday)
// console.log(partidos.matches[0].utcDate)



// let partidosLiga = partidos.matches

// console.log(partidos.matches)
// // datos(partidos.matches)
// datos(partidosLiga)
// function datos(datosPartidos){

//     for (let i = 0; i < datosPartidos.length; i++) {
//         let equipoL = datosPartidos[i].homeTeam.name
//         console.log(equipoL,"LOCAL")
//         let equipoV = datosPartidos[i].awayTeam.name
//         console.log(equipoV,"VISITANTE")
//         let resultado = datosPartidos[i].score.fullTime
//         console.log(resultado)
//         let jornada = datosPartidos[i].matchday
//         console.log(jornada)
//         let fecha = datosPartidos[i].utcDate
//         console.log(fecha)


//     }




// }



// ---------------------------------------------------------------------------------------------------------------------------------------------

console.log(partidos.matches)

let tablaPartidos = partidos.matches
createTable(tablaPartidos)
// creamos la función con la ruta del let. funcion= createTable.

function createTable(datosPartidos) {

    // declaramos variable del cuerpo de la tabla del html, dentro irán los partidos.
    let cuerpoTabla = document.getElementById("tbody")
    cuerpoTabla.innerHTML = ""
    for (let i = 0; i < datosPartidos.length; i++) {
        // lo primero que hay que hacer es crear una fila por partido.
        // hay 380 partidos, tiene que haber 380 filas.
        let fila = document.createElement("tr")

        // buscamos los datos de los partidos que nos piden y los guardamos en variables.
        let equipoL = datosPartidos[i].homeTeam.name
        let resultado = datosPartidos[i].score.fullTime.homeTeam + "-" + datosPartidos[i].score.fullTime.awayTeam
        let equipoV = datosPartidos[i].awayTeam.name
        let jornada = datosPartidos[i].matchday
        let fecha = datosPartidos[i].utcDate
        // tenemos que crear una array de los datos obtenidos, ya que por cada dato de un partido
        // hay que crear una celda, que previamente adjuntaremos a la fila.
        let result = [equipoL, resultado, equipoV, jornada, fecha]

        // creamos un bucle for ANIDADO (dentro de otro), sobre la array de los datos (resultados, que hemos buscado).
        // se crea una celda por cada dato, en este caso son 5 datos, pues 5 celdas.
        // dará como resultado un total de 1900celdas x 380filas

        for (let j = 0; j < result.length; j++) {
            let columna = document.createElement("td")

            // en JavaScript tenemos un comando que se llama APPEND = (PEGAR).
            // seleccionamos el elemento donde queremos pegar + append + lo que quiero pegar.

            // en cuanto las celdas estan creadas, añadimos los datos en cada celda.
            columna.append(result[j])

            // añadimos las 5 celdas rellenadas con los datos en cada fila
            fila.append(columna)

        }

        // nos salimos del "nido" (este segundo bucle dentro del otro).y añadimos las filas con sus celdas rellenadas.
        // al body de la tabla del html.
        cuerpoTabla.append(fila)


    }


}

// CREAMOS NUEVA FUNCIÓN ENCARGADA DE FILTRAR LA TABLA POR NOMBRE DE EQUIPO.

// function filtrarEquipo(partidos) {
//     // *ahora declaramos lo que el usuario mete en el input(búsqueda)
//     let datoBusqueda = document.getElementById("busqueda").value
//     // *.value = es un metodo JS que me devuelve lo que se mete en el input.
//     // creamos una array vacia (se completará con cada búsqueda)
//     let partidosFiltrados = []

//     // hacemos el bucle for para recorrer la array de los partidos y devolverla con los que cumplen la condición.
//     for (let i = 0; i < partidos.length; i++) {
//         if (partidos[i].homeTeam.name.toLowerCase().includes(datoBusqueda.toLowerCase()) ||
//             partidos[i].awayTeam.name.toLowerCase().includes(datoBusqueda.toLowerCase())) {
//             partidosFiltrados.push(partidos[i])
//         }
//     }
//         // PASO1 DENTRO DE LA CONDICION
//         // *toLowerCase () - todos los nombtres de los equipos o de lo que sea los pone en minúscula y
//         // hace lo mismo que lo pongo yo pongo en el input.
//         // PASO 2
//         // *includes() - lo que escribes en el input tiene que estar en el nombre a buscar.
//         // PASO 3
//         // *partidosFiltrados.push(partidos[i]) - cualquier partido que cumpla la condición
//         // me lo va a añadir a la array partidosFiltrados.




//         createTable(partidosFiltrados)

// }










// // *fuera de la función de filtrado
// // declaramos el botón (botonBuscar), que será el encargado de ejecutar la función de filtrado.


// **2ª FORMA DE FILTRAR:

// = - quiere decir asignación / dar valor.
// == o === - comparaciones.
function filtrarEquipo(games) {
    let datoBusqueda = document.getElementById("busqueda").value
    //TENEMOS QUE DECLRAR LOS BOTONES: GANADOS,PERDIDOS,EMPATADOS Y PRÓXIMOS.
    // declaramos en una sola variable todos los bototones.

    let checkButton = document.querySelector("input[type=radio]:checked")
    console.log(checkButton)

    let arrayPfiltrados = games.filter((partidos) => {
        if (partidos.homeTeam.name.toLowerCase().includes(datoBusqueda.toLowerCase()) ||
            partidos.awayTeam.name.toLowerCase().includes(datoBusqueda.toLowerCase())) {
            return true // me coge el objeto y me lo añade a la array (arrayPfiltrados)
            //arrayPfiltrados.push(games[i])
        } else {
            return false // no coincide sigo con el siguiente objeto y no añado nada a la array.
        }
    })

    createTable(arrayPfiltrados) //esta array es la resultante de filtrar por nombre equipo.


    let filtroBotones = arrayPfiltrados.filter((botonResultado) => {
        if (checkButton.value === "ganados") {
            if ((botonResultado.homeTeam.name.toLowerCase().includes(datoBusqueda.toLowerCase()) && botonResultado.score.winner === "HOME_TEAM") ||
                (botonResultado.awayTeam.name.toLowerCase().includes(datoBusqueda.toLowerCase()) && botonResultado.score.winner === "AWAY_TEAM")
            ) {
                return true
            } else {
                return false
            }
        }

        if (checkButton.value === "perdidos") {
            if ((botonResultado.homeTeam.name.toLowerCase().includes(datoBusqueda.toLowerCase()) && botonResultado.score.winner === "AWAY_TEAM") ||
                (botonResultado.awayTeam.name.toLowerCase().includes(datoBusqueda.toLowerCase()) && botonResultado.score.winner === "HOME_TEAM")
            ) {
                return true
            } else {
                return false
            }
        }

        //partidos empatados y próximos.

        if (checkButton.value === "empatados" && botonResultado.score.winner === "DRAW") {
            return true;
        }


        if (checkButton.value === "proximos" && botonResultado.status === "SCHEDULED") {
            return true;
        }







    });
    createTable(filtroBotones)


}
let botonBuscar = document.getElementById("botonBuscar")
botonBuscar.addEventListener("click", () => {
    filtrarEquipo(partidos.matches)
})

let botonReset = document.getElementById("boton2");
botonReset.addEventListener("click", () => {
    // let buscador = document.getElementById("busqueda")
    // buscador.value=""
    document.getElementById("busqueda").value = ""
  let radioButton = document.getElementsByName("botones")
  console.log(radioButton)
  for (let index = 0; index < radioButton.length; index++) {
    if(radioButton[index].checked===true){
        radioButton[index].checked=false
    }
    
  }

    createTable(partidos.matches)
})

//* = le estoy dando ese valor
//* === lo estoy comparando 
