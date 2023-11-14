let userTodo = document.getElementById("todo-input");
let AddIndoBtn = document.getElementById("add-btn");
let listDiv = document.getElementById("list-div");
AddIndoBtn.addEventListener("click", addTodoByUser)

var userTodos = JSON.parse(localStorage.getItem('user todo')) || []

userTodos.forEach((value, index) => {
    addTodoByLs(value)
});

function addTodoByUser() {
    if (userTodo.value === "") {
        alert("Please enter something in input box")
    } else {
        userTodos.push(userTodo.value)
        localStorage.setItem('user todo', JSON.stringify(userTodos))

        addTodoByLs()
    }
}

function addTodoByLs(value) {

    let div = document.createElement('div');
    div.className = 'div'

    let p = document.createElement("p");
    p.className = 'p'
    p.innerText = value ? value : userTodo.value;

    let delBtn = document.createElement('span')
    delBtn.innerText = "×"
    delBtn.className = 'delBtn'

    div.appendChild(p)
    div.appendChild(delBtn)

    delBtn.addEventListener("click", function () {

        let removeDiv = div.childNodes[0].innerText
        let removeDivIndex = userTodos.indexOf(removeDiv)
        userTodos.splice(removeDivIndex, 1)
        localStorage.setItem("user todo", JSON.stringify(userTodos))
        div.remove()
    })

    listDiv.appendChild(div)

    userTodo.value = "";
}