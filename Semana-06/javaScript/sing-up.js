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
var nameOk,lastnameOk,dniOK,phoneOk,localityOk,addressOk,postCodeOk,emailOk,passwordOk,password2Ok;

document.addEventListener('DOMContentLoaded', function(e){ 
  inputName.addEventListener('blur',function(evt){
    var name = inputName.value;  
    if (containsNumbers(name) || name.length < 3){   
      nameOk = false;   
      document.querySelector('#Register-name-p').classList.add('form-input-error-active');    
    } else {  
      nameOk = true;
      document.querySelector('#Register-name-p').classList.remove('form-input-error-active');
    }    
  })
  inputLastName.addEventListener('blur',function(evt){
    var Lastname = inputLastName.value;
    if (containsNumbers(Lastname) || Lastname.length < 3){  
      lastnameOk  = false;    
      document.querySelector('#Register-Lastname-p').classList.add('form-input-error-active');    
    } else { 
      lastnameOk  = true; 
      document.querySelector('#Register-Lastname-p').classList.remove('form-input-error-active');
    }
  })
  inputDni.addEventListener('blur',function(evt){
    var dni = inputDni.value;
    if (containsCharacter(dni) || dni.length < 7){  
      dniOK = false;    
      document.querySelector('#Register-DNI-p').classList.add('form-input-error-active');    
    } else {  
      dniOK = true;
      document.querySelector('#Register-DNI-p').classList.remove('form-input-error-active');
    }

  })
  inputPhone.addEventListener('blur',function(evt){
    var phone = inputPhone.value;
    if (containsCharacter(phone) || phone.length != 10){     
      phoneOk = false;
      document.querySelector('#Register-Phone-p').classList.add('form-input-error-active');    
    } else {  
      phoneOk = true;
      document.querySelector('#Register-Phone-p').classList.remove('form-input-error-active');
    }
  })
  inputLocality.addEventListener('blur',function(evt){
    var locality = inputLocality.value;
    if ((containsCharacter(locality) && containsNumbers(locality) && locality.length > 3) || (containsCharacter(locality) && locality.length > 3)){     
      localityOk = true;
      document.querySelector('#Register-Locality-p').classList.remove('form-input-error-active');
    } else { 
      localityOk = false;
      document.querySelector('#Register-Locality-p').classList.add('form-input-error-active');
    }
  })
  inputAddress.addEventListener('blur',function(evt){
    var address = inputAddress.value;
    if (containsCharacter(address) && containsNumbers(address) && address.length > 5 && containsSpace(address)){  
      addressOk = true;
      document.querySelector('#Register-Address-p').classList.remove('form-input-error-active');
    } else { 
      addressOk = false;
      document.querySelector('#Register-Address-p').classList.add('form-input-error-active');
    }
  })
  inputPostalCode.addEventListener('blur',function(evt){
    var postalcode = inputPostalCode.value;
    if ((containsNumbers(postalcode) && postalcode.length == 5) || (containsNumbers(postalcode) && postalcode.length == 4)){ 
      postCodeOk = true;
      document.querySelector('#Register-PostalCode-p').classList.remove('form-input-error-active');
    } else { 
      postCodeOk = false;
      document.querySelector('#Register-PostalCode-p').classList.add('form-input-error-active');
    }
  })
  inputEmail.addEventListener('blur',function(evt){
    var Email = inputEmail.value;    
    if (emailExpression.test(Email)){
      emailOk = true;
      document.querySelector('#Register-Email-p').classList.remove('form-input-error-active');
    } else {
      emailOk = false;
      document.querySelector('#Register-Email-p').classList.add('form-input-error-active');
    }
  })  
  inputPassword.addEventListener('blur',function(evt){
    var password = inputPassword.value;
    if ((containsNumbers(password) || containsCharacter(password)) && password.length >= 8 ){     
      passwordOk = true;
      document.querySelector('#Register-Password-p').classList.remove('form-input-error-active');
    } else { 
      passwordOk = false;
      document.querySelector('#Register-Password-p').classList.add('form-input-error-active');
    }  
  })
  inputPassword2.addEventListener('blur',function(evt){ 
    password2 = inputPassword2.value;   
    if ((containsNumbers(password2) || containsCharacter(password2)) && password2.length >= 8 ){   
      password2Ok = true;
      document.querySelector('#Register-Password2-p').classList.remove('form-input-error-active');
    } else { 
      password2Ok = false;
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
    var alfabetic = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
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
    var inputName = evt.target.id;    
    removeErrorTextFocus(inputName);
  })
  inputLastName.addEventListener('focus',function(evt){ 
    var inputLastName = evt.target.id;    
    removeErrorTextFocus(inputLastName);  
  })
  inputDni.addEventListener('focus',function(evt){ 
    var inputDni = evt.target.id;    
    removeErrorTextFocus(inputDni);
  })
  inputPhone.addEventListener('focus',function(evt){ 
    var inputPhone = evt.target.id;    
    removeErrorTextFocus(inputPhone);
  })
  inputLocality.addEventListener('focus',function(evt){ 
    var inputLocality = evt.target.id;    
    removeErrorTextFocus(inputLocality);   
  })
  inputAddress.addEventListener('focus',function(et){ 
    var inputAddress = et.target.id;    
    removeErrorTextFocus(inputAddress);   
  })
  inputPostalCode.addEventListener('focus',function(evt){ 
    var inputPostalCode = evt.target.id;    
    removeErrorTextFocus(inputPostalCode);  
  })
  inputEmail.addEventListener('focus',function(evt){ 
    var inputEmail = evt.target.id;    
    removeErrorTextFocus(inputEmail);
  })
  inputPassword.addEventListener('focus',function(evt){ 
    var inputPassword = evt.target.id;    
    removeErrorTextFocus(inputPassword);   
  })
  inputPassword2.addEventListener('focus',function(evt){ 
    var inputPassword2 = evt.target.id;    
    removeErrorTextFocus(inputPassword2); 
  })  
  function removeErrorTextFocus(inputId){
   document.querySelector('#'+ inputId +'-p').classList.remove('form-input-error-active');  
  }
  submit.addEventListener('click',function(evt){
    if((nameOk) && (lastnameOk) && (dniOK) && (phoneOk) &&(localityOk) && (addressOk) && (postCodeOk) && (emailOk) && (passwordOk) && (password2Ok)){
      var name = inputName.value;
      var Lastname = inputLastName.value;
      var dni = inputDni.value;  
      var phone = inputPhone.value;
      var locality = inputLocality.value;
      var address = inputAddress.value;
      var postalcode = inputPostalCode.value;
      var Email = inputEmail.value;
      var password = inputPassword.value;
      document.querySelector('.form-message-successful').classList.add('form-message-successful-active');
      alert("Name:" + name );
      alert("LastName:" + Lastname );
      alert("DNI:" + dni );
      alert("Phone:" + phone );
      alert( "Locality:" + locality );
      alert("Address:" + address );
      alert("PostalCode:" + postalcode );
      alert("Email:" + Email  );
      alert("Password:" + password);
    }else{
      document.querySelector('.form-message-wrong').classList.add('form-message-wrong-active');
    }     
  })

})
  
