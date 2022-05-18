let main_Art = document.querySelector('showArt-cont');
let commentPart = document.querySelector('comment-part');
let commentArea = document.querySelector('comment-area');

const showArticle = fetch(`${serverURL}/api/v1/articles`)

    .then(data => data.json());

showArticle.then(res => {
    // console.log(res);
    res.posts.map(blog => {
        let date = `${new Date(blog.date)}`.split(" ");
        main_Art.innerHTML += `
                <h2 class="showArt-title">${blog.title}</h2>
               <div class="showArt-intro">
                   <p>Modern technology has paved the way for multi-functional devices like the smartwatch and the smartphone. 
                    Computers are increasingly faster, more portable, and higher-powered than ever before. 
                    With all of these revolutions, technology has also made our lives easier, faster, better, and more fun.</p>
               </div>
               <img src="../img/tech.jpeg" alt="" width="100%" height="250px">
               <div class="showArt-body">
                   <p>Technology has also given us brand new devices in recent decades, like smartwatches, tablets, and voice assistant devices. With these devices, we can do things like transfer money instantly and make purchases for everything from clothes,
                    There is no denying that the advancements of technology over the last fifty years have been incredible. Communication technology has brought us closer than ever before and information has never been so accessible thanks to the power of the internet. There have been life-changing developments in medical fields and even the manufacturing 
                    of vehicles is starting to move towards greener models to help the environment food delivery, groceries, furniture, and more.</p>
               </div>
         `
    
    });
});
