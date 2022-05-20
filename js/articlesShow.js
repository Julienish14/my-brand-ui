let blogCard = document.querySelector('.showArt-cont');
let commentsOnBlog = document.querySelector('.comment-area');


let blog = null;
const blogApi = fetch(`${serverURL}/api/v1/articles/${window.location.search.split('=')[1]}`)
  .then(data => data.json());

 

const blogs = fetch(`${serverURL}/api/v1/articles`).then(data => data.json());

blogApi.then(res => {
  console.log(res)
  blog = res.oneArticle;

  blogCard.innerHTML += `
   <h2 class="showArt-title">${blog.title}</h2>
  <div class="showArt-intro">
      <p>${blog.content.slice(0, 400)}</p>
  </div>

  <img src="${serverURL}/uploads/${blog.blogImage}" alt="" width="100%" height="250px">
  <a class="text-link" href="#commentInfo">${blog.comments.length} comments</a> 
  <a class="text-link" href=""><i class="fa-solid fa-heart"></i> ${blog.likes.length} likes</a> 

 
  <div class="showArt-body">
      <p>${blog.content.slice(200, 1000)}</p>
  </div>`;

  res.oneArticle.comments.map(p => {

    let date = `${new Date(p.date)}`.split(" ");

    commentsOnBlog.innerHTML +=  `
    <div class="comment-info" id="commentInfo">
      <p class="commentBy"> ${p.commentedBy}</p>
      <p class="commented-date">${date[2]} ${date[1]} ${date[3]}</p>
      <p class="comment-text">${p.text}</p>
      <div class="comment-line"></div> 
    </div>`
  });

});

async function handleLike(artId) {
      try {
                    
        await fetch(`${serverURL}/api/v1/articles/${artId}/like`, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json',
                'jwt': jwt
            },
        })
        location.reload()
        } catch (error) {

        if (error) {
            alert(`${error.message}`);
        } else {
            alert(`${error.message}`);
        }
        }

}



