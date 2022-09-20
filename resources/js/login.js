'use strict'
let nombre 
let puntos
document.addEventListener('DOMContentLoaded', async () => {
    //Salas JSON
    const usuarios = await fetchData('../data/usuarios.json')
    const btnIniciar = document.querySelector('.btnIniciar')
    const inputUsuario = document.querySelector('.usuario')
    const inputContraseña = document.querySelector('.contraseña')
    btnIniciar.addEventListener('click', () => {
        let login = false
        for (let usuario in usuarios) {
            if (usuarios[usuario]['correo'] === inputUsuario.value) {
                if (usuarios[usuario]['contraseña'] === inputContraseña.value) {
                    login = true
                    nombre = usuarios[usuario]['nombre'] 
                    puntos = usuarios[usuario]['puntos']
                }
            }
        }
        if (login) {
            window.open("../views/vista_usuario.html")
        } else {
            alert('Error en autentificar')
        }
    })
    
})

export function getNombre(){
    return nombre
}

async function fetchData(url) {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error('Error')
    }
    return await response.json()
}

