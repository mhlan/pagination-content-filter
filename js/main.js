//array containing each studdent-item element
const masterList = [...document.querySelectorAll(".student-item")];
//static number of students to be shown per totalPages
const maxPerPage = 10;
//number of pages based on number of student-item elements
const totalPages = Math.round(masterList.length / maxPerPage);
//keeps count of page number
let pageNum = 0;

//hides full student list
function hideList(masterList) {
  for (let i = 0; i < masterList.length; i += 1) {
    masterList[i].style.display = "none";
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

hideList(masterList);

// function createFirstPage(masterList, totalPages, numPerPage) {
//   for (let i = 0; i < masterList.length; i += 1) {
//     if (i >= 10) {
//       masterList[i].style.display = "none";
//     }
//   }
// }
// createFirstPage(masterList, totalPages, numPerPage);
