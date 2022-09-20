document.addEventListener('DOMContentLoaded', async() => {
    //Salas JSON
    const peliculas = await fetchData('../data/peliculas.json')
    const peliculasEstreno = await fetchData('../data/estrenos.json')
    const divCards = document.querySelector('.container-cards')
    const divCardsEstrenos = document.querySelector('.container-estrenos')
    
    peliculas.map( (valor) => {
        let div = document.createElement('div')
        div.className="col-3 shadow card m-4" 
        div.style=""
        div.innerHTML= ` <div class="">
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

    peliculasEstreno.map( (valor, i) => {
        let div = document.createElement('div')
        if(i==0){
            div.className = "carousel-item active"
        }else{
            div.className = "carousel-item"
        }
        
        div.innerHTML= `<img src="../img/${valor.img}" class="d-block w-100" alt="publicidad">` 
        divCardsEstrenos.appendChild(div)               
    })
})

async function fetchData(url) {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error('Error')
    }
    return await response.json()
}