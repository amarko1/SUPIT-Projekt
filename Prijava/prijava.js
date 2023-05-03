sessionStorage.setItem('Prijava', false);
sessionStorage.setItem('username', null);
sessionStorage.setItem('token', null);

document.addEventListener('DOMContentLoaded', () => {
  const forma = document.querySelector('form');
  let pElement = document.createElement('p');

  forma.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(forma);
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
          Message('Uspjesna prijava! Na početnu stranicu za 3,2,1...', forma, pElement);
          setTimeout(() => {
            window.location.href = '../Pocetna/Početna.html';
          }, 3000);
        } else {
            Message('User not found', forma, pElement);
        }
      })
      .catch(error => console.log(error));
  });
});

function Message(msg, forma, pelement) {
  pelement.innerHTML = msg;
  pelement.style.color = 'red';
  pelement.style.paddingTop = '5px';
  forma.appendChild(pelement);
}