// dcoches es parametro y datosCoches es el argumento (dato real)



let datosCoches = coches.misFavoritos
let datos2 = coches2.misFavoritos
// console.log(coches.misFavoritos[0])
datos(datosCoches)
console.log("esto es una linea para diferenciar las llamadas")
datos(datos2)
// para llamar o para que se ejecute una función tengo que poner el nombre de la función.


function datos(dCoches){

for (let i = 0; i < dCoches.length; i++) {
    let modelos = dCoches[i].modelo
    console.log(modelos)
    let descripcion = dCoches[i].descripcion
    console.log(descripcion)
    let color = dCoches[i].color
    console.log(color)
    let plazas = dCoches[i].plazas
    console.log(plazas)
    let cilindrada = dCoches[i].cilindrada
    console.log(cilindrada)
    let marca = dCoches[i].informacion.marca
    console.log(marca)
    let anio = dCoches[i].informacion.anio
    console.log(anio)
    
}


}

// console.log(coches.misFavoritos[0])
// let datos=coches.misFavoritos[0]

// verCoches()
function verCoches(){
    for (let i = 0; i < datosCoches.length; i++) {
            let modelos = datosCoches[i].modelo
            console.log(modelos)
            let descripcion = datosCoches[i].descripcion
            console.log(descripcion)
            let color = datosCoches[i].color
            console.log(color)
            let plazas = datosCoches[i].plazas
            console.log(plazas)
            let cilindrada = datosCoches[i].cilindrada
            console.log(cilindrada)
            let marca = datosCoches[i].informacion.marca
            console.log(marca)
            let anio = datosCoches[i].informacion.anio
            console.log(anio)
            
        }

}


