"use strict"
// 1. Comenzamos activando el modo estricto para detectar errores con mayor facilidad.
// var ya no se usa. let = variable. const = no cambia su valor o una constante
const nombreCurso = "FullStack II";
const nombreEstudiante = "Sebastián Barros Gallardo";

// 2. Ahora veremos un arreglo: una estructura que almacena varios elementos.
const productos = [
    {   
        id : 1,
        nombre : "Teclado Mecánico",
        categoria : "Perifericos",
        precio : 49990,
        stock: 8
    },
    {   
        id : 2,
        nombre : "Mouse",
        categoria : "Perifericos",
        precio : 29990,
        stock: 4
    },
    {   
        id : 3,
        nombre : "Monitor",
        categoria : "Monitores",
        precio : 149990,
        stock: 5
    },
    {   
        id : 4,
        nombre : "Audifonos Gamer",
        categoria : "Accesorios",
        precio : 49990,
        stock: 3
    },
];

// 3. Hasta ahora tenemos datos, pero todavía no estamos interactuando con el HTML.
// querySelector nos permite buscar un elemento mediante su identificador.

const saludo = document.querySelector("#saludo");
const mensaje = document.querySelector("#mensaje");
const listaProductos = document.querySelector("#listaProductos");
const cantidadProductos = document.querySelector("#cantidadProductos");
const totalStock = document.querySelector("#totalStock");
const promedioPrecios = document.querySelector("#promedioPrecios");
const buscador = document.querySelector("#buscador");
const filtroStock = document.querySelector("#filtroStock");
const ordenPrecio = document.querySelector("#ordenPrecio");
const sinResultados = document.querySelector("#sinResultados");
const estado = document.querySelector("#estado");
const btnTema = document.querySelector("#btnTema");
const btnAgregar = document.querySelector("#btnAgregar");

// 4. Una vez seleccionado un elemento, JavaScript puede modificarlo.
saludo.textContent = `Hola, ${nombreEstudiante}`;
mensaje.textContent = `Catálogo desarrollado en ${nombreCurso}`;

// 5. Crearemos una función para evitar repetir el formato de los precios.
function formatearPrecio(precio){
    return precio.toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP",
        maximumFractionDigits: 0
    })
}

// 6. Esta función utiliza if para tomar decisiones según el stock.
function obtenerStock(stock){
    if(stock === 0){
        return "Sin stock";
    }
    if(stock < 5){
        return `Últimas unidades ${stock}`;
    }
    return `Disponible ${stock}`
}

// 7. Ahora procesaremos el arreglo según las opciones del usuario.
function obtenerProductosVisibles(){
    const texto = buscador.value.trim().toLowerCase();

    // Filtrar el arreglo con los productos que coinciden
    let resultado = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(texto)||
        producto.categoria.toLowerCase().includes(texto)
    );

    // Filtros segun la opcion
    if(filtroStock.value === "disponible"){
        resultado = resultado.filter(producto =>
            producto.stock > 0
        );
    }

    if(filtroStock.value === "bajo"){
        resultado = resultado.filter(producto =>
            producto.stock > 0 && producto.stock <= 5
        );
    }

    // Sort: ordena productos comparando sus precios
    if(ordenPrecio.value === "menor"){
        resultado.sort((a,b) => a.precio - b.precio)
    }

    if(ordenPrecio.value === "mayor"){
        resultado.sort((a,b) => b.precio - a.precio)
    }
    return resultado;
}

// 8. En esta función veremos cómo JavaScript puede crear HTML.
function crearTarjeta(producto){
    const tarjeta = document.createElement("article")
    const claseStock = producto.stock <= 5 ? "stock-bajo" : "";
    tarjeta.classList.add("producto");
    tarjeta.innerHTML = `
        <h3>${producto.nombre}<h3>
        <p>${producto.categoria}<p>
        <p class="precio">${formatearPrecio(producto.precio)}<p>
        <p class="${claseStock}">${obtenerStock(producto.stock)}<p>
    `;
    return tarjeta;
}

// 9. La siguiente función mostrará todos los productos en la página.
function renderizarProductos(){
    listaProductos.innerHTML = "";
    const productosVisibles = obtenerProductosVisibles();
    productosVisibles.forEach(producto =>{
        const tarjeta = crearTarjeta(producto);
        listaProductos.appendChild(tarjeta);
    });

    // Si el arreglo está vacio "Sin resultados"
    sinResultados.hidden = productosVisibles.length > 0;
}

// 10. JavaScript también puede realizar cálculos con los datos.
function actualizarEstadisticas(){
    const stock = productos.reduce(
        (total, producto) => total + producto.stock, 0
    );

    const sumaPrecios = productos.reduce(
        (total, producto) => total + producto.precio, 0
    );

    const promedio = sumaPrecios / productos.length;
    cantidadProductos.textContent = productos.length;
    totalStock.textContent = stock;
    promedioPrecios.textContent = formatearPrecio(promedio);
}

// 11. Agrupamos las actualizaciones en una función reutilizable.
function actualizarInterfaz(){
    renderizarProductos();
    actualizarEstadisticas();
}

// 12. Los eventos permiten que la página responda a las acciones del usuario.
buscador.addEventListener("input", renderizarProductos);
filtroStock.addEventListener("change", renderizarProductos);
ordenPrecio.addEventListener("change", renderizarProductos)

// 13. Ahora usamos el evento click para cambiar el tema de la página.
btnTema.addEventListener("click", () => {
    document.body.classList.toggle("oscuro");
    const oscuro = document.body.classList.contains("oscuro");
    btnTema.textContent = oscuro ? "Tema claro" : "Tema oscuro";
    estado.textContent = oscuro ? "Tema oscuro activado" : "Tema claro activado";
});

// 14. Este segundo evento demuestra que también podemos modificar el arreglo.
btnAgregar.addEventListener("click", () => {
    const nuevoProducto = {
        id: productos.length + 1,
        nombre: "Audifonos USB",
        categoria: "Audio",
        precio: 39990,
        stock: 6
    };
    productos.push(nuevoProducto);
    actualizarInterfaz();
    estado.textContent = `${nuevoProducto.nombre} fue agregado`;
    btnAgregar.disabled = true;
    btnAgregar.textContent = "Producto agregado";
});

// 15. Si no llamamos esta función, el catálogo comenzaría vacío.
actualizarInterfaz();
console.log("JavaScript cargado correctamente");