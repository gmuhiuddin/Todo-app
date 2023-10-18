let userTodo = document.getElementById("todo-input")
let AddIndoBtn = document.getElementById("add-btn");
let listDiv = document.getElementById("list-div");
AddIndoBtn.addEventListener("click" , addTodo)


function addTodo (){
    if(userTodo.value === ""){
        alert("Please enter something in input box")
    }else{
        let div = document.createElement('div');
div.className = 'div'
        let p = document.createElement("p");
        p.className = 'p'
    p.innerText = userTodo.value;

 let delBtn = document.createElement('span')
delBtn.innerText = "×"
delBtn.className = 'delBtn'
delBtn.addEventListener("click",function () {
    div.remove()
})
div.appendChild(p)
div.appendChild(delBtn)

    listDiv.appendChild(div)


    userTodo.value = "";
}
    
    
}
