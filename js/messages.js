
const jwt = localStorage.getItem("token");

const message_list = document.querySelector('.tab');

    fetch(`${serverURL}/api/v1/messages`, {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json',
            'jwt': jwt
        },
    })
    .then(data=> data.json())
        .then(res => {
            console.log(res)
            res.getMessages.map(giveMeMessage => {
                let date = `${new Date(giveMeMessage.date)}`.split(" ");

                message_list.innerHTML += ` 
                <tr>
                    <td>${giveMeMessage.name}</td>
                    <td>${giveMeMessage.email}</td>
                    <td>$${date[2]} ${date[1]} ${date[3]}</td>
                    <td>${giveMeMessage.message}</td>
                    <td>delete</td>
                </tr>
                `;
            });
        }
        ).catch(err=>{
            console.log(err);
        });




