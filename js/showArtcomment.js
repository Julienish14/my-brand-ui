const jwt = localStorage.getItem("token");

const commentsForm = document.querySelector('.comment-part');

const blog_id= window.location.search.split('=')[1];

commentsForm.addEventListener('submit', async (e) => { 
    e.preventDefault();
    const text = document.getElementById('comment').value;

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("jwt", jwt);
        
        var raw = JSON.stringify({
          "comment": text
        });
        
        var requestOptions = {
          method: 'PUT',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };


        fetch(`${serverURL}/api/v1/articles/${blog_id}/comment`, requestOptions)
          .then(response => response.text())
          .then(result => 
                console.log(result),
                alert('Thank You for your comment...'),
                location.reload()
          )
          .catch(error => 
            console.log('error', error),  
              location.assign('../pages/user-login.html')
          );
})
