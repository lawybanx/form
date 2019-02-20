let adminInfo = [];
window.onload = function() {
    let item = getItems();
    if(item != null){
    
        for(let i =0; i < item.length; i++){
          let ol = document.querySelector("#namelist");
          let li = document.createElement('li');
          li.appendChild(document.createTextNode(item[i].name));
          ol.appendChild(li);
          li.onclick = removeItem;
        }
      for(let i =0; i < item.length; i++){
        let ul = document.querySelector("#classlist");
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(item[i].class));
        ul.appendChild(li);

      }
      for(let i =0; i < item.length; i++){
        let ul = document.querySelector("#usernamelist");
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(item[i].username));
        ul.appendChild(li);

      }
      for(let i =0; i < item.length; i++){
        let ul = document.querySelector("#passwordlist");
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(item[i].password));
        ul.appendChild(li);

      }
    }
}
 let saveBtn = document.querySelector("#saveBtn");
 saveBtn.addEventListener('click', function () {
    let name = document.querySelector("#name").value,
        _class = document.querySelector("#class").value,
        username = document.querySelector("#username").value,
        password = document.querySelector("#password").value;

     let ol = document.querySelector("#namelist"),
         ol0 = document.querySelector("#classlist"),
         ol1 = document.querySelector("#usernamelist"),
         ol2 = document.querySelector("#passwordlist");

    let li = document.createElement('li'),
        li0 = document.createElement('li'),
        li1 = document.createElement('li'),
        li2 = document.createElement('li'); 

    li.appendChild(document.createTextNode(name)),
    li0.appendChild(document.createTextNode(_class)),
    li1.appendChild(document.createTextNode(username)),
    li2.appendChild(document.createTextNode(password));

    ol.appendChild(li);
    ol0.appendChild(li0);
    ol1.appendChild(li1);
    ol2.appendChild(li2);

    document.querySelector('#name').value = "";
    document.querySelector('#class').value = "";
    document.querySelector('#username').value = "";
    document.querySelector('#password').value = "";
    li.onclick = removeItem;

    let obj = {
        name:name,
        class:_class,
        username:username,
        password:password
    };
    storeItem(obj);
    console.log(adminInfo)
 })

function getItems() {
    adminInfo = JSON.parse(localStorage.getItem('teachers'));
    return adminInfo;
  }
  
  function storeItem(obj) {
    let admin = getItems();
    if(admin != null){  
      admin.push(obj);
      localStorage.setItem('teachers', JSON.stringify(admin));
    } else{
      let list = [obj];
      localStorage.setItem('teachers', JSON.stringify(list));
    }
  }
  function removeItem(list) {
    list.target.parentElement.removeChild(list.target);
    deleteItem(list.target);
  
  }

  function deleteItem(obj) {
    let admin = getItems();
  
    for(i = 0; i < admin.length; i++){
      if(admin[i].name == obj.innerHTML){
        admin.splice(i, 1);
        localStorage.setItem('teachers', JSON.stringify(admin));
      }
    }
  }