//getting required elements

const inputBox = document.querySelector(".inp-but input");
const addBtn = document.querySelector(".inp-but button");
const todoList = document.querySelector(".todolist");
const delBtn = document.querySelector(".footer button");

//onkeyup() event

inputBox.onkeyup = () => {
  let userEnteredValue = inputBox.value;
  //   console.log(userEnterValue);
  if (userEnteredValue.trim() !== 0) {
    addBtn.classList.add("active");
  } else {
    addBtn.classList.remove("active");
  }
};

addBtn.onclick = () => {
  let userEnteredValue = inputBox.value;
  let getLocalStorageData = localStorage.getItem("New Todo");
  if (getLocalStorageData === null) {
    listArray = [];
  } else {
    listArray = JSON.parse(getLocalStorageData);
  }
  listArray.push(userEnteredValue);
  // console.log(listArray);
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks();
  addBtn.classList.remove("active");
  console.log(localStorage);
};

function showTasks() {
  let newLiTag = "";
  listArray.forEach((element, index) => {
    newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash fa-lg"></i></span></li>`;
  });
  todoList.innerHTML = newLiTag;
  inputBox.value = "";
}

//delete task one by one
function deleteTask(index) {
  listArray.splice(index, 1);
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks();
}

// Delete all Task Function
delBtn.onclick = () => {
  listArray = [];
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks();
};
