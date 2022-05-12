
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
            <td><img class="blog-image" src="${serverURL}/uploads/${giveMeBlog.blogImage}" alt="image" width="60px" height="50px">
            </td>
                    <td>${giveMeBlog.title}</td>
                    <td>${date[2]} ${date[1]} ${date[3]}</td>
                    <td>${giveMeBlog.comments.length}</td>
                    <td>${giveMeBlog.likes.length}</td>
                    <td> <a href="update.html" ><i class="fa-solid fa-pen-to-square"></i></a> <a href="#" onClick="deleteArticle('${giveMeBlog._id}')"><i class="fa-solid fa-x"></i></a></td>

                </tr>
                `;
            });
        }
        ).catch(err=>{
            console.log(err);
        });

        async function deleteArticle(id) {
            alert('delete blog...');
            try {
                await axios
                    .delete(`${global}/api/v1/articles/${id}`);
                location.reload()
            } catch (error) {
              
                if (error.response.data?.message) {
                    alert(`${error.response.data.message}`);
                } else {
                    alert(`${error.message}`);
                }
            }
        }
    


