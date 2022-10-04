var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var form = document.querySelector("#sing-in-form");

document.addEventListener('DOMContentLoaded', function(e){ 
  e.preventDefault();
  inputEmail.addEventListener('blur',function(evt){
    var Email = inputEmail.value;    
    if (emailExpression.test(Email)) {
      document.querySelector('#Register-Lastname').classList.remove('flex-input-wrong');
    } else {
      document.querySelector('#Register-Lastname').classList.add('flex-input-wrong');
    }
  }) 
  inputPassword.addEventListener('blur',function(evt){
    var password = inputPassword.value;
    if (containsNumbers(password) && password.length >= 8 && containsCharacter(password)){     
      document.querySelector('#Register-Lastname').classList.remove('flex-input-wrong');
    } else {        
      document.querySelector('#Register-Lastname').classList.add('flex-input-wrong');
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
})


