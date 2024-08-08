const $pendingList = document.querySelector('.pending-list')
const $finishedList = document.querySelector('.finished-list')

const PENDING = 'pending'
const FINISHED = 'finished'

let pendingList = []
let finishedList = []

const saveToDo = (listName, newList) => {
    localStorage.setItem(listName, JSON.stringify(newList))
}

const removeDOM = (listName, li) => {
    listName === PENDING ? $pendingList.removeChild(li) : $finishedList.removeChild(li)
}

const deleteToDo = (e) => {
    const li = e.target.parentNode
    const listName = li.parentNode.className.split('-')[0]
    removeDOM(listName, li)
    updateToDo('DEL', listName, li.id, null)
}

const moveToDo = (e) => {
    const text = e.target.nextSibling.textContent
    const liId = e.target.parentNode.id
    const listName = e.target.checked ? PENDING : FINISHED
    deleteToDo(e)

    if (listName === PENDING) {
        paintToDo(FINISHED, liId, text)
        updateToDo('ADD', FINISHED, liId, text)
    } else {
        paintToDo(PENDING, liId, text)
        updateToDo('ADD', PENDING, liId, text)
    }
}

const ToDoList = (listName, text) => {
    const li = document.createElement('li')
    const delBtn = document.createElement('button')
    const checkBox = document.createElement('input')
    const textNode = document.createTextNode(text)

    checkBox.classList.add('todo-checkbox')
    checkBox.setAttribute('type', 'checkbox')
    checkBox.addEventListener('change', moveToDo)

    delBtn.classList.add('todo-delete')
    delBtn.innerText = 'DEL'
    delBtn.addEventListener('click', deleteToDo)

    listName === FINISHED && checkBox.setAttribute('checked', true)
    listName === FINISHED && li.classList.add('completed')

    li.appendChild(checkBox)
    li.appendChild(textNode)
    li.appendChild(delBtn)
    return li
}

const updateToDo = (type, listName, id, text) => {
    const prevToDos = listName === PENDING ? pendingList : finishedList
    let newToDos = ''

    switch (type) {
        case 'ADD':
            const newToDo = { id, text }
            newToDos = [...prevToDos, newToDo]
            break
        case 'DEL':
            newToDos = prevToDos.filter((toDo) => toDo.id !== id)
            break
        default:
            break
    }

    saveToDo(listName, newToDos)

    listName === PENDING //
        ? (pendingList = newToDos)
        : (finishedList = newToDos)

    calcRate()
}

const paintToDo = (listName, id, text) => {
    const li = ToDoList(listName, text)
    li.id = id

    listName === PENDING ? $pendingList.appendChild(li) : $finishedList.appendChild(li)
}

const loadToDo = () => {
    const pendingList = localStorage.getItem(PENDING)
    const finishedList = localStorage.getItem(FINISHED)

    pendingList &&
        JSON.parse(pendingList).forEach((todo) => {
            paintToDo(PENDING, todo.id, todo.text)
            updateToDo('ADD', PENDING, todo.id, todo.text)
        })

    finishedList &&
        JSON.parse(finishedList).forEach((todo) => {
            paintToDo(FINISHED, todo.id, todo.text)
            updateToDo('ADD', FINISHED, todo.id, todo.text)
        })
}

const calcRate = () => {
    const total = pendingList.length + finishedList.length
    const completed = finishedList.length
    const progressBar = document.querySelector('.progress-bar')
    const progressPer = document.querySelector('.progress-per')
    const rate = Math.floor((completed * 100) / total)

    if (isNaN(rate)) {
        return
    }

    progressBar.value = rate
    progressPer.innerText = `${rate} %`
}

const handleSubmit = (e) => {
    e.preventDefault()
    const text = e.target['todo-input'].value
    const newId = Math.random().toString(16).slice(2, 5)

    e.target['todo-input'].value = ''
    paintToDo(PENDING, newId, text)
    updateToDo('ADD', PENDING, newId, text)
    calcRate()
}

const init = () => {
    toDoForm.addEventListener('submit', handleSubmit)
    loadToDo()
}

init()
