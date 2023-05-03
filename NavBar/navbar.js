function ShowMenu(id) {
    const menu = document.getElementById(id);
    if (menu.className === 'ul') {
        menu.className += ' responsive';
    } else {
        menu.className = 'ul';
    }
}

// document.addEventListener('DOMContentLoaded', () => {
//     const menu = document.querySelector('#header');
//     // document.querySelector('body').addEventListener('click', () => {
//     //     menu.className = 'ul';
//     // });

//     const nastavniPlan = document.getElementsByTagName('li')[5];
//     nastavniPlan.style.display = 'none';

//     if (sessionStorage.getItem('Prijava') === 'true') {
//         const liElement = document.getElementsByTagName('li')[0]; // bug bio na [1]
//         while (liElement.firstChild) {
//             liElement.removeChild(liElement.firstChild);
//         }
//         const aElement = document.createElement('a');
//         aElement.href = '#';
//         const iElement = document.createElement('i');
//         iElement.className = 'fa-solid fa-arrow-left';
//         aElement.appendChild(iElement);
//         aElement.text = "odjavi ";
//         const spanElement = document.createElement('span');
//         spanElement.textContent = sessionStorage.getItem('username');
//         aElement.appendChild(spanElement);
//         liElement.appendChild(aElement);
//         document.getElementsByTagName('span')[0].style.color = '#40ACFC';
//         nastavniPlan.style.display = 'block';

//         liElement.addEventListener('click', () => {
//             sessionStorage.setItem('Prijava', false);
//             sessionStorage.setItem('token', null);
//             window.location.href = '../Pocetna/Početna.html';
//         });
//     }
// });

$(() => {
    const nastavniPlan = document.getElementsByTagName('li')[5];

    if(sessionStorage.getItem('Prijava') === 'true'){
        let liElement = $('li')[0];
        $(liElement).empty();
        $(liElement).append(`<a href="#"><i class="fa-sharp fa-solid fa-right-from-bracket"></i> odjavi <span style="margin-left: 5px;">${sessionStorage.getItem('username')}</span></a>`);
        document.getElementsByTagName('span')[0].style.color = '#40ACFC';

        nastavniPlan.style.display = 'block';

        $(liElement).on('click', () => {
            sessionStorage.setItem('Prijava', false);
            sessionStorage.setItem('token', null);
            window.location.href = '../Pocetna/Početna.html';
        });
    }
});
