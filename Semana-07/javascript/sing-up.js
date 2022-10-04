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
      document.querySelector('#Register-name').classList.add('flex-input-wrong');    
    } else {  
      document.querySelector('#Register-name').classList.remove('flex-input-wrong');
    }    
  })
  inputLastName.addEventListener('blur',function(evt){
    var Lastname = inputLastName.value;
    if (containsNumbers(Lastname) || Lastname.length < 3){      
      document.querySelector('#Register-Lastname').classList.add('flex-input-wrong');    
    } else {  
      document.querySelector('#Register-Lastname').classList.remove('flex-input-wrong');
    }
  })
  inputDni.addEventListener('blur',function(evt){
    var dni = inputDni.value;
    if (containsCharacter(dni) || dni.length < 7){      
      document.querySelector('#Register-Lastname').classList.add('flex-input-wrong');    
    } else {  
      document.querySelector('#Register-Lastname').classList.remove('flex-input-wrong');
    }

  })
  inputPhone.addEventListener('blur',function(evt){
    var phone = inputPhone.value;
    if (containsCharacter(phone) || phone.length != 10){      
      document.querySelector('#Register-Lastname').classList.add('flex-input-wrong');    
    } else {  
      document.querySelector('#Register-Lastname').classList.remove('flex-input-wrong');
    }
  })
  inputLocality.addEventListener('blur',function(evt){
    var locality = inputLocality.value;
    if (containsCharacter(locality) && containsNumbers(locality) && locality.length > 3){     
      document.querySelector('#Register-Lastname').classList.remove('flex-input-wrong');
    } else {        
      document.querySelector('#Register-Lastname').classList.add('flex-input-wrong');
    }
  })
  inputAddress.addEventListener('blur',function(evt){
    var address = inputAddress.value;
    if (containsCharacter(address) && containsNumbers(address) && address.length > 5 && containsSpace(address)){     
      document.querySelector('#Register-Lastname').classList.remove('flex-input-wrong');
    } else {        
      document.querySelector('#Register-Lastname').classList.add('flex-input-wrong');
    }
  })
  inputPostalCode.addEventListener('blur',function(evt){
    var postalcode = inputPostalCode.value;
    if ((containsNumbers(postalcode) && postalcode.length == 5) || (containsNumbers(postalcode) && postalcode.length == 4)){     
      document.querySelector('#Register-Lastname').classList.remove('flex-input-wrong');
    } else {        
      document.querySelector('#Register-Lastname').classList.add('flex-input-wrong');
    }
  })
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
  inputPassword2.addEventListener('blur',function(evt){
    var password2 = inputPassword2.value;
    if (containsNumbers(password2) && password2.length >= 8 && containsCharacter(password2)){     
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
  form.addEventListener('focus',function(evt){ 
    var inputId = evt.target.id
    document.querySelector('#'+inputId).classList.remove('flex-input-wrong');   
  })
})
  
