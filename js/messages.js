
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
                    <td>${date[2]} ${date[1]} ${date[3]}</td>
                    <td>${giveMeMessage.message}</td>
                    <td><button onClick="deleteMessage('${giveMeMessage._id}')">Delete</button></td>
                    
                </tr>
                `;
            });
        }
        ).catch(err=>{
            console.log(err);
        });

        async function deleteMessage(id) {
            try {
                
                    await fetch(`${serverURL}/api/v1/messages/${id}`, {
                        method: 'DELETE', 
                        headers: {
                            'Content-Type': 'application/json',
                            'jwt': jwt
                        },
                    })
                alert('Message deleted...');
                location.reload()
            } catch (error) {
              
                if (error) {
                    alert(`${error.message}`);
                } else {
                    alert(`${error.message}`);
                }
            }
        };


