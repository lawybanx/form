var userName = document.querySelector('#userName')
var passWord = document.querySelector('#passWord')
var loginButton = document.querySelector('#login')

loginButton.addEventListener('click', function () {
  'use strict'
  userName = document.querySelector('#userName').value
  passWord = document.querySelector('#passWord').value
  var local = JSON.parse(localStorage.getItem('teachers'))
  local.forEach(element => {
    if (userName === element.username && passWord === element.password) {
      // console.log('Login successful');
      window.location.assign('resultPage.html')
    } else if (userName !== element.username && passWord === element.password) {
      alert('Username incorrect!!')
      console.log('Username incorrect!!')
      console.log('Login unsuccessful')
    } else if (userName === element.username && passWord !== element.password) {
      alert('Password incorrect!!')
      console.log('Password incorrect!!')
      console.log('Login unsuccessful')
    }
  })
})
var admin = document.querySelector('#admin')
admin.addEventListener('click', function () {
  'use strict'
  window.location.assign('adminLogin.html')
})
