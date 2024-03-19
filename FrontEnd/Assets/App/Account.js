const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const title = document.querySelector('title') ;

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
    title.innerHTML = "Next Buy - Register"
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
    title.innerHTML = "Next Buy - Login"
});