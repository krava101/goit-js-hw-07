const form = document.querySelector(".login-form");
const user = {}
const handleSubmit = (event) => {
    event.preventDefault()
    const userEmail = form.elements.email;
    const userPassword = form.elements.password;
    const withOutSpace = e => e.replace(/\s/g, "");
    if (withOutSpace(userEmail.value) === "" && withOutSpace(userPassword.value) === "") {
        alert('All form fields must be filled in');
    } else {
        user.email = withOutSpace(userEmail.value);
        user.password = withOutSpace(userPassword.value);
        console.log(user);
        form.reset();
    }
}
form.addEventListener("submit", handleSubmit)

