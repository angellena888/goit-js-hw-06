const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
    event.preventDefault();

    const { elements: { email, password } } = event.currentTarget;

    const formData = {
        email,
        password,
    };

    email.value === '' || password.value === '' ? alert('Заповніть всі поля!') : console.log(form.Data);

    console.log(`Login: ${email.value},
    Password: ${password.value}`);

    event.currentTarget.reset();
});
