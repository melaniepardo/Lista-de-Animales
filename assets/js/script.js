// class Propietario {
//     constructor(nombrePropietario, direccion, telefono) {
//         this._nombrePropietario = nombrePropietario
//         this._direccion = direccion
//         this._telefono = telefono
//     }
//     get nombrePropietario() {
//         return this._nombrePropietario
//     }
//     set nombrePropietario(nombrePropietario) {
//         this._nombrePropietario = nombrePropietario
//     }

//     get direccion() {
//         return this._direccion
//     }
//     set direccion(direccion) {
//         this._direccion = direccion
//     }

//     get telefono() {
//         return this._telefono
//     }

//     set telefono(telefono) {
//         this._telefono = telefono
//     }


//     datosPropietario() {
//         return `El nombre del dueño es: ${this.nombrePropietario}.El domicilio es: ${this.direccion} y el número de contacto es: ${this.telefono}`
//     }
// }

// class Animal extends Propietario {
//     constructor(nombrePropietario, direccion, telefono, tipo) {
//         super(nombrePropietario, direccion, telefono)
//         this._tipo = tipo
//     }
//     get tipo() {
//         return `El tipo de animal es un: ${this.tipo}`
//     }
//     set tipo(tipo) {
//         this._tipo = tipo
//     }

// }

// class Mascota extends Animal {
//     constructor(nombrePropietario, direccion, telefono, tipo, nombre, enfermedad) {
//         super(nombrePropietario, direccion, telefono, tipo)
//         this._nombre = nombre
//         this._enfermedad = enfermedad
//     }
//     get nombre() {
//         return this._nombre
//     }
//     set nombre(nombre) {
//         this._nombre = nombre
//     }

//     get enfermedad() {
//         return this._enfermedad
//     }
//     set enfermedad(enfermedad) {
//         this._enfermedad = enfermedad
//     }
// }

// const registrando = (e) => {
//     e.preventDefault()

//     const nombrePropietario = document.querySelector('#propietario').value
//     const telefono = document.querySelector('#telefono').value
//     const direccion = document.querySelector('#direccion').value
//     const tipo = document.querySelector('#tipo').value
//     const nombre = document.querySelector('#nombre').value
//     const enfermedad = document.querySelector('#enfermedad').value
//     const resultado = document.querySelector('#resultado')
//     const mascota = new Mascota(nombrePropietario, domicilio, telefono, tipo, nombre, enfermedad)
//     console.log(mascota)


//     if (tipo === 'perro') {
//         const perro = new Mascota(nombrePropietario, direccion, telefono, tipo, nombre, enfermedad)
//         return perro
//     } else if (tipo === 'gato') {
//         const gato = new Mascota(nombrePropietario, direccion, telefono, tipo, nombre, enfermedad)
//         return gato
//     } else if (tipo === 'conejo') {
//         const conejo = new Mascota(nombrePropietario, direccion, telefono, tipo, nombre, enfermedad) // En la creacion de constantes se realizo con letra minuscula en lugar de mayuscula para seguir la convencion de manera correcta aprobado por el profe Claudio
//         return conejo
//     } else {
//         return false
//     }
// }

// // funcion que limpia los datos del doom
// const limpiar = () => {
//     document.querySelector('#nombrePropietario').value = ""
//     document.querySelector('#telefono').value = ""
//     document.querySelector('#direccion').value = ""
//     document.querySelector('#nombre').value = ""
//     document.querySelector('#enfermedad').value = ""
// }

// const imprimir = event => {
//     event.preventDefault()
//     const datosDeAtencion = registrando() // Ejecutamos la funcion para asignar el objeto a una nueva variable
//     if (datosDeAtencion) {
//         const selectorDeLista = document.querySelector('#resultado > ul')
//         selectorDeLista.innerHTML = `<li>${datosDeAtencion.datosPropietario()}</li> <li>${datosDeAtencion.tipo}, mientras que el nombre de la mascota es: ${datosDeAtencion.nombre} y la enfermedad es: ${datosDeAtencion.enfermedad}.</li>`
//         limpiezaDeLabels()
//     }
// }

// // Funciones finalizadas


// // // const registrar = document.querySelector('#form')
// // registrar.addEventListener('submit', registrando)


// // funcion que limpia los datos del doom
// // const limpiarDom = item => {
// //     item.reset()
// // }

// // // funcion que muestra los datos ingrasados en listas bajo el formulario
// // const muestraDatos = animalito => {
// //     const a = document.createElement('li')
// //     const b = document.createElement('li')
// //     a.innerHTML = `${animalito.datosPropietario()}`
// //     b.innerHTML = `El tipo de animal es un: ${animalito.tipo
// //         }, mientras que el nombre de la mascota es: ${animalito.nombre
// //         } y la enfermedad es: ${animalito.enfermedad}`
// //     resultado.appendChild(a)
// //     resultado.appendChild(b)
// // }

// //     limpiarDom(form)

// // form.addEventListener("submit", registrando)




class Propietario {
    constructor(nombre, direccion, telefono) {
        this.nombre = nombre
        this.direccion = direccion
        this.telefono = telefono
    }
    datosPropietario() {
        return `El nombre del dueño es ${this.nombre}. El domicilio es: ${this.direccion} y el numero telefonico de contacto es: ${this.telefono}`
    }
}

class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono)
        this._tipo = tipo
    }
    get tipo() {
        return `El tipo de animal es un: ${this._tipo}`
    }
}

class Mascota extends Animal {
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
        super(nombre, direccion, telefono, tipo)
        this._nombreMascota = nombreMascota
        this._enfermedad = enfermedad
    }
    get nombreMascota() {
        return this._nombreMascota
    }
    set nombreMascota(nombreMascota) {
        this._nombreMascota = nombreMascota
    }
    get enfermedad() {
        return this._enfermedad
    }
    set enfermedad(enfermedad) {
        this._enfermedad = enfermedad
    }
}
// ----------------------- Creacion de clases finalizada -----------------------

const crearDatosConsulta = () => {
    const nombre = document.querySelector('#propietario').value
    const telefono = document.querySelector('#telefono').value
    const direccion = document.querySelector('#direccion').value
    const tipo = document.querySelector('#tipo').value
    const nombreMascota = document.querySelector('#nombreMascota').value
    const enfermedad = document.querySelector('#enfermedad').value

    // Asignacion de variables para luego crear el objeto

    if (tipo === 'perro') {
        const perro = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) // En la creacion de constantes se realizo con letra minuscula en lugar de mayuscula para seguir la convencion de manera correcta aprobado por el profe Claudio
        return perro
    } else if (tipo === 'gato') {
        const gato = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) // En la creacion de constantes se realizo con letra minuscula en lugar de mayuscula para seguir la convencion de manera correcta aprobado por el profe Claudio
        return gato
    } else if (tipo === 'conejo') {
        const conejo = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) // En la creacion de constantes se realizo con letra minuscula en lugar de mayuscula para seguir la convencion de manera correcta aprobado por el profe Claudio
        return conejo
    } else {
        return false
    }

    // Realmente solo lo usamos para instanciar el objeto con un nombre en especifico, sin embargo podria ser resumido en una sola linea y generaria el mismo resultado
}

const limpiezaDeLabels = () => {
    document.querySelector('#propietario').value = ""
    document.querySelector('#telefono').value = ""
    document.querySelector('#direccion').value = ""
    document.querySelector('#nombreMascota').value = ""
    document.querySelector('#enfermedad').value = ""
}

const imprimirDatos = event => {
    event.preventDefault()
    const datosDeAtencion = crearDatosConsulta() // Ejecutamos la funcion para asignar el objeto a una nueva variable
    if (datosDeAtencion) {
        const selectorDeLista = document.querySelector('#resultado > ul')
        selectorDeLista.innerHTML = `<li>${datosDeAtencion.datosPropietario()}</li> <li>${datosDeAtencion.tipo}, mientras que el nombre de la mascota es: ${datosDeAtencion.nombreMascota} y la enfermedad es: ${datosDeAtencion.enfermedad}.</li>`
        limpiezaDeLabels()
    }
}
// ----------------------- Funciones finalizadas -----------------------
const selectorAgregar = document.querySelector('#formulario')
selectorAgregar.addEventListener('submit', imprimirDatos)