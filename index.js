//----------------------------------------ARRAYS--------------------------------------//

const peliculas = [{id: 1, nombre: "superman", horario: "17:00 hs"},
                   {id: 2, nombre: "batman", horario: "18:00 hs"},
                   {id: 3, nombre: "spiderman", horario: "19:00 hs"},
                   {id: 4, nombre: "hulk", horario: "20:00 hs"},
                   {id: 5, nombre: "ironman", horario: "21:00 hs"}]

const precios = [{formato: "2D", precio: 400},
                 {formato: "3D", precio: 500},
                 {formato: "4D", precio: 600}]
               
//----------------------------------------ARRAYS--------------------------------------//

//------------------------------------FUNCIONES-----------------------------------------//

function cartelera() {
    alert ("Peliculas disponibles: \n Superman \n Batman \n Hombre araña \n Hulk \n Iron man")
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
function spiderman() {
    let spiderman = prompt ("Pelicula: Spiderman:\nSeleccione en que formato quiere ver su pelicula:\n1: 2D (400$)\n2: 3D (500$)\n3: 4D (600$)")
        if (spiderman == 1) {
            let dosde = prompt ("Pelicula: Spiderman. Formato: 2D.\nSeleccione establecimiento:\n1: Moron\n2: Moreno\n3: Padua")
            if (dosde == 1) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: Spiderman. Formato: 2D. Establecimiento: Moron\nSon 400$$ \n!!Que disfrute de su pelicula¡¡")
            } else if (dosde == 2) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: Spiderman. Formato: 2D. Establecimiento: Moreno\nSon 400$$ \n!!Que disfrute de su pelicula¡¡")
            } else if (dosde == 3) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: Spiderman. Formato: 2D. Establecimiento: Padua\nSon 400$$ \n!!Que disfrute de su pelicula¡¡")
            }
        } else if (spiderman == 2) {
            let tresde = prompt ("Pelicula: spiderman. Formato: 3D.\nSeleccione establecimiento:\n1: Moron\n2: Moreno\n3: Padua")
            if (tresde == 1) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: Spiderman. Formato: 3D. Establecimiento: Moron\nSon 500$$ \n!!Que disfrute de su pelicula¡¡")
            } else if (tresde == 2) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: Spiderman. Formato: 3D. Establecimiento: Moreno\nSon 500$$ \n!!Que disfrute de su pelicula¡¡")
            } else if (tresde == 3) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: Spiderman. Formato: 3D. Establecimiento: Padua\nSon 500$$ \n!!Que disfrute de su pelicula¡¡")
            }
        } else if (spiderman == 3) {
            let cuatrode = prompt ("Pelicula: spiderman. Formato: 4D.\nSeleccione establecimiento:\n1: Moron\n2: Moreno\n3: Padua")
            if (cuatrode == 1) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: Spiderman. Formato: 4D. Establecimiento: Moron\nSon 600$$ \n!!Que disfrute de su pelicula¡¡")
            } else if (cuatrode == 2) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: Spiderman. Formato: 4D. Establecimiento: Moreno\nSon 600$$ \n!!Que disfrute de su pelicula¡¡")
            } else if (cuatrode == 3) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: Spiderman. Formato: 4D. Establecimiento: Padua\nSon 600$$ \n!!Que disfrute de su pelicula¡¡")
            }
        }
}
function hulk() {
    let hulk = prompt ("Pelicula: hulk:\nSeleccione en que formato quiere ver su pelicula:\n1: 2D (400$)\n2: 3D (500$)\n3: 4D (600$)")
        if (hulk == 1) {
            let dosde = prompt ("Pelicula: hulk. Formato: 2D.\nSeleccione establecimiento:\n1: Moron\n2: Moreno\n3: Padua")
            if (dosde == 1) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: hulk. Formato: 2D. Establecimiento: Moron\nSon 400$$ \n!!Que disfrute de su pelicula¡¡")
            } else if (dosde == 2) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: hulk. Formato: 2D. Establecimiento: Moreno\nSon 400$$ \n!!Que disfrute de su pelicula¡¡")
            } else if (dosde == 3) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: hulk. Formato: 2D. Establecimiento: Padua\nSon 400$$ \n!!Que disfrute de su pelicula¡¡")
            }
        } else if (hulk == 2) {
            let tresde = prompt ("Pelicula: hulk. Formato: 3D.\nSeleccione establecimiento:\n1: Moron\n2: Moreno\n3: Padua")
            if (tresde == 1) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: hulk. Formato: 3D. Establecimiento: Moron\nSon 500$$ \n!!Que disfrute de su pelicula¡¡")
            } else if (tresde == 2) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: hulk. Formato: 3D. Establecimiento: Moreno\nSon 500$$ \n!!Que disfrute de su pelicula¡¡")
            } else if (tresde == 3) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: hulk. Formato: 3D. Establecimiento: Padua\nSon 500$$ \n!!Que disfrute de su pelicula¡¡")
            }
        } else if (hulk == 3) {
            let cuatrode = prompt ("Pelicula: hulk. Formato: 4D.\nSeleccione establecimiento:\n1: Moron\n2: Moreno\n3: Padua")
            if (cuatrode == 1) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: hulk. Formato: 4D. Establecimiento: Moron\nSon 600$$ \n!!Que disfrute de su pelicula¡¡")
            } else if (cuatrode == 2) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: hulk. Formato: 4D. Establecimiento: Moreno\nSon 600$$ \n!!Que disfrute de su pelicula¡¡")
            } else if (cuatrode == 3) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: hulk. Formato: 4D. Establecimiento: Padua\nSon 600$$ \n!!Que disfrute de su pelicula¡¡")
            }
        }
}
function ironman() {
    let ironman = prompt ("Pelicula: ironman:\nSeleccione en que formato quiere ver su pelicula:\n1: 2D (400$)\n2: 3D (500$)\n3: 4D (600$)")
        if (ironman == 1) {
            let dosde = prompt ("Pelicula: ironman. Formato: 2D.\nSeleccione establecimiento:\n1: Moron\n2: Moreno\n3: Padua")
            if (dosde == 1) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: ironman. Formato: 2D. Establecimiento: Moron\nSon 400$$ \n!!Que disfrute de su pelicula¡¡")
            } else if (dosde == 2) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: ironman. Formato: 2D. Establecimiento: Moreno\nSon 400$$ \n!!Que disfrute de su pelicula¡¡")
            } else if (dosde == 3) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: ironman. Formato: 2D. Establecimiento: Padua\nSon 400$$ \n!!Que disfrute de su pelicula¡¡")
            }
        } else if (ironman == 2) {
            let tresde = prompt ("Pelicula: ironman. Formato: 3D.\nSeleccione establecimiento:\n1: Moron\n2: Moreno\n3: Padua")
            if (tresde == 1) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: ironman. Formato: 3D. Establecimiento: Moron\nSon 500$$ \n!!Que disfrute de su pelicula¡¡")
            } else if (tresde == 2) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: ironman. Formato: 3D. Establecimiento: Moreno\nSon 500$$ \n!!Que disfrute de su pelicula¡¡")
            } else if (tresde == 3) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: ironman. Formato: 3D. Establecimiento: Padua\nSon 500$$ \n!!Que disfrute de su pelicula¡¡")
            }
        } else if (ironman == 3) {
            let cuatrode = prompt ("Pelicula: ironman. Formato: 4D.\nSeleccione establecimiento:\n1: Moron\n2: Moreno\n3: Padua")
            if (cuatrode == 1) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: ironman. Formato: 4D. Establecimiento: Moron\nSon 600$$ \n!!Que disfrute de su pelicula¡¡")
            } else if (cuatrode == 2) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: ironman. Formato: 4D. Establecimiento: Moreno\nSon 600$$ \n!!Que disfrute de su pelicula¡¡")
            } else if (cuatrode == 3) {
                alert ("Felicidades usted termino el proceso de la compra de su entrada..\nPelicula: ironman. Formato: 4D. Establecimiento: Padua\nSon 600$$ \n!!Que disfrute de su pelicula¡¡")
            }
        }
}

//------------------------------------FUNCIONES-----------------------------------------//

let opcion = prompt ("Cines showcase, su lugar en el mundo. \n Seleccione una opcion: \n 1: Cartelera \n 2: Entradas \n 3: Contacto \n 4: Preguntas frecuentes \n 5: Mi cuenta \n 6: Buscar peliculas \n 0: Salir")
do {
if (opcion == 1) {
    cartelera();
    break
} else if (opcion == 2) {

    let entradas = prompt ("Venta de entradas\nSeleccione su pelicula:\n1: Superman\n2: Batman\n3: Spiderman\n4: Hulk\n5: Ironman")
    if (entradas == 1) {
        superman();
    } else if (entradas == 2) {
        batman();
    } else if (entradas == 3) {
        spiderman();
    } else if (entradas == 4){
        hulk();
    } else if (entradas == 5){
        ironman();
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
alert("La pelicula " + resultado[0].nombre + " esta en cartelera, el horario es: a las " + resultado[0].horario);
}

} while (opcion != 0);



