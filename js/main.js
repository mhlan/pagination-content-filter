//array containing each studdent-item element
const studentList = document.querySelectorAll(".student-item");
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

//generates page number buttons with corresponding attributes
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
    a.className = "page-button";
    let count = document.createTextNode(i);
    a.appendChild(count);
    li.appendChild(a);
  }
  page.appendChild(div);
}

// //generates search bar
// function createSearch() {
//   let header = document.querySelector(".page-header");
//   let div = document.createElement("div");
//   div.className = "student-search";
//   let input = document.createElement("input");
//   input.setAttribute("placeholder", "Search for students...");
//   div.appendChild(input);
//   let button = document.createElement("button");
//   button.innerText = "Search";
//   div.appendChild(button);
//   header.appendChild(div);
// }

//displays list of students corresponding to button selected
//ceiling and floor variables act to determine range of student-list items
function pagination(studentList, currentPage, maxPerPage) {
  let ceiling = currentPage * maxPerPage;
  let floor = ceiling - maxPerPage;
  for (let i = 0; i < studentList.length; i++) {
    if (i < ceiling && i >= floor) {
      studentList[i].style.display = "block";
    } else {
      studentList[i].style.display = "none";
    }
  }
}

//sets current page number to an active state
function makeActive(currentPage, totalPages) {
  let div = document.querySelector(".pagination");
  let ul = div.querySelector("ul");
  let li = ul.childNodes;
  for (let i = 0; i <= totalPages; i++) {
    if (i === currentPage - 1) {
      li[i].firstChild.className = "active";
    } else {
      li[i].firstChild.className = "page-button";
    }
  }
}

hideList(studentList);

pagination(studentList, currentPage, maxPerPage);

createButtons(totalPages);

makeActive(currentPage, totalPages);

// createSearch();

const paginationUl = document.querySelector(".pagination").querySelector("ul");
//triggers pagination and makeActive functions upon clicking of page buttons
paginationUl.addEventListener("click", event => {
  if (event.target.className === "page-button") {
    currentPage = event.target.innerHTML;
    pagination(studentList, currentPage, maxPerPage);
    makeActive(currentPage, totalPages);
  }
});

// const searchBtn = document.querySelector("button");
// const searchField = document.querySelector("input");

// searchBtn.addEventListener("click", () => {
//   let studentName = document.querySelectorAll("h3");
//   let search = searchField.value.toUpperCase();
//   let count = 0;
//   for (let i = 0; i < studentList.length; i++) {
//     let names = studentName[i].innerText.toUpperCase();
//     if (names.indexOf(search) >= 0) {
//       studentList[i].style.display = "block";
//       count++;
//     } else {
//       studentList[i].style.display = "none";
//     }
//   }
//   if (count === 0) {
//     alert("No matches.");
//     pagination(studentList, currentPage, maxPerPage);
//   } else {
//     count = Math.round(count / maxPerPage);
//     document.querySelector(".pagination").style.display = "none";
//     createButtons(count);
//     makeActive(currentPage, totalPages);
//   }
// });
