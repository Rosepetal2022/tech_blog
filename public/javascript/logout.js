async function logout() {
    console.log("button was clicked")
    const response = await fetch('/api/users/logout', {
       method: 'post',
        headers: { 'Content-type': 'application/json' }
    });
    if(response.ok) {
        document.location.replace('/login');
    } else {
        alert(response.statusText);
    }
}

console.log('I have loaded')
document.querySelector('#logout').addEventListener('click', logout);

