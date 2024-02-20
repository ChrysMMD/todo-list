const inputbox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask() {
  //Hvis man ikke skriver noget, men blot trykker på add, så vil der kommer en alert.
  if (inputbox.value === '') {
    alert("You must write something!");
  }
  //hvis man skriver noget i inputbox, vil det blive puttet i "li".
  else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listContainer.appendChild(li);
    //krydset ved siden af opgaven som bliver stylet i css.
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  //Gør at inputbox er tomt, når man har tilføjet en opgave.
  inputbox.value = "";

  //sørge for at li gemmes i localstorage
  saveData()

}

//en function som enteen sletter en opgave, hvis "span" er klikket på eller tilføjer classen "checked" hvis LI er trykket på..
listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    //når li har fået classen checked, bliver det gemt i localstoarge
    saveData()
  }
  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    //Det vil blive husket i localstorarge
    saveData()
  }
}, false);

//skrive en function som gemmer localstorage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

//en function som skal vise de gemte dataer i localstorage, når man åbner siden.
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask()