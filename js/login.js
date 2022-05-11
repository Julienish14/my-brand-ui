const loginform=document.querySelector('#form');
loginform.addEventListener('submit', async (e) => {
    e.preventDefault();
const email = document.getElementById('email').value;
  const password = document.getElementById('pwd').value;
  if (email == '' || password == '') {
    alert(warning, 'Please fill empty fields !!');
    return 0;
  }
  try {
    const res = await axios.post(`${globalURL}/api/v1/users/login`, {
      email,
      password,
    });
    localStorage.setItem(`token`,`${res.data.token}`);
    localStorage.setItem(`isAdmin`,`${res.data.user[0].isAdmin}`);
    alert( 'Logged in successfully');
    setTimeout(() => {
      if(localStorage.getItem("isAdmin") == "true"){
        return location.assign('../admin/index.html');
      }
      location.assign('../pages/blogs.html');
    }, 3000);
  } catch (error) {
    console.log(error);
    if (error.response?.status === 401) {
      alert(`Wrong email or password`);
    } else {
      alert(`${error.message}`);
    }
  }
})














