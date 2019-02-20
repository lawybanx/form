var results = [];
var error = document.querySelector("#error");
error.style.display = "none";

var save = document.querySelector("#saveBtn");
save.addEventListener('click', function () {
    'use strict';
    var studentName = document.querySelector("#name").value,
        score = document.querySelector("#ca").value,
        score2 = document.querySelector("#exam").value;
    if (score <= 20 && score2 <= 80) {
        var displayName = document.querySelector("#displayName"),
            displayCa = document.querySelector("#displayCa"),
            displayExam = document.querySelector("#displayExam");

        var name = document.createElement('li'),
            ca = document.createElement('li'),
            exam = document.createElement('li');

        name.appendChild(document.createTextNode(studentName));
        ca.appendChild(document.createTextNode(score));
        exam.appendChild(document.createTextNode(score2));

        displayName.appendChild(name);
        displayCa.appendChild(ca);
        displayExam.appendChild(exam);

        document.querySelector("#name").value = "";
        document.querySelector("#ca").value = "";
        document.querySelector("#exam").value = "";
        li.onclick = removeItem;
    let obj = {
        name:studentName,
        ca:score,
        exam:score2
    };
    storeItem(obj);
    } else if (score > 20) {
        alert("error: CA must not exceed 20");
    } else if (score2 > 80) {
        alert("error: Exam score must not exceed 80");
    } else {
        error.style.display = "block";
        document.querySelector("#name").value = "";
        document.querySelector("#ca").value = "";
        document.querySelector("#exam").value = "";
    }
});

var studentName = document.querySelector("#name");
studentName.addEventListener('focus', () => error.style.display = "none");

function getItems() {
    studentInfo = JSON.parse(localStorage.getItem('students'));
    return studentInfo;
  }
  
  function storeItem(obj) {
    let student = getItems();
    if(student != null){  
      student.push(obj);
      localStorage.setItem('students', JSON.stringify(student));
    } else{
      let list = [obj];
      localStorage.setItem('students', JSON.stringify(list));
    }
  }

  function removeItem(list) {
    list.target.parentElement.removeChild(list.target);
    deleteItem(list.target);
  
  }

  function deleteItem(obj) {
    let students = getItems();
  
    for(i = 0; i < students.length; i++){
      if(students[i].name == obj.innerHTML){
        students.splice(i, 1);
        localStorage.setItem('students', JSON.stringify(students));
      }
    }
  }