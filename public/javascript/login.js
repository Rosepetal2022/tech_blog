const modal = document.querySelector('#signUpModal')

//function to let a user create a new account
async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#signup-username').value.trim();
    const email = document.querySelector('#signup-email').value.trim();
    const password = document.querySelector('#signup-password').value.trim();

    console.log(email, password)
    
    if(username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-type': 'application/json' }
        });

        if(response.ok) {
            console.log('success');
            document.location.replace('/dashboard');
            $('#myModal').modal('hide')
        } else {
            alert(response.statusText);
        }
    }
}

//function to let a user login if they have already created an account
async function loginFromHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#login-email').value.trim();
    const password = document.querySelector('#password-input').value.trim();

    if(email && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email, 
                password
            }),
            headers: { 'Content-type': 'application/json' }
        });
        
        if(response.ok) {
            console.log('success')
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFromHandler);
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);