
const jwt = localStorage.getItem("token");

const comments = document.querySelector('.tab');

    fetch(`${serverURL}/api/v1/articles/comments/all`, {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json',
            'jwt': jwt
        },
    })
    .then(data=> data.json())
        .then(res => {
            console.log(res)
            res.allComm.map(giveMecomment => {
            let date = `${new Date(giveMecomment.date)}`.split(" ");
                comments.innerHTML += ` 
                <tr>
                    <td>${giveMecomment.commentedBy}</td>
                    <td>${giveMecomment.text}</td>
                    <td>${date[2]} ${date[1]} ${date[3]}</td>
                    <td><button onClick="deleteComment('${giveMecomment._id}')">Delete</button></td>
                </tr>
                `;
            });
        }
        ).catch(err=>{
            console.log(err);
        });

        async function deleteComment(id) {
            try {
                
                    await fetch(`${serverURL}/api/v1/articles/comments/all/${id}`, {
                        method: 'DELETE', 
                        headers: {
                            'Content-Type': 'application/json',
                            'jwt': jwt
                        },
                    })
                alert('Comment deleted...');
                location.reload()
            } catch (error) {
              
                if (error) {
                    alert(`${error.message}`);
                } else {
                    alert(`${error.message}`);
                }
            }
        };


