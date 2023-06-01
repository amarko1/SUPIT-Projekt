$(() => {
    let zaglavlje = true;
    let ects = [];
    let sati = [];
    let predavanja = [];
    let vjezbe = [];
    let ukupno = [ects, sati, predavanja, vjezbe];

    $('#odabirKolegija').autocomplete({
        source: (request, response) => {
            ucitajKolegije().then(data => {
                const filteredData = data.filter((item) => item.kolegij.includes(request.term));
                response(filteredData.map((item) => item.kolegij));
            });
        },
        select: (e, ui) => {
            if(zaglavlje){
                $('table').append('<tr><th>Kolegij</th><th>ECTS</th><th>Sati</th><th>Predavanja</th><th>Vježbe</th><th>Tip</th></tr>');
                zaglavlje = false;
            }

            ucitajKolegije().then(data => {
                const kolegij = data.filter((item) => item.kolegij === ui.item.label);
                $('table').append(`<tr><td>${kolegij[0].kolegij}</td><td>${kolegij[0].ects}</td><td>${kolegij[0].sati}</td><td>${kolegij[0].predavanja}</td><td>${kolegij[0].vjezbe}</td><td>${kolegij[0].tip}</td><td><button type='button' class='btn btn-danger'>Delete</button></td></tr>`);
                
                UpdateUkupnoNakonSelect(ukupno, kolegij);

                $('button').slice(-1).on('click', function (){
                    const tr = $(this).parent().parent();
                    const index = $(tr).index() - 1; //index -1, jer se ne racuna prvi tr koji je header tablice
                    ukupno.forEach(value => {
                        value.splice(index, 1);
                    });
                    $(tr).remove();
                    if(Sum(ects) != 0){
                        $('tfoot').remove();
                        $('table').append(`<tfoot><tr><td>Ukupno</td><td>${Sum(ects)}</td><td>${Sum(sati)}</td><td>${Sum(predavanja)}</td><td>${Sum(vjezbe)}</td></tr></tfoot>`);
                    }else{
                        $('tr')[0].remove();
                        $('tfoot').remove();
                        zaglavlje = true;
                    }
                });

                
                $('tfoot').remove();
                $('table').append(`<tfoot><tr><td>Ukupno</td><td>${Sum(ects)}</td><td>${Sum(sati)}</td><td>${Sum(predavanja)}</td><td>${Sum(vjezbe)}</td></tr></tfoot>`);
                $('#odabirKolegija').val('');
            });
        }
    });
});

const ucitajKolegije = async () => {
    const response = await fetch('https://www.fulek.com/data/api/supit/curriculum-list/hr', {
        headers: {
            Authorization: 'Bearer ' + sessionStorage.getItem('token'),
            'content-type': 'application/json'
        }
    });
    const data = await response.json();
    return data.data;
};

function UpdateUkupnoNakonSelect(ukupno, kolegij){
    ukupno[0].push(kolegij[0].ects);
    ukupno[1].push(kolegij[0].sati);
    ukupno[2].push(kolegij[0].predavanja);
    ukupno[3].push(kolegij[0].vjezbe);
};

function Sum(arr){
    let sum = 0;

    arr.forEach(value => {
        sum += value;
    });

    return sum;
};
