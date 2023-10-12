let userTodo = document.getElementById("todo-input")
let AddIndoBtn = document.getElementById("add-btn");
let Ul = document.getElementById("ul");
AddIndoBtn.addEventListener("click" , addTodo)

function addTodo (){
    if(userTodo.value === ""){
        alert("Please enter something in input box")
    }else{
        let li = document.createElement("li");
    li.innerText = userTodo.value;
 let delBtn = document.createElement('span')
delBtn.innerText = "×"
delBtn.className = 'delBtn'
delBtn.addEventListener("click",function () {
    li.remove()
})

    li.appendChild(delBtn)
    Ul.appendChild(li)



    userTodo.value = "";
}
    
    
}
