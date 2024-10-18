
function check() {
    let username = document.getElementById("userInp").value;
    let password = document.getElementById("passInp").value;

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    const savedUsername = JSON.parse(localStorage.getItem('username'))
    const savedPassword = JSON.parse(localStorage.getItem('password'))

}