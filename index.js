//-----------------ARRAYS DE OBJETOS---------------//

const peliculas = [{id: 1, nombre: "superman", lugar: "padua", horario: "17:00 hs"},
                   {id: 2, nombre: "batman", lugar: "haedo", horario: "18:00 hs"},
                   {id: 3, nombre: "hombre araña", lugar: "merlo", horario: "19:00 hs"},
                   {id: 4, nombre: "hulk", lugar: "once", horario: "20:00 hs"},
                   {id: 5, nombre: "iron man", lugar: "moron", horario: "21:00 hs"}]

//-----------------ARRAYS---------------//

function peliculas1() {
    alert ("Peliculas: \n Superman \n Batman \n Hombre araña \n Hulk \n Iron man")
}
function gaturro() {
    let gaturro = prompt ("Pelicula: Gaturro:\nSeleccione en que formato quiere ver su pelicula:\n1: 2D (400$)\n2: 3D (500$)\n3: 4D (600$)")
        if (gaturro == 1) {
            let dosde = prompt ("Pelicula: Gaturro. Formato: 2D.\nSeleccione establecimiento:\n1: Moron\n2: Moreno\n3: Padua")
            if (dosde == 1) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: Gaturro. Formato: 2D. Establecimiento: Moron\nSon 400$$ \n!!Que disfrute de su pelicula¡¡")
            } else if (dosde == 2) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: Gaturro. Formato: 2D. Establecimiento: Moreno\nSon 400$$ \n!!Que disfrute de su pelicula¡¡")
            } else if (dosde == 3) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: Gaturro. Formato: 2D. Establecimiento: Padua\nSon 400$$ \n!!Que disfrute de su pelicula¡¡")
            }
        } else if (gaturro == 2) {
            let tresde = prompt ("Pelicula: Gaturro. Formato: 3D.\nSeleccione establecimiento:\n1: Moron\n2: Moreno\n3: Padua")
            if (tresde == 1) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: Gaturro. Formato: 3D. Establecimiento: Moron\nSon 500$$ \n!!Que disfrute de su pelicula¡¡")
            } else if (tresde == 2) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: Gaturro. Formato: 3D. Establecimiento: Moreno\nSon 500$$ \n!!Que disfrute de su pelicula¡¡")
            } else if (tresde == 3) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: Gaturro. Formato: 3D. Establecimiento: Padua\nSon 500$$ \n!!Que disfrute de su pelicula¡¡")
            }
        } else if (gaturro == 3) {
            let cuatrode = prompt ("Pelicula: Gaturro. Formato: 4D.\nSeleccione establecimiento:\n1: Moron\n2: Moreno\n3: Padua")
            if (cuatrode == 1) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: Gaturro. Formato: 4D. Establecimiento: Moron\nSon 600$$ \n!!Que disfrute de su pelicula¡¡")
            } else if (cuatrode == 2) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: Gaturro. Formato: 4D. Establecimiento: Moreno\nSon 600$$ \n!!Que disfrute de su pelicula¡¡")
            } else if (cuatrode == 3) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: Gaturro. Formato: 4D. Establecimiento: Padua\nSon 600$$ \n!!Que disfrute de su pelicula¡¡")
            }
        }
}
function superman() {
    let Superman = prompt ("Pelicula: Superman:\nSeleccione en que formato quiere ver su pelicula:\n1: 2D (400$)\n2: 3D (500$)\n3: 4D (600$)")
        if (Superman == 1) {
            let dosde = prompt ("Pelicula: Superman. Formato: 2D.\nSeleccione establecimiento:\n1: Moron\n2: Moreno\n3: Padua")
            if (dosde == 1) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: Superman. Formato: 2D. Establecimiento: Moron\nSon 400$$ \n!!Que disfrute de su pelicula¡¡")
            } else if (dosde == 2) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: Superman. Formato: 2D. Establecimiento: Moreno\nSon 400$$ \n!!Que disfrute de su pelicula¡¡")
            } else if (dosde == 3) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: Superman. Formato: 2D. Establecimiento: Padua\nSon 400$$ \n!!Que disfrute de su pelicula¡¡")
            }
        } else if (Superman == 2) {
            let tresde = prompt ("Pelicula: Superman. Formato: 3D.\nSeleccione establecimiento:\n1: Moron\n2: Moreno\n3: Padua")
            if (tresde == 1) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: Superman. Formato: 3D. Establecimiento: Moron\nSon 500$$ \n!!Que disfrute de su pelicula¡¡")
            } else if (tresde == 2) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: Superman. Formato: 3D. Establecimiento: Moreno\nSon 500$$ \n!!Que disfrute de su pelicula¡¡")
            } else if (tresde == 3) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: Superman. Formato: 3D. Establecimiento: Padua\nSon 500$$ \n!!Que disfrute de su pelicula¡¡")
            }
        } else if (Superman == 3) {
            let cuatrode = prompt ("Pelicula: Superman. Formato: 4D.\nSeleccione establecimiento:\n1: Moron\n2: Moreno\n3: Padua")
            if (cuatrode == 1) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: Superman. Formato: 4D. Establecimiento: Moron\nSon 600$$ \n!!Que disfrute de su pelicula¡¡")
            } else if (cuatrode == 2) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: Superman. Formato: 4D. Establecimiento: Moreno\nSon 600$$ \n!!Que disfrute de su pelicula¡¡")
            } else if (cuatrode == 3) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: Superman. Formato: 4D. Establecimiento: Padua\nSon 600$$ \n!!Que disfrute de su pelicula¡¡")
            }
        }
}
function batman() {
    let Batman = prompt ("Pelicula: Batman:\nSeleccione en que formato quiere ver su pelicula:\n1: 2D (400$)\n2: 3D (500$)\n3: 4D (600$)")
        if (Batman == 1) {
            let dosde = prompt ("Pelicula: Batman. Formato: 2D.\nSeleccione establecimiento:\n1: Moron\n2: Moreno\n3: Padua")
            if (dosde == 1) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: Batman. Formato: 2D. Establecimiento: Moron\nSon 400$$ \n!!Que disfrute de su pelicula¡¡")
            } else if (dosde == 2) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: Batman. Formato: 2D. Establecimiento: Moreno\nSon 400$$ \n!!Que disfrute de su pelicula¡¡")
            } else if (dosde == 3) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: Batman. Formato: 2D. Establecimiento: Padua\nSon 400$$ \n!!Que disfrute de su pelicula¡¡")
            }
        } else if (Batman == 2) {
            let tresde = prompt ("Pelicula: Batman. Formato: 3D.\nSeleccione establecimiento:\n1: Moron\n2: Moreno\n3: Padua")
            if (tresde == 1) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: Batman. Formato: 3D. Establecimiento: Moron\nSon 500$$ \n!!Que disfrute de su pelicula¡¡")
            } else if (tresde == 2) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: Batman. Formato: 3D. Establecimiento: Moreno\nSon 500$$ \n!!Que disfrute de su pelicula¡¡")
            } else if (tresde == 3) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: Batman. Formato: 3D. Establecimiento: Padua\nSon 500$$ \n!!Que disfrute de su pelicula¡¡")
            }
        } else if (Batman == 3) {
            let cuatrode = prompt ("Pelicula: Batman. Formato: 4D.\nSeleccione establecimiento:\n1: Moron\n2: Moreno\n3: Padua")
            if (cuatrode == 1) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: Batman. Formato: 4D. Establecimiento: Moron\nSon 600$$ \n!!Que disfrute de su pelicula¡¡")
            } else if (cuatrode == 2) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: Batman. Formato: 4D. Establecimiento: Moreno\nSon 600$$ \n!!Que disfrute de su pelicula¡¡")
            } else if (cuatrode == 3) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: Batman. Formato: 4D. Establecimiento: Padua\nSon 600$$ \n!!Que disfrute de su pelicula¡¡")
            }
        }
}

let opcion = prompt ("Cines showcase, su lugar en el mundo. \n Seleccione una opcion: \n 1: Cartelera \n 2: Entradas \n 3: Contacto \n 4: Preguntas frecuentes \n 5: Mi cuenta \n 6: Buscar peliculas \n 0: Salir")
do {
if (opcion == 1) {
    peliculas1();
    break
} else if (opcion == 2) {

    let entradas = prompt ("Venta de entradas\nSeleccione su pelicula:\n1: Superman\n2: Batman\n3: Hombre araña\n2: Hulk\n3: Iron man")
    if (entradas == 1) {
        gaturro();
    } else if (entradas == 2) {
        superman();
    } else if (entradas == 3) {
        batman();
    }
    break

} else if (opcion == 3) {

    alert("Esperamos tu consulta\n CINES SHOWCASE\n Email: info@gmail.com\n Instagram: @cineshowcase")
    break

} else if (opcion == 4) {

    alert("PREGUNTAS FRECUENTES\n + ¿Tengo reemvolso de mis entradas?\n + ¿Puedo cambiar el dia de día, cine, horario, localidades o película de las entradas que compré?\n + Me olvidé de comprar comidas ¿Puedo agregarlas a mi compra?")
    break

} else if (opcion == 5) {

    let correo = prompt ("Inicie secion con su cuenta y contraseña.\n Correo electronico:")
    let contrasenia = prompt ("Contraseña:")
    alert ("Bienvenido disfrute de su estancia aqui!!!\nSu correo electronico es :" + correo + "\nSu contraseña es: " + contrasenia)
    
    break

} else if (opcion == 6){

let buscar = prompt("Ingrese el nombre de la pelicula que desea buscar:\n0: Salir")
const resultado = peliculas.filter((el) => el.nombre.includes(buscar))
alert("La pelicula " + resultado[0].nombre + " esta en cartelera, el horario y el lugar de la funcion es: a las " + resultado[0].horario + ", en " + resultado[0].lugar);
}

} while (opcion != 0);












