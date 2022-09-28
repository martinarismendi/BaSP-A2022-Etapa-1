var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var form = document.getElementById("sing-up-form");
var submit = document.querySelector("#btn-Register");
document.addEventListener('DOMContentLoaded', function(e){ 
e.preventDefault();

})
  
var name = document.getElementById("Register-name").value;
inputName = document.getElementById("Register-name");
console.log(name);
inputName.addEventListener("blur", function(name){   
if (containsNumbers(name) && name.length > 3){      
  document.querySelector('.flex-input').classList.add('flex-input-wrong');    
} else {  
  document.querySelector('.flex-input').classList.remove('flex-input-wrong');
}
});

function containsNumbers(name){
  contNumber = false;
  for(var i = 0; i < name.length; i++){
    var c = name.charAt(i);
    if(c == '0' || c == '1' || c == '2' || c == '3' || c == '4' || c == '5' ||c == '6' ||c == '7' ||c == '8' ||c == '9'){
      contNumber = true;
    }
  }
  console.log(contNumber);
  return contNumber;
}
var Lastname = document.getElementById("Register-Lastname").value;
inputLastName = document.getElementById("Register-Lastname");
inputLastName.addEventListener("blur", function(Lastname){    
  if (containsNumbers(Lastname) && Lastname.length > 3){      
    document.querySelector('.flex-input').classList.add('flex-input-wrong');    
  } else {  
    document.querySelector('.flex-input').classList.remove('flex-input-wrong');
  }
});
var dni = document.getElementById("Register-DNI").value;
inputdni = document.getElementById("Register-DNI");
inputdni.addEventListener("blur", function(dni){  
  document.getElementById("flex-input").classList.add('flex-input-wrong');
  if (!(containsNumbers(dni)) && (dni.length > 7)){      
    document.querySelector('.flex-input').classList.add('flex-input-wrong');    
  } else {  
    document.querySelector('.flex-input').classList.remove('flex-input-wrong');
  }
});

var phone = document.getElementById("Register-Phone").value;
inputphone = document.getElementById("Register-Phone");
inputphone.addEventListener("blur", function(phone){  
  document.getElementById("flex-input").classList.add('flex-input-wrong');
  if (!(containsNumbers(phone)) && (phone.length = 10)){      
    document.querySelector('.flex-input').classList.add('flex-input-wrong');    
  } else {  
    document.querySelector('.flex-input').classList.remove('flex-input-wrong');
  }
});
var locality = document.getElementById("Register-Locality").value;
inputlocality = document.getElementById("Register-Locality");
inputlocality.addEventListener("blur", function(locality){  
  document.getElementById("flex-input").classList.add('flex-input-wrong');
  if (locality.length > 3){      
    document.querySelector('.flex-input').classList.add('flex-input-wrong');    
  } else {  
    document.querySelector('.flex-input').classList.remove('flex-input-wrong');
  }
});
var PostalCode = document.getElementById("Register-PostalCode").value;
inputPostalCode = document.getElementById("Register-PostalCode");
inputPostalCode.addEventListener("blur", function(PostalCode){  
  document.getElementById("flex-input").classList.add('flex-input-wrong');
  if (locality.length > 3){      
    document.querySelector('.flex-input').classList.add('flex-input-wrong');    
  } else {  
    document.querySelector('.flex-input').classList.remove('flex-input-wrong');
  }
});
var password = document.getElementById("Register-Password").value;
inputpassword = document.getElementById("Register-Password");
inputpassword.addEventListener("blur", function(password){  
  document.getElementById("flex-input").classList.add('flex-input-wrong');
  if (locality.length >= 8 ){      
    document.querySelector('.flex-input').classList.add('flex-input-wrong');    
  } else {  
    document.querySelector('.flex-input').classList.remove('flex-input-wrong');
  }
});