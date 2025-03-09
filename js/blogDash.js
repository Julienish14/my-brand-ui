const jwt = localStorage.getItem("token");

let blog = null;
const blogApi = fetch(
  `${serverURL}/api/v1/articles/${window.location.search.split("=")[1]}`
).then((data) => data.json());

const blogs = fetch(`${serverURL}/api/v1/articles`).then((data) => data.json());

blogApi.then((res) => {
  console.log(res);
  blog = res.oneArticle;
});

const article_list = document.querySelector(".tab");

fetch(`${serverURL}/api/v1/articles`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    jwt: jwt,
  },
})
  .then((data) => data.json())
  .then((res) => {
    console.log(res);
    res.posts.map((giveMeBlog) => {
      let date = `${new Date(giveMeBlog.date)}`.split(" ");

      article_list.innerHTML += ` 
                <tr>
            <td><img class="blog-image" src="${giveMeBlog.blogImage}" alt="image" width="100px" height="50px">
            </td>
                    <td>${giveMeBlog.title}</td>
                    <td>${date[2]} ${date[1]} ${date[3]}</td>
                    <td>${giveMeBlog.comments.length}</td>
                    <td>${giveMeBlog.likes.length}</td>
                    <td> <a href="update.html" onClick="passBlogTolocal('${giveMeBlog._id}')"><i class="fa-solid fa-pen-to-square"></i></a> <a href="#" onClick="deleteArticle('${giveMeBlog._id}')"><i class="fa-solid fa-x"></i></a></td>

                </tr>
                `;
    });
  })
  .catch((err) => {
    console.log(err);
  });

//Delete article

async function deleteArticle(id) {
  try {
    await fetch(`${serverURL}/api/v1/articles/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        jwt: jwt,
      },
    });
    alert("delete blog...");
    location.reload();
  } catch (error) {
    if (error) {
      alert(`${error.message}`);
    } else {
      alert(`${error.message}`);
    }
  }
}

// Update pass data to localstorage

async function passBlogTolocal(id) {
  // const blogInfoPass = document.querySelector('#update-blog');
  // const inpuTitle = document.querySelector('input[type="text"]');
  // const textContent = documet.querySelector('textarea');
  // const fileImage = document.querySelector('input[type="file"]');
  fetch(`${serverURL}/api/v1/articles/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      jwt: jwt,
    },
  })
    .then((data) => data.json())
    .then((res) => {
      console.log(res);
      res.posts.map((passToPage) => {
        // let date = `${new Date(passToPage.date)}`.split(" ");
        // inpuTitle.attr('value', function(i, val){
        //     return val = `${passToPage.title}`;
        // })
        // textContent.html(function (value) {
        //     return value = `${passToPage.title}`;
        // });
        // inpuTitle.attr('value', input.val(`${passToPage.title}`))
        // inpuTitle.attr('value', input.val(`${passToPage.title}`))
        // inpuTitle.attr('value', input.val(`${passToPage.title}`))
      });
    })
    .catch((err) => {
      console.log(err);
    });
}
