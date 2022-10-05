var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var form = document.querySelector(".sing-in-form");
var emailLogin = document.querySelector("#Email-log");
var inputPasswordLogin = document.querySelector("#login_Password");
var emailOk,passwordOk;
document.addEventListener('DOMContentLoaded', function(event){ 
  event.preventDefault;
  //if exist storage information
  var emailStorage = localStorage.getItem('email');  
  if(emailStorage != ""){   
    document.querySelector('#Email-log').value = emailStorage;
  }
  var passwordStorage = localStorage.getItem('password');
  if(passwordStorage != ""){
    document.querySelector('#login_Password').value = passwordStorage;
  }
  emailLogin.addEventListener('blur',function(e){
    var email = inputEmail.value;            
    if (emailExpression.test(email)) {
      emailOk = true;
      document.querySelector('#input-email-error-p').classList.remove('input-form-error-p-active');
      
    } else {
      emailOk = false; 
      document.querySelector('#input-pwd-error-p').classList.add('input-form-error-p-active');
    }
  })    
  inputPasswordLogin.addEventListener('blur',function(evt){
    var password = inputPassword.value;
    if (containsNumbers(password) && password.length >= 8 && containsCharacter(password)){  
        passwordOk = true ;       
      document.querySelector('.input-form-error-p').classList.remove('input-form-error-p-active');
    } else { 
      passwordOk = false;
      document.querySelector('.input-form-error-p').classList.add('input-form-error-p-active');
    }  
  })
  function containsNumbers(inputField){
    contNumber = false;
    var nums ="1234567890";
    for(var i = 0; i < inputField.length; i++){
      var c = inputField.charAt(i);
      for(var x = 0; x < nums.length; x++){
        var n = nums.charAt(n);
        if(c == n ){
          contNumber = true;
        }
      }      
    }
    return contNumber;
  }  
  function containsCharacter(inputField){
    contChar = false;
    var alfabetic = "abcdefghijklmnopqrstuvwxyz";
    for(var i = 0; i < inputField.length; i++){
      var c = inputField.charAt(i);
      for(var y = 0;y<alfabetic.length;y++){
        var x = alfabetic.charAt(y);
        if(c == x ){
          contChar = true;
        }
      }      
    }
    return contChar;
  }
  inputEmail.addEventListener('focus',function(evt){ 
    var inputId = evt.target.id;    
    removeErrorTextFocus(inputId);
  })
  inputPassword.addEventListener('focus',function(evt){ 
    var inputId = evt.target.id;    
    removeErrorTextFocus(inputId);   
  })
  function removeErrorTextFocus(inputId){
    document.querySelector('#'+ inputId +'-p').classList.remove('form-input-error-active');  
  }
  if((emailOk) && (passwordOk)){
    var email = emailLogin.value;
    var password = inputPasswordLogin.value;
    document.querySelector('.form-message-wrong').classList.remove('form-message-wrong-active');
    document.querySelector('.form-message-successful').classList.add('form-message-successful-active');
    var url = "https://basp-m2022-api-rest-server.herokuapp.com/login";
    fetch(url + "?email="+ email + "&password=" + password)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      alert("Successful request");       
      if(data.success == true){
        alert(JSON.stringify(data));
        localStorage.setItem('email',email);
        localStorage.setItem('password',password);       
      }
    })            
  }else{
    alert("Wrong Information:");
    document.querySelector('.form-message-wrong').classList.add('form-message-wrong-active');
  }   

})
  
  



