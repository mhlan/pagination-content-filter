//array containing each studdent-item element
const studentList = [...document.querySelectorAll(".student-item")];
//static number of students to be shown per totalPages
const maxPerPage = 10;
//number of pages based on number of student-item elements
const totalPages = Math.round(studentList.length / maxPerPage);
//keeps count of page number
let currentPage = 1;

//hides full student list
function hideList(studentList) {
  for (let i = 0; i < studentList.length; i += 1) {
    studentList[i].style.display = "none";
  }
}

//generates li
function createButtons(totalPages) {
  let page = document.querySelector(".page");
  let div = document.createElement("div");
  div.className = "pagination";
  let ul = document.createElement("ul");
  div.appendChild(ul);
  for (let i = 1; i <= totalPages + 1; i++) {
    let li = document.createElement("li");
    ul.appendChild(li);
    let a = document.createElement("a");
    a.setAttribute("href", "#");
    let count = document.createTextNode(i);
    a.appendChild(count);
    li.appendChild(a);
  }
  page.appendChild(div);
}

//displays list of students corresponding to button selected
//ceiling and floor variables act to determine range of student-list items
function pagination(studentList, currentPage, maxPerPage) {
  let ceiling = currentPage * maxPerPage;
  let floor = ceiling - maxPerPage;
  for (let i = 0; i < studentList.length; i++) {
    if (i < ceiling && i >= floor) {
      studentList[i].style.display = "block";
    }
  }
}

function makeActive(currentPage, totalPages) {
  let div = document.querySelector(".pagination");
  let ul = div.querySelector("ul");
  let li = ul.childNodes;
  li = [...li];
  for (let i = 0; i <= totalPages; i++) {
    if (i === currentPage - 1) {
      li[i].firstChild.className = "active";
    }
  }
}

hideList(studentList);

pagination(studentList, currentPage, maxPerPage);

createButtons(totalPages);

makeActive(currentPage, totalPages);

//create function to toggle active class to corresponding button

//event listener to change page number based on click, which should change student list
//if old student list items to become hidden, and else statement to pagination to change display to hidden
