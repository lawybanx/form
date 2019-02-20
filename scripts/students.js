var studentInfo = [];
window.onload = function() {
   item = getItems();
  if (item != null) {

    for (var i =0; i < item.length; i++) {
      let ol = document.querySelector('#namelist');
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(item[i].name));
      ol.appendChild(li);
      li.onclick = removeItem;
    }
    for (var i =0; i < item.length; i++) {
      let ul = document.querySelector('#classlist');
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(item[i].class));
      ul.appendChild(li);

    }
  }
};

var saveBtn = document.querySelector('#saveBtn');
saveBtn.addEventListener('click', function() {
  let name = document.querySelector('#name').value;

    
var _class = document.querySelector('#class').value;

  let ol = document.querySelector('#namelist');

    
var ol0 = document.querySelector('#classlist');

  let li = document.createElement('li');

    
var li0 = document.createElement('li');

  li.appendChild(document.createTextNode(name)),
  li0.appendChild(document.createTextNode(_class));

  ol.appendChild(li);
  ol0.appendChild(li0);

  document.querySelector('#name').value = '';
  document.querySelector('#class').value = '';
  li.onclick = removeItem;
  let obj = {
    name: name,
    class: _class,
  };
  storeItem(obj);
  // console.log(studentsInfo)
});

function getItems() {
  studentInfo = JSON.parse(localStorage.getItem('students'));
  return studentInfo;
}

function storeItem(obj) {
  let student = getItems();
  if (student != null) {
    student.push(obj);
    localStorage.setItem('students', JSON.stringify(student));
  } else {
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

  for (i = 0; i < students.length; i++) {
    if (students[i].name == obj.innerHTML) {
      students.splice(i, 1);
      localStorage.setItem('students', JSON.stringify(students));
    }
  }
}
