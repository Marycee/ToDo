const inputList = document.querySelector(".inputList");
const btn = document.querySelector(".btn");
const todoBox = document.querySelector(".todoBox");

// Event listener
btn.addEventListener("click", function() {
    let newDiv = document.createElement("div");
    newDiv.classList.add("newDiv");
    
    let newLi = document.createElement("li");
    newLi.innerText =  `${inputList.value}`;

    newDiv.appendChild(newLi);

    let checkBtn = document.createElement("button");
    checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkBtn.classList.add("markBtn");
    newDiv.appendChild(checkBtn);

    let trashBtn = document.createElement("button");
    trashBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    trashBtn.classList.add("deleteBtn");
    newDiv.appendChild(trashBtn);

    if (inputList.value === "") {
        alert("What's for today?!!");
    } else {
        todoBox.appendChild(newDiv);
    }

    inputList.value = "";

    checkBtn.addEventListener("click", function(){
        if (newLi.classList.contains('checked')
        ) { 
            newLi.classList.remove('checked')
            
        } else {
            newLi.classList.add('checked')
        }
    });

    trashBtn.addEventListener("click", function(e){
        
        // newDiv.remove();
        let target = e.target;
        target.parentElement.parentElement.remove();
    });

});


