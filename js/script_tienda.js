const items = {
    "remeras": 2500,
    "buzos": 4500,
    "posters": 500,
    "plushies": 1500,
    "videojuegos": 15000
};

class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    getSubtotal() {
        return this.precio * this.cantidad;
    }
}
const articulo1 = new Producto("Remeras", 2500, 1)
const articulo2 = new Producto("buzos", 4500, 1)
const articulo3 = new Producto("posters", 500, 1)
const articulo4 = new Producto("plushies", 1500, 1)
const articulo5 = new Producto("videojuegos", 15000, 1)

const productos = []
productos.push(articulo1, articulo2, articulo3, articulo4, articulo5)
console.log(productos)

function pedirNombre() {
    let nombre = prompt(`Registrate para ingresar a la tienda`)
    let regex = /^[a-zA-Z]+$/;
    while (!regex.test(nombre)) {
        nombre = prompt("Sólo podes usar letras", "");
    }
    return nombre
}
function saludar(nombre) {
    alert(`¡Hola ${nombre}! Ya podes navegar en la tienda`)
    menu()
}
nombre = pedirNombre()
saludar(nombre)

function calcularIva(subtotal) {
    return subtotal * 0.21;
}

function verProductos() {
    let comprar = prompt(`¿Qué querés comprar?
Remeras
Buzos
Posters
Plushies
Videojuegos`).toLowerCase()
    let total = 0
    let resultados = [];
    while (true) {
        switch (comprar) {
            case "remeras": 
            case "buzos":
            case "posters":
            case "plushies":
            case "videojuegos":
                let costo = items[comprar];
                let cantidad = parseInt(prompt(`¿Cúantas ${comprar} querés? El precio de es de $${costo}`));
                let regex = /^[0-9]+$/;
                while (!regex.test(cantidad)) {
                    cantidad = prompt("Sólo podes usar números", "");
                }
                let subtotal = cantidad * costo;
                total += subtotal + calcularIva(subtotal);
                resultados.push({
                    nombre: comprar,
                    cantidad: cantidad,
                    costo: costo,
                    subtotal: subtotal
                });
                break;
            default:
                alert("Solo podes elegir entre remeras, buzos, posters, plushies y videojuegos")
        }
        let atras = prompt("¿Querés elegir otro producto? (S/N)");
        if (atras === "S") {
            comprar = prompt(`¿Qué querés comprar?
        Remeras
        Buzos
        Posters
        Plushies
        Videojuegos`).toLowerCase();
        } else if (atras === "N") {
            break;
        }
        else {
            alert("Opción erronea");
        }
    }
    printRecibo(resultados);

function printRecibo(resultados) {
    let recibo = `
    Recibo
    --------------------------------
    Nombre del cliente: ${nombre}
    Total: $${calcularTotal(resultados) + calcularIva(calcularTotal(resultados))}
    --------------------------------
    Detalle de la compra `;
    for (let resultado of resultados) {
        recibo += `
    ${resultado.nombre} x ${resultado.cantidad} = $${resultado.subtotal}
    `;
    }
    alert(recibo)
    pagar();
}

function calcularTotal(resultados) {
    let total = 0;
    for (let resultado of resultados) {
        total += resultado.subtotal;
    }
    return total;
}

function pagar() {
    let costoTotal = calcularTotal(resultados);
    let metodoPago = prompt("¿Cómo querés pagar? (efectivo/tarjeta) ").toLowerCase();
    if (metodoPago === "efectivo") {
        let efectivo = parseInt(prompt("¿Con cuanto abonas? "));
        let regex = /^[0-9]+$/;
        while (!regex.test(efectivo)) {
            efectivo = prompt("Sólo podes usar numeros", "");
        }
        if (efectivo >= costoTotal) {
            let diferencia = efectivo - costoTotal;
            alert("Tu vuelto es de $ " + diferencia);
            alert("¡Gracias por tu compra!");
        } else {
            alert("¡Uh! No te alcanza para pagar el total de tu compra.");
            pagar();
        }
    } else if (metodoPago === "tarjeta") {
        let numeroTarjeta = prompt("Ingresá los 16 números de tu tarjeta: ");
        let numeroTarjetaRegex = /^[0-9]{16}$/;
        while (!numeroTarjetaRegex.test(numeroTarjeta)) {
            numeroTarjeta = prompt("El número de tarjeta debe tener 16 dígitos.", "");
        }
        let codigoSeguridad = prompt("Ingresá los 3 números de seguridad de tu tarjeta: ");
        let codigoSeguridadRegex = /^[0-9]{3}$/;
        while (!codigoSeguridadRegex.test(codigoSeguridad)) {
            codigoSeguridad = prompt("El código de seguridad debe tener 3 dígitos.", "");
        }
        let fechaVencimiento = prompt("Ingresá la fecha de vencimiento de tu tarjeta (MM/AA): ");
        let fechaVencimientoRegex = /^[0-9]{2}/;
        while (!fechaVencimientoRegex.test(fechaVencimiento)) {
            fechaVencimiento = prompt("La fecha de vencimiento de tu tarjeta debe estar en el siguiente formato MM/AA.", "");
        }
        if (numeroTarjeta && codigoSeguridad && fechaVencimiento) {
            alert("Tu tarjeta fue aceptada. ¡Gracias por tu compra!");
        } else {
            alert("Los datos cargados son incorrectos");
            pagar();
        }
    } else {
        alert("Método de pago erróneo.");
        pagar();
    }
}
}

function listaDeseos() {
    let nombreDeseado = prompt("Ingresá el producto que te gustaría que agreguemos a la tienda");
    let precioDeseado = parseInt(prompt("Ingresá el precio en el que lo viste"));
    let regex = /^[0-9]+$/;
    while (!regex.test(precioDeseado)) {
        precioDeseado = prompt("Sólo podes usar números", "");
    }
    const articuloNuevo = {
        id: productos.length + 1,
        nombre: nombreDeseado,
        precio: precioDeseado,
    };
    productos.push(articuloNuevo);

    let continuar = prompt("¿Desea agregar otro producto? (S/N)").toLowerCase();
    if (continuar === "n") {
        mostrarLista();
    } else {
        listaDeseos();
    }
}

function mostrarLista() {
    let listado = "";
    for (let i = 0; i < productos.length; i++) {
        listado += `Producto ${i + 1}: ${productos[i].nombre} - ${productos[i].precio}\n`;
    }
    alert(listado);
}

function verCatalogo(array) {
    for (let articulo of array) {
        alert(articulo.nombre, articulo.precio)
    }
}

        function buscarProducto(array) {
            let productoBusqueda = prompt("¿Cuánto querés gastar?")
            let busqueda = array.filter(
                (articulo) => {return articulo.precio <= productoBusqueda}
            )
            if (busqueda.length == 0) {
                alert(`El monto ${productoBusqueda} no te alcanza para comprar en la tienda`)
            } else {
                verCatalogo(busqueda)
            }
        }

        function menu() {
            let salirMenu = false
            do {
                let opcionIngresada = parseInt(prompt(`¿Qué queres hacer?
    1 - Ver productos
    2 - Lista de deseos
    3 - ¿Qué puedo comprar? Filtra por precio
    0 - Salir del menú`))
                switch (opcionIngresada) {
                    case 1:
                        verProductos()
                        break
                    case 2:
                        listaDeseos()
                        break
                    case 3:
                        buscarProducto(productos)
                        break
                    case 0:
                        alert(`¡Gracias por visitar la tienda!`)
                        salirMenu = true
                        break
                    default:
                        alert("Opción no válida, ingrese alguna presente en el menu")
                        break
                }
            } while (!salirMenu)
        }