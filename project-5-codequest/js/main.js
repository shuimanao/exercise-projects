'use strict';

/* Required field notification */

function validateForm(e) {

    document.getElementById('required-msg').outerHTML = '<ul id="required-msg"></ul>'; 

    if (document.getElementById('email').value === '') {
        e.preventDefault();
        var msgMail = document.createElement('li');
        msgMail.innerText = 'The field above is required';
        document.getElementById('required-msg').appendChild(msgMail);
    }

}

document.getElementById('login-form').addEventListener('submit', validateForm);