$(() => {
    const nastavniPlan = document.getElementsByTagName('li')[4];
    nastavniPlan.style.display = 'none';

    if (sessionStorage.getItem('Prijava') === 'true') {
        let liElement = $('li')[0];
        $(liElement).empty();
        $(liElement).append(`<a href="#"><i class="fa-sharp fa-solid fa-right-from-bracket"></i> odjavi <span style="margin-left: 5px;">${sessionStorage.getItem('username')}</span></a>`);
        document.getElementsByTagName('span')[0].style.color = '#0000FF';

        nastavniPlan.style.display = 'block';

        $(liElement).on('click', () => {
            sessionStorage.setItem('Prijava', false);
            sessionStorage.setItem('token', null);
            window.location.href = '../Pocetna/Početna.html';
        });
    }
});
