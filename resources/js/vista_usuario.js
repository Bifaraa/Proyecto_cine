'use strict'

document.addEventListener('DOMContentLoaded', async () => {
    const peliculas = await fetchData('../data/peliculas.json')
    const peliculasEstreno = await fetchData('../data/estrenos.json')
    const usuarios = await fetchData('../data/usuarios.json')
    const divCards = document.querySelector('.container-cards')
    const divCardsEstrenos = document.querySelector('.container-estrenos')
    const nomUsuario = document.querySelector('.nomUsuario')
    const puntosUsuario = document.querySelector('.puntosUsuario')
    for (let usuario in usuarios) {
        nomUsuario.textContent = usuarios[usuario]['nombre']
        puntosUsuario.textContent = usuarios[usuario]['puntos']
    }

    peliculas.map((valor) => {
        let div = document.createElement('div')
        div.className = "col-3 shadow card m-4"
        div.style = ""
        div.innerHTML = ` <div class="">
                                    <img src="../img/${valor.img}" class="card-img card-img-top" alt="thor cartel">
                                    <div class="card-body">
                                        <p class="card-text">2022 ‧ ${valor.genero} ‧ ${valor.duracion}</p>
                                        <p class="card-text">2022 ${valor.duracion}</p>
                                        <hr class="card-text">
                                        <p class="card-text card-descripcion" style="display:none;">${valor.descripcion}</p>
                                    </div>
                                </div>
            `
        divCards.appendChild(div)
    })

    peliculasEstreno.map((valor, i) => {
        let div = document.createElement('div')
        if (i == 0) {
            div.className = "carousel-item active"
        } else {
            div.className = "carousel-item"
        }

        div.innerHTML = `<img src="../img/${valor.img}" class="d-block w-100" alt="publicidad">`
        divCardsEstrenos.appendChild(div)
    })

    let btnGuardarEdit = document.getElementById('btnGuardar')
    let editNom = document.querySelector('.editNom')
    editNom.addEventListener('click', () =>{
        document.querySelector('.edicion').style.display = "block"
        document.getElementById('labelEdit').textContent = "Edite su nombre"

    })
    let editNum = document.querySelector('.editNum')
    editNum.addEventListener('click', () => {
        document.querySelector('.edicion').style.display = "block"
        document.getElementById('labelEdit').textContent = "Nuevo número"
    })
    btnGuardarEdit.addEventListener('click', () => {
        document.querySelector('.edicion').style.display = "none"
        alert('Edito con exito su información')
    })
    let btneditContraseña = document.getElementById('btnEditContraseña')
    btneditContraseña.addEventListener('click', () =>{
        document.querySelector('.editContraseña').style.display ="block"
    })
    document.getElementById('btnGuardarContraseña').addEventListener('click', () => {
        document.querySelector('.editContraseña').style.display = "none"
        alert('Edito con exito su contraseña')
    })
    document.getElementById('cerrarSesion').addEventListener('click', () =>{
        window.open('../../index.html')
        window.close('./vista_usuario.html')
    })
    
})

async function fetchData(url) {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error('Error')
    }
    return await response.json()
}