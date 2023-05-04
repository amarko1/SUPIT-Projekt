sessionStorage.setItem('Prijava', false);
sessionStorage.setItem('username', null);
sessionStorage.setItem('token', null);

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  let pElement = document.createElement('p');

  form.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    fetch('https://www.fulek.com/data/api/user/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => response.json())
      .then(data => {
        if (data.statusCode === 200) {
          sessionStorage.setItem('Prijava', true);
          sessionStorage.setItem('username', data.data.username);
          sessionStorage.setItem('token', data.data.token);
          Message('Uspjesna prijava! Na početnu stranicu za 3,2,1...', form, pElement);
          setTimeout(() => {
            window.location.href = '../Pocetna/Početna.html';
          }, 3000);
        } else {
            Message('User not found', form, pElement);
        }
      })
      .catch(error => console.log(error));
  });
});

function Message(msg, form, pelement) {
  pelement.innerHTML = msg;
  pelement.style.color = 'red';
  pelement.style.paddingTop = '5px';
  form.appendChild(pelement);
}