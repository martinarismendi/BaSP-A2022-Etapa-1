var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var form = document.querySelector("#sing-up-form");


document.addEventListener('DOMContentLoaded', function(e){ 
  e.preventDefault(); 
  inputLastName.addEventListener('blur',function(evt){
    var Lastname = inputLastName.value;
    if (containsNumbers(Lastname) || Lastname.length < 3){      
      document.querySelector('#Register-Lastname').classList.add('flex-input-wrong');    
    } else {  
      document.querySelector('#Register-Lastname').classList.remove('flex-input-wrong');
    }
  }) 
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
})
  
