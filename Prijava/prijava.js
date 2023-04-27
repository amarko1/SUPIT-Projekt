window.onload = () => {
    const form = document.getElementById('contact-form1');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // prevent the default form submission

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        fetch('https://www.fulek.com/data/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
            .then(response => {
                if (response.ok) {
                    // handle successful login
                    window.location.href = '../Pocetna/pocetna.html';
                } else {
                    // handle login error
                }
            })
            .catch(error => {
                console.error(error);
            });
    });
}
