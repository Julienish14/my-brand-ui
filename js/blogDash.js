
const jwt = localStorage.getItem("token");

const article_list = document.querySelector('.tab');

    fetch(`${serverURL}/api/v1/articles`, {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json',
            'jwt': jwt
        },
    })
    .then(data=> data.json())
        .then(res => {
            console.log(res)
            res.posts.map(giveMeBlog => {
                let date = `${new Date(giveMeBlog.date)}`.split(" ");
                article_list.innerHTML += ` 
                <tr>
                    <td>${giveMeBlog.blogImage}</td>
                    <td>${giveMeBlog.title}</td>
                    <td>${date[2]} ${date[1]} ${date[3]}</td>
                    <td>${giveMeBlog.comments.length}</td>
                    <td>${giveMeBlog.likes.length}</td>
                    <td> <a href="update.html"><i class="fa-solid fa-pen-to-square"></i></a> <a href="#"><i class="fa-solid fa-x"></i></a></td>

                </tr>
                `;
            });
        }
        ).catch(err=>{
            console.log(err);
        });




