var userName = document.querySelector('#userName');
var errorMsg = document.querySelector('#error');
userName.addEventListener('focus', function () {
    'use strict';
    errorMsg.style.display = 'none';
});

var passWord = document.querySelector('#passWord');
passWord.addEventListener('focus', function () {
    'use strict';
    errorMsg.style.display = 'none';
});

var loginButton = document.querySelector('#login');
errorMsg.style.display = 'none';

loginButton.addEventListener('click', function () {
    'use strict';
    userName = document.querySelector('#userName').value;
    passWord = document.querySelector('#passWord').value;
    if (userName === 'isAdmin' && passWord === 'yes') {
        window.location.assign('admin.html');
    } else {
        errorMsg.style.display = 'block';
    }
});
var teacher = document.querySelector('#teacher');
teacher.addEventListener('click', function () {
    'use strict';
    window.location.assign('loginPage.html');
});
