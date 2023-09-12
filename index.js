const API_URL = "https://rickandmortyapi.com/api/character";
const cont = document.getElementById('cont')

async function buscar(busqueda) {
    try {
        const response = await fetch(`${API_URL}/${busqueda}`);
        const data = await response.json();
        mostrar(data); 
    } catch (e) {
        console.log(e);
    }
}

function mostrar(data) {
    cont.innerHTML = ""; 

    if (typeof data.name !== 'undefined') {
            cont.innerHTML = 
                `<div class="card">
                    <img src="${data.image}" alt="${data.name}">
                    <p>${data.name}</p>
                </div>`;
    } else {
        mostrarError("Personaje no encontrado");
    }
}

function mostrarError(mensaje) {
    cont.innerHTML = `<p>${mensaje}</p>`;
}

document.getElementById('btnBuscar').addEventListener("click", ()=>{
    let busqueda = inputBuscar.value;
    buscar(busqueda);

});