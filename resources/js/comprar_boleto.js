document.addEventListener('DOMContentLoaded', async() => {
    //Salas JSON
    const salasDeCine = await fetchData('../data/sillas.json')
    document.querySelector('#inputSillasDisponibles').value = salasDeCine['sala_1']['sillas']
    document.querySelector('#')
})

async function fetchData(url) {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error('Error')
    }
    return await response.json()
}