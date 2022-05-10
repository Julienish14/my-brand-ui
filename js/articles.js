let article = document.querySelector('.blg-cont');
const blogs = fetch(`${backEndURL}/api/v1/articles`)
    .then(data => data.json());

blogs.then(res => {
    res.data.blogs.map(blog => {
        let date = `${new Date(blog.date)}`.split(" ");
        article.innerHTML += ` <div class="blg-date">${date[0]} ${date[1]} ${date[2]} ${date[3]}</div>
        <div class="blg-title">${blog.title}</div>
        <div class="blg-cont">
            <p>${blog.content.slice(0, 150)}...</p>
        </div>
        <div class="blg-underline"></div>
        <div class="blg-img"> <img src="${backEndURL}/img/blog/${blog.blogImage}" width="80%" height="90%" alt=""> </div> 
        <div class="blg-readM"> <a href="../pages/blogdisplay.html">More..</a></div>        `
    });
});
