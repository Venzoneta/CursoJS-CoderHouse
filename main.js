// Declaro el array de los productos que tengo
const productosArray = [
  {
    id: 1,
    nombre: "Creatina",
    precio: 18000,
  },
  {
    id: 2,
    nombre: "Proteina",
    precio: 32000,
  },
  {
    id: 3,
    nombre: "Pre-work",
    precio: 13000,
  },
  {
    id: 4,
    nombre: "Quemador de Grasa",
    precio: 10000,
  },
];

const carrito = [];

//Funcion poara agregar productos
function addProducto() {
  let aviso = "Productos disponibles:\n";
  for (let i = 0; i < productosArray.length; i++) {
    const producto = productosArray[i];
    aviso +=
      "" +
      producto.id +
      " " +
      producto.nombre +
      " - Precio: $" +
      producto.precio +
      "\n";
  }
  aviso += "\nIngrese el numero del producto que deseas comprar:";

  // Pido al usuario el numero del producto que quiere
  let idSeleccionado = parseInt(prompt(aviso));

  // Buscar el producto con el numero seleccionado
  const productoSeleccionado = productosArray.find(
    (producto) => producto.id === idSeleccionado
  );

  if (productoSeleccionado) {
    carrito.push(productoSeleccionado);
    alert("Agregaste al carrito: " + productoSeleccionado.nombre);
    console.log("Agregaste correctamente :" + productoSeleccionado.nombre);
  } else {
    alert("Producto no encontrado.");
    console.log("No encontramos el producto.");
  }
}

// Función para mostrar el carrito
function verCarrito() {
  if (carrito.length === 0) {
    alert("Tu carrito esta vacio");
    console.log("Tu carrito esta vacio");
    return;
  }

  let aviso = "Tus productos en el carrito:\n";
  for (let i = 0; i < carrito.length; i++) {
    const producto = carrito[i];
    aviso += producto.nombre + " - Precio: $" + producto.precio + "\n";
  }
  alert(aviso);
  console.log(aviso);
}

function borrarProducto() {
  alert("Estamos en mantenimiento, disculpe las molestias!!!");
  console.log("Funcion no disponible momentaneamente");
}

function Salir() {
  alert("Saliendo de Bullpower Shop...");
  console.log("Saliendo de Bullpower Shop...");
}

//Muestro el inicio de la tienda.

let menu = parseInt(
  prompt(
    "Bienvenidos a Bullpower Shop. \n Por favor, elija una opcion: \n 1-Comprar \n 2-Ver Carrito \n 3-Eliminar Producto \n 4-Salir"
  )
);

while (menu !== 4) {
  switch (menu) {
    case 1:
      addProducto();
      break;
    case 2:
      verCarrito();
      break;
    case 3:
      borrarProducto();
      break;
    case 4:
      Salir();
      break;
    default:
      alert("Opcion incorrecta, intentalo nuevamente.");
      break;
      1;
  }
  menu = parseInt(
    prompt(
      "Bienvenidos a Bullpower Shop. \n Por favor, elija una opcion: \n 1-Comprar \n 2-Ver Carrito \n 3-Eliminar Producto \n 4-Salir"
    )
  );
}

alert("Muchas gracias por comprar en Bullpower");
