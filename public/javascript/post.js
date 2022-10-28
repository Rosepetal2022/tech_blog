//function to create new posts
async function newPostHandler (event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const post_url = document.querySelector('input[name="post_url"]').value; 
    
    const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
            title, 
            post_url
        }),
        headers: {
            'Content-type': 'application/json'
        }
    });

    if(response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}



document.querySelector('.new-post-form').addEventListener('submit', newPostHandler);
