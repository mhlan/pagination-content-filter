//dynamically create array containing each studdent-item element
const masterList = [...document.querySelectorAll(".student-item")];
//dynamically create number of pages based on number of student-item elements
const pageNum = Math.round(masterList.length / 10);
//static number of students to be shown per page
const numPerPage = 10;

// const pagination =
//   ' <div class="pagination"><ul><li><a class="active" href="#">1</a></li></ul ></div >';
