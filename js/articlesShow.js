
let blogCard = document.querySelector('.showArt-cont');
let commentsOnBlog = document.querySelector('.comment-info');


let blog = null;
const blogApi = fetch(`${serverURL}/api/v1/articles/${window.location.search.split('=')[1]}`)
  .then(data => data.json());
const blogs = fetch(`${serverURL}/api/v1/articles`).then(data => data.json());

blogApi.then(res => {
  console.log(res)
  blog = res.oneArticle;
  let date = `${new Date(blog.date)}`.split(" ");
  blogCard.innerHTML += `
   <h2 class="showArt-title">${blog.title}</h2>
  <div class="showArt-intro">
      <p>${blog.content.slice(0, 400)}</p>
  </div>
  <img src="${serverURL}/uploads/${blog.blogImage}" alt="" width="100%" height="250px">
  <div class="showArt-body">
      <p>${blog.content.slice(200, 1000)}</p>
  </div>`;

  commentsOnBlog.innerHTML +=  ` 
           <p class="commentBy"> ${blog.comments[0].commentedBy}</p>
          <p class="commented-date">${date[2]} ${date[1]} ${date[3]}</p>
          <p class="comment-text">${blog.comments[0].text}</p>
          <div class="comment-line"></div> `
});



