
const searchInput = document.querySelector("#input-text");
const searchBtn = document.querySelector("#btn");
const ul = document.querySelector(".task-container");

searchBtn.addEventListener("click", ()=>{


    if(searchInput.value === ""){
        alert("task should not empty!!")
    }
    else{

         let li = document.createElement("li");
         li.innerHTML = searchInput.value;
         ul.appendChild(li);
         let span = document.createElement("span");
         span.innerHTML = "\u00d7";
         li.appendChild(span);

         searchInput.value = "";
         saveData();
    }

})

ul.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData(){
    localStorage.setItem("data", ul.innerHTML);
}

function showTask(){
  ul.innerHTML = localStorage.getItem("data");
}

showTask();