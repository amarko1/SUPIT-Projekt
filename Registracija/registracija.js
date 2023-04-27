window.onload = () => {
    const form = document.querySelector('#contact-form1');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;

        fetch('https://www.fulek.com/data/api/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: email,
                password: password
            })
        })
            .then(response => {
                if (response.status === 200) {
                    window.location.href = '../Prijava/prijava.html';
                };
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    });
}