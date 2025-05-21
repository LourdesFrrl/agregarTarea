const AniadirTarea =(e)=>{
    e.preventDefault()
    const inputTarea = document.getElementById("inputTarea").value
    const lista = document.getElementById("listaTareas")
    const li = document.createElement("li")
    li.innerHTML =`${inputTarea} <buttom class=btn type=button id="btnBorrar">❌</buttom>` /*le agrega el valor del input*/
    li.classList.add('list-group-item')/*le agrega el estilo*/
    lista.appendChild(li) /*le agrega un hijo al ul*/
    formularioTarea.reset();/*limpia el input*/
}

const borrar =()=>{
    const item = document.getElementsByTagName("li")
    item.remove()
}

const botonBorrar = document.getElementById("btnBorrar")
const formularioTarea = document.getElementById("formularioTarea")

formularioTarea.addEventListener("submit", AniadirTarea)
botonBorrar.addEventListener("click",borrar)