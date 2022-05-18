
let blogCard = document.querySelector('.showArt-cont');
let commentsList = document.querySelector('.comment-list');
let commentsArea = document.querySelector('.comments-area');
let commentForm = document.querySelector('.comment-form');
let navLeft = document.querySelector('.nav-left');
let navRight = document.querySelector('.nav-right');
let blog = null;
const blogApi = fetch(`${serverURL}/api/v1/articles/${window.location.search.split('=')[1]}`)
  .then(data => data.json());
const blogs = fetch(`${serverURL}/api/v1/articles`).then(data => data.json());

blogApi.then(res => {
  blog = res.posts;
//   let date = `${new Date(blog.date)}`.split(" ");
  blogCard.innerHTML += `
  <!-- <h2 class="showArt-title">Modern technology in our daily life.</h2>
  <div class="showArt-intro">
      <p>Modern technology has paved the way for multi-functional devices like the smartwatch and the smartphone. 
       Computers are increasingly faster, more portable, and higher-powered than ever before. 
       With all of these revolutions, technology has also made our lives easier, faster, better, and more fun.</p>
  </div>
  <img src="${serverURL}/uploads/${blog.blogImage}" alt="" width="100%" height="250px">
  <div class="showArt-body">
      <p>Technology has also given us brand new devices in recent decades, like smartwatches, tablets, and voice assistant devices. With these devices, we can do things like transfer money instantly and make purchases for everything from clothes,
       There is no denying that the advancements of technology over the last fifty years have been incredible. Communication technology has brought us closer than ever before and information has never been so accessible thanks to the power of the internet. There have been life-changing developments in medical fields and even the manufacturing 
       of vehicles is starting to move towards greener models to help the environment food delivery, groceries, furniture, and more.</p>
  </div> -->




        <img src="${serverURL}/uploads/${blog.blogImage}" alt="">
        <div class="blog_info">
            <ul class="blog_meta list">
                <li><a href="#">${date[0]} ${date[1]} ${date[2]} ${date[3]}<i class="lnr lnr-calendar-full"></i></a></li>
                <li onclick="handleLike('${blog._id}')">
                ${blog.likedBy.length} Like${blog.likedBy.length > 1 ?
      "s" : ""}<i
                  class="fa fa-heart${blog.likedBy.indexOf(localStorage.user_id) >= 0 ? '' : '-o'}"
                ></i>
              </li>
              <li>
                <a href="#"
                  >${blog.comments.length} Comment${blog.comments.length > 1 ? "s" : ""}<i
                    class="lnr lnr-bubble"
                  ></i
                ></a>
              </li>
            </ul>
        </div>
        <div class="blog_details">
            <a href="#"><h2>${blog.title}</h2></a>
            <p>${blog.body}</p>
        </div>`;
  commentsArea.children[0].innerHTML = `${blog.comments.length} Comment${blog.comments.length > 1 ? "s" : ""}`;
  blog.comments.map(comment => {
    let date = `${new Date(comment.date)}`.split(" ");
    commentsList.innerHTML += `<div class="single-comment ">
          <div class="user ">
          <div class="thumb">
            <img src="${comment.user[0].image.includes('ui-avatars') ? comment.user[0].image : `${globalURL}/img/users/${comment.user[0].image}`}" alt="">
          </div>
          <div class="desc">
            <h5>${comment.user[0].name}</h5>
            <p class="date"> ${date[2]} ${date[1]}  ${date[3]} at ${date[4].slice(0, -3)}</p>
            <p class="comment">
              ${comment.comment}
            </p>
          </div>
        </div>
        </div> `
  })

  commentForm.innerHTML = `<h4>Leave a Reply</h4>
        <form class="comment_form" action="#" method="post">
          <div class="form-group form-inline">
          <div class="form-group">
            <input type="hidden" name="id" id="userId" value="${blog._id} ">
            <textarea class="form-control " rows="5" name="message" id="message" placeholder="Message" required=""></textarea>
          </div>
          <div class="submit_btn_disable_comment disible-control"></div>
          <button type="submit" value="submit" class="btn submit_btn"> Post Comment</button>	
        
        </form>`;



  blogs.then(res => {
    const blogs = res.data.blogs;
    const values = blogs.map(object => object._id);
    let prevId = values.indexOf(blog._id) - 1;
    let nextId = values.indexOf(blog._id) + 1;
    if (prevId >= 0) {
      let prevBlog = blogs[prevId];
      navLeft.innerHTML = `<a href="./blog-details.html?blog_id=${prevBlog._id}">
          <div class="thumb">
            <div class="arrow">
              <span class="lnr lnr-arrow-left"></span>
            </div>
          </div>
          
          <div class="detials">
            <p>Prev Post</p>
              <h4> ${prevBlog.title.slice(15)}...</h4>
          </div>
           </a>`;
    }

    if (nextId < blogs.length) {
      let nextBlog = blogs[nextId];
      navRight.innerHTML = `
                <a href="./blog-details.html?blog_id=${nextBlog._id}">
              <div class="detials">
                <p>Next Post</p>
                <h4> ${nextBlog.title.slice(0, 15)}...</h4>
              </div>
        
              <div class="thumb">
              <div class="arrow">
                <span class="lnr lnr-arrow-right"></span>
              </div>
              </div>	
              </a>`
    }
  })



});



