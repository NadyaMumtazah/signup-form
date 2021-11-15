const inputsField = document.querySelectorAll('input');
const submitForm = document.getElementById('submit');

submitForm.addEventListener('click', (e)=> {
    e.preventDefault();
    inputsField.forEach((input) => {
        if(!input.value){
            input.parentElement.classList.add('error');
        }
        else {
            input.parentElement.classList.remove('error');
            if(input.type == 'email') {
                if(validateEmail(input.value)){
                    input.parentElement.classList.remove('error');
                }
                else {
                    input.parentElement.classList.add('error');
                }
            }
        }
    });
});

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
