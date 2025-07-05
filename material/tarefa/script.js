const add = document.getElementById("adicionar")
const input = document.getElementById('input-tarefa')
const lst_t = document.getElementById("lista-tarefas")

add.addEventListener('click', () => {
    const texto = input.value
    console.log(texto)

    const item_lista = document.createElement('li')
    const span = document.createElement('span')
    span.textContent = texto

    const rmv = document.createElement('button')
    rmv.textContent = 'Remover'
    rmv.className = 'remover'
    rmv.addEventListener('click', () => {lst_t.removeChild(item_lista)})

    item_lista.appendChild(span)
    lst_t.appendChild(item_lista)
    item_lista.appendChild(rmv)
    input.value = ''
})