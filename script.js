function addTask(){
const newtask = document.createElement('li')
const tasklist =  document.getElementById('tasklist')
tasklist.appendChild(newtask)

newtask.textContent = document.getElementById('inputTask').value
document.getElementById('inputTask').value = ""
deleteTask(newtask)
}

  function deleteTask(newtask){
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = "Delete"
    newtask.appendChild(deleteBtn)

    deleteBtn.onclick = function(){
        newtask.remove()
    }
}