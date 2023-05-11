// console.log(clasificacion.standings[0].table)
// console.log(clasificacion.standings[0].table[0].position)
// console.log(clasificacion.standings[0].table[0].team.name)
// console.log(clasificacion.standings[0].table[0].won)
// console.log(clasificacion.standings[0].table[0].draw)
// console.log(clasificacion.standings[0].table[0].lost)
// console.log(clasificacion.standings[0].table[0].goalsFor)
// console.log(clasificacion.standings[0].table[0].goalsAgainst)
// console.log(clasificacion.standings[0].table[0].goalDifference)
// console.log(clasificacion.standings[0].table[0].points)

// let clasicLiga = clasificacion.standings[0].table

// console.log(clasificacion.standings[0].table[0])
// datos(clasicLiga)
// function datos(clasic){

// for (let i = 0; i < clasic.length; i++) {
// let posicion = clasic[i].position
// console.log(posicion)
// let nombre = clasic[i].team.name
// console.log(nombre) 
// let ganados = clasic[i].won
// console.log(ganados)
// let empates = clasic[i].draw
// console.log(empates)
// let perdidos = clasic[i].lost
// console.log(perdidos)
// let aFavor = clasic[i].goalsFor
// console.log(aFavor)
// let enContra = clasic[i].goalsAgainst
// console.log(enContra)
// let diferencia = clasic[i].goalDifference
// console.log(diferencia)
// let puntos = clasic[i].points
// console.log(puntos)
// }
// }

// --------------------------------------------------------------------------------------------------------------------------------



console.log(clasificacion.standings[0].table[0])

let clasicTable = clasificacion.standings[0].table  

// -----> ESTO ES LA RUTA QUE LLEVARÁ LA FUNCIÓN!!!

createTable(clasicTable)
// ESTA ES LA FUNCIÓN QUE CONTENDRÁ LA RUTA.

function createTable(estadisticas){
    // "ESTADISTICAS" ESTA VACÍO SE SITUA EN EL ARRAY DEL FOR LOOP, Y ES COMO UN ENLACE A LA FUNCIÓN QUE LLEVA LA RUTA".
    // ES UN DATO VACÍO, QUE OCUPA EL LUGAR DE UN DATO REAL.

    // AHORA HAY QUE ENLAZAR EL CUERPO DE LA TABLA DEL HTML CREANDO LA VARIABLE, DENTRO IRÁ LA INFORMACÍON REQUERIDA (ESTO CREARÁ LA TABLA):
    let cuerpoTabla = document.getElementById("ctable")

    // AHORA ABRIREMOS EL BUCLE Y AÑADIMOS LA INFORMACIÓN, este será el bucle principal:
    for (let i = 0; i < estadisticas.length; i++) {
    //  ahora crearemos las filas con el nombre del comando del html:
    let fila = document.createElement("tr")

    // ahora empezamos a crear variables por cada dato pedido (variable es = "LET"), esta info a su vez despues rellena las celdas de cada fila:

    let posicion = estadisticas[i].position
    let nombre = estadisticas[i].team.name
    let ganados = estadisticas[i].won
    let empates = estadisticas[i].draw
    let perdidos = estadisticas[i].lost
    let aFavor = estadisticas[i].goalsFor
    let enContra = estadisticas[i].goalsAgainst
    let diferencia = estadisticas[i].goalDifference
    let puntos = estadisticas[i].points

    // CREAMOS UN ARRAY DE CADA DATO(FILA OBTENIDA), PARA CREAR LAS CELDAS
    let datosPartidos = [posicion,nombre,ganados,empates,perdidos,aFavor,enContra,diferencia,puntos]

    // AHORA HAY QUE CREAR UN BUCLE FOR DENTRO DEL PRINCIPAL, SOBRE ESTA ÚLTIMA ARRAY CREADA(datosPartidos)
    for (let j = 0; j < datosPartidos.length; j++) {
    //  CREAMOS AHORA LAS COLUMNAS CON EL SIGUIENTE COMANDO:
    let columna = document.createElement("td")

    // AHORA USAREMOS UN COMANDO DE JS PARA PEGAR ELEMENTOS (APPEND),
    // SELECCIONAMOS EL ELEMENTO DONDE QUEREMOS QUE SE PEGUE+APPEND+LO QUE QUIERO PEGAR.
    columna.append(datosPartidos[j])
    // YA TENEMOS LAS CELDAS CREADAS CON LA INFO.

    // AHORA LAS CELDAS LAS AÑADIMOS A LAS FILAS:
    fila.append(columna)


    //   AHORA SALIMOS FUERA DE ESTE SEGUNDO BUCLE EN EL QUE HEMOS RELLENADO LAS CELDAS Y LAS FILAS, PARA QUE EN EL PRINCIPAL
    // METAMOS ESTAS CELDAS Y FILAS AL CUERPO DE LA TABLA QUE ES EL PRIMER BUCLE!!!
        
        
    }


     cuerpoTabla.append(fila)
    //  CON ESTO YA HABRÍAMOS ACABADO, HAY QUE ENTENDER QUE EL PRIMER BUCLE LLEVA EL CUERPO Y LA INFO, Y CON EL SEGUNDO LO QUE HACEMOS
    // ES CREAR LOS ELEMENTOS INTERNOS Y COLOCARLOS O PEGARLOS UNO A UNO, PARA LUEGO FUERA PEGARLO AL PRIMERO.


        
        
    }


}




    






