// adaugare event listeneri pe campurile cu clasa saveme
const campuriSalvabile = document.querySelectorAll('.saveme'); // document.getElementsByClassName('saveme');
for (camp of campuriSalvabile) {
    camp.addEventListener('keyup', function() {
        salveazaCamp(this);
    });

    const numeElement = camp.attributes.getNamedItem('name').value;
    const valoareElement = localStorage.getItem(numeElement) 
    if (valoareElement === null) continue;

    // selectam elementul din pagina corespunzator lui numeElement si ii modificam valoare
    const campCompletabil = document.getElementsByName(numeElement)[0];
    campCompletabil.value = valoareElement;
    console.log(campCompletabil, valoareElement);
}

function salveazaCamp(camp) {
    // console.log(camp);
    const numeElement = camp.attributes.getNamedItem('name').value;
    const valoareElement = camp.value;
    // console.log(numeElement, valoareElement);
    localStorage.setItem(numeElement, valoareElement);
}
// cand se introduce text, salvam in locastorage perechea (nume_camp, valoare_camp)

// la incarcarea paginii se verifica datele din localStorage si se inclocuiesc 
// in pagina cele cu numele nume_camp cu valoarea valoare_camp


