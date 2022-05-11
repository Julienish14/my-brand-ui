const jwt = localStorage.getItem("token");

const message_list = document.querySelector('.messages-list');

    fetch('http://localhost:4500/api/v1/messages', {
        method: 'GET', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': jwt
        },
    })

    .then(res => {
        console.log(res)
        res.data.message.map(giveMeMessage => {
            message_list.innerHTML += ` <tr>
            <td>${giveMeMessage.name}</td>
            <td>${giveMeMessage.email}</td>
            <td>${giveMeMessage.date}</td>
            <td>${giveMeMessage.message}</td>
            <td>delete</td>
            </tr>
             `;
        });
    }
    ).catch(err=>{
        console.log(err);
    });
