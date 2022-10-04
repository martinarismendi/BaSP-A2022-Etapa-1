var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var form = document.querySelector("#sing-up-form");
var submit = document.querySelector("#btn-Register");
var inputName = document.querySelector("#Register-name");
var inputLastName = document.querySelector("#Register-Lastname");
var inputDni = document.querySelector("#Register-DNI");
var inputPhone = document.querySelector("#Register-Phone");
var inputLocality = document.querySelector("#Register-Locality");
var inputAddress = document.querySelector("#Register-Address");
var inputPostalCode = document.querySelector("#Register-PostalCode");
var inputEmail = document.querySelector("#Register-Email");
var inputPassword = document.querySelector("#Register-Password");
var inputPassword2 = document.querySelector("#Register-Password2");

document.addEventListener('DOMContentLoaded', function(e){ 
  e.preventDefault();
  inputName.addEventListener('blur',function(evt){
    var name = inputName.value;  
    if (containsNumbers(name) || name.length < 3){      
      document.querySelector('#Register-name-p').classList.add('form-input-error-active');    
    } else {  
      document.querySelector('#Register-name-p').classList.remove('form-input-error-active');
    }    
  })
  inputLastName.addEventListener('blur',function(evt){
    var Lastname = inputLastName.value;
    if (containsNumbers(Lastname) || Lastname.length < 3){      
      document.querySelector('#Register-Lastname-p').classList.add('form-input-error-active');    
    } else {  
      document.querySelector('#Register-Lastname-p').classList.remove('form-input-error-active');
    }
  })
  inputDni.addEventListener('blur',function(evt){
    var dni = inputDni.value;
    if (containsCharacter(dni) || dni.length < 7){      
      document.querySelector('#Register-DNI-p').classList.add('form-input-error-active');    
    } else {  
      document.querySelector('#Register-DNI-p').classList.remove('form-input-error-active');
    }

  })
  inputPhone.addEventListener('blur',function(evt){
    var phone = inputPhone.value;
    if (containsCharacter(phone) || phone.length != 10){      
      document.querySelector('#Register-Phone-p').classList.add('form-input-error-active');    
    } else {  
      document.querySelector('#Register-Phone-p').classList.remove('form-input-error-active');
    }
  })
  inputLocality.addEventListener('blur',function(evt){
    var locality = inputLocality.value;
    if (containsCharacter(locality) && containsNumbers(locality) && locality.length > 3){     
      document.querySelector('#Register-Locality-p').classList.remove('form-input-error-active');
    } else {        
      document.querySelector('#Register-Locality-p').classList.add('form-input-error-active');
    }
  })
  inputAddress.addEventListener('blur',function(evt){
    var address = inputAddress.value;
    if (containsCharacter(address) && containsNumbers(address) && address.length > 5 && containsSpace(address)){     
      document.querySelector('#Register-Address-p').classList.remove('form-input-error-active');
    } else {        
      document.querySelector('#Register-Address-p').classList.add('form-input-error-active');
    }
  })
  inputPostalCode.addEventListener('blur',function(evt){
    var postalcode = inputPostalCode.value;
    if ((containsNumbers(postalcode) && postalcode.length == 5) || (containsNumbers(postalcode) && postalcode.length == 4)){     
      document.querySelector('#Register-PostalCode-p').classList.remove('form-input-error-active');
    } else {        
      document.querySelector('#Register-PostalCode-p').classList.add('form-input-error-active');
    }
  })
  inputEmail.addEventListener('blur',function(evt){
    var Email = inputEmail.value;    
    if (emailExpression.test(Email)){
      document.querySelector('#Register-Email-p').classList.remove('form-input-error-active');
    } else {
      document.querySelector('#Register-Email-p').classList.add('form-input-error-active');
    }
  })  
  inputPassword.addEventListener('blur',function(evt){
    var password = inputPassword.value;
    if (containsNumbers(password) && password.length >= 8 && containsCharacter(password)){     
      document.querySelector('#Register-Password-p').classList.remove('form-input-error-active');
    } else {        
      document.querySelector('#Register-Password-p').classList.add('form-input-error-active');
    }  
  })
  inputPassword2.addEventListener('blur',function(evt){
    var password2 = inputPassword2.value;
    if (containsNumbers(password2) && password2.length >= 8 && containsCharacter(password2)){     
      document.querySelector('#Register-Password2-p').classList.remove('form-input-error-active');
    } else {        
      document.querySelector('#Register-Password2-p').classList.add('form-input-error-active');
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
  function containsSpace(addr){
    contSpace = false;
    var space = " ";
    for(var i = 0; i < addr.length; i++){
      var a = addr.charAt(i);
      if(a == space){
        contSpace = true;
      }
    }
    return contSpace;
  }  
  inputName.addEventListener('focus',function(evt){ 
    var inputId = evt.target.id;    
    removeErrorTextFocus(inputId);
  })
  inputLastName.addEventListener('focus',function(evt){ 
    var inputId = evt.target.id;    
    removeErrorTextFocus(inputId);  
  })
  inputDni.addEventListener('focus',function(evt){ 
    var inputId = evt.target.id;    
    removeErrorTextFocus(inputId);
  })
  inputLocality.addEventListener('focus',function(evt){ 
    var inputId = evt.target.id;    
    removeErrorTextFocus(inputId);   
  })
  inputAddress.addEventListener('focus',function(evt){ 
    var inputId = evt.target.id;    
    removeErrorTextFocus(inputId);   
  })
  inputPostalCode.addEventListener('focus',function(evt){ 
    var inputId = evt.target.id;    
    removeErrorTextFocus(inputId);  
  })
  inputEmail.addEventListener('focus',function(evt){ 
    var inputId = evt.target.id;    
    removeErrorTextFocus(inputId);
  })
  inputPassword.addEventListener('focus',function(evt){ 
    var inputId = evt.target.id;    
    removeErrorTextFocus(inputId);   
  })
  inputPassword2.addEventListener('focus',function(evt){ 
    var inputId = evt.target.id;    
    removeErrorTextFocus(inputId); 
  })  
  function removeErrorTextFocus(inputId){
   document.querySelector('#'+ inputId +'-p').classList.remove('form-input-error-active');  
  } 

})
  
