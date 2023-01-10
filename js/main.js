// SWITCH
const btnSwitch = document.querySelector('#switch')

btnSwitch.addEventListener('click',()=>{
    document.body.classList.toggle('dark')
    btnSwitch.classList.toggle('active')
})
// CARRITO



// DOOM

function createSection(array, nombre){
    const contenedor = document.querySelector('#' + nombre)
    array.forEach(array =>{
    const card = document.createElement("div")
    card.className="card"
    // console.log(card)
    card.innerHTML=`
    <img src="${array.img}" alt="${array.descripcion}">
    <div class="descripcion">
        <h3>${array.descripcion}</h3>
        <h4>PRECIO: $${array.precio}</h4>
    </div>
    <div class="botones">
        <a href="#" class="boton primario boton-carrito" id=${array.id}>Comprar</a>
    </div>
    `
    contenedor.appendChild(card)
    
    
    });
    }
    
    
    createSection(accesorios, "accesorios")

    const añadirACarrito=()=>{
        const botonesCards=document.querySelectorAll(".boton-carrito")
        console.log(botonesCards)
    }
    añadirACarrito()