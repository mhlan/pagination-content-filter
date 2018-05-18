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

//generates buttons
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

createButtons(totalPages);

hideList(studentList);

// function createFirstPage(studentList, totalPages, numPerPage) {
//   for (let i = 0; i < studentList.length; i += 1) {
//     if (i >= 10) {
//       studentList[i].style.display = "none";
//     }
//   }
// }
// createFirstPage(studentList, totalPages, numPerPage);
