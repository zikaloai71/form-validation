// validation script here
const inputs = [...document.querySelectorAll('input')];
const password =document.getElementById('password');
const confirmationPassword=document.getElementById('confirmationPassword');
const submit= document.getElementById('submit');
const confirmMessage = document.getElementById('confirm-message');
// regex patterns
const patterns = {
        zipCode: /^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/,
        username: /^[a-z\d]{5,12}$/i,
        password: /^[\d\w@-]{8,20}$/i,
        confirmationPassword:/^[\d\w@-]{8,20}$/i,
        country: /^[a-z]{5,10}$/,
        email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
    
};

// validation function
function validate(field, regex){

    if(regex.test(field.value)){
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }

}

// attach keyup events to inputs
inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
            validate(e.target, patterns[e.target.attributes.name.value]);
            if(e.target.attributes.name.value==="confirmationPassword") {
                if(password.value===confirmationPassword.value){
                 e.target.className= 'valid';
                 }
               else{
                 e.target.className = 'invalid';
                }
               }  
           
    });
});
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    debugger
    for(let i=0;i<inputs.length;i++){
        if(inputs[i].classList.contains('invalid')){
            confirmMessage.innerText='not submitted yet check invalid inputs';
            confirmMessage.className='invalidco';
            break;
               }
               else if(inputs[i].classList.contains('valid')){
               confirmMessage.innerText=' form submitted correctly ';
               confirmMessage.className='validco';
              
               }
               else{
                   confirmMessage.innerText='not submitted yet check invalid inputs';
                   confirmMessage.className='invalidco';
                    inputs[i].className='invalid';
                    break;
                 
               }

    }
   
})
