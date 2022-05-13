let article = document.querySelector('.art-container');
const blogs = fetch(`${serverURL}/api/v1/articles`)

    .then(data => data.json());

blogs.then(res => {
    // console.log(res);
    res.posts.map(blog => {
        let date = `${new Date(blog.date)}`.split(" ");
        article.innerHTML += `<div class="art-item">
        <div class="art-image">
            <img class="blog-image" src="${serverURL}/uploads/${blog.blogImage}" alt="image" width="160px" height="110px">
        </div>
        <div class="art-info">
            <h3 class="art-title"> <a class="text-link" href="./showArticle.html">${blog.title}</a></h3>
            <div class="art-meta"> <span class="date">Published ${date[2]} ${date[1]} ${date[3]}</span> <span class="art-comment"> 
            <a class="text-link" href="#">${blog.comments.length} comments</a></span> 
            <a class="text-link" href="#">${blog.likes.length} likes</a></span>
            </div>
            <div class="art-intro">${blog.content.slice(0, 150)}...</div>
            <a class="text-link readMore" href="./showArticle.html"> Read more &rarr;</a>
        </div>
    </div>        `
    
    });
});
