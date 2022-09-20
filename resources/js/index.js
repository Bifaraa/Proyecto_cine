document.addEventListener('DOMContentLoaded', async() => {

    //Botones
    const btRegistrar = document.querySelector('.btnRegistrar')
    const btIniciar = document.querySelector('.btnIniciar')
    btRegistrar.addEventListener('click', irRegistro)
    btIniciar.addEventListener('click', irInicioSesion)

    //Cards
    const peliculas = await fetchData('resources/data/peliculas.json')
    const peliculasEstreno = await fetchData('resources/data/estrenos.json')
    const divCards = document.querySelector('.container-cards')
    const divCardsEstrenos = document.querySelector('.container-estrenos')
    
    peliculasEstreno.map( (valor) => {
        let div = document.createElement('div')
        div.className="col-3 shadow card m-4" 
        div.style=""
        div.innerHTML= ` <div class="">
                                <img src="./resources/img/${valor.img}" class="card-img card-img-top" alt="thor cartel">
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

    peliculas.map( (valor, i) => {
        let div = document.createElement('div')
        if(i==0){
            div.className = "carousel-item active"
        }else{
            div.className = "carousel-item"
        }
        
        div.innerHTML= `<img src="./resources/img/${valor.img}" class="d-block w-100" alt="publicidad">` 
        divCardsEstrenos.appendChild(div)               
    })

})

function irRegistro(){
    window.location.href = "resources/views/registro.html"
}

function irInicioSesion(){
    window.location.href = "resources/views/inicio.html"
}

async function fetchData(url) {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error(
            `${response.status} - ${response.statusText}, 
             al intentar acceder al recurso '${response.url}'`
        )
    }
    return await response.json()
}

