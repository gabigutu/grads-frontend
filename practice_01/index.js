const moviestable = document.getElementById('movies');

const initialMovies = [
    { title: 'Fromula1', description: 'best sport', rating: 5, actors: ['hamilton', 'verstapen', 'vettel'] },
    { title: 'Fotbal', description: 'Just Money', rating: 4.7, actors: ['messi', 'ronaldo', 'neymar'] },
    { title: 'Tennis', description: 'Nice Sport', rating: 3, actors: ['djokovic', 'federer', 'nadal'] },

];

function adauga(movies) {
    console.log(movies);

    for (aux of movies) {
        const tr = document.createElement('tr');
        const tdTitle = document.createElement('td');
        const tdDescription = document.createElement('td');
        const tdRating = document.createElement('td');
        const tdActors = document.createElement('td');

        const tdDelete = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';



        deleteButton.addEventListener('click', function () {
            tr.remove();
        });
        tdDelete.appendChild(deleteButton);



        tdTitle.innerText = aux.title;
        tdDescription.innerText = aux.description;
        tdRating.innerText = aux.rating;
        for (actor of aux.actors) {
            tdActors.innerText += actor + ',';
        }

        tr.appendChild(tdTitle);
        tr.appendChild(tdDescription);
        tr.appendChild(tdRating);
        tr.appendChild(tdActors);
        tr.appendChild(tdDelete);

        moviestable.appendChild(tr);
    }
}

const adaugaFilmeButton = document.getElementById('adaugaFilme');
adaugaFilmeButton.addEventListener('click', function () {
    adauga(initialMovies);
});

function sortare() {
    const selVal = document.getElementById('select').value;
    switch (selVal) {
        case 'title': movies.sort(function (a, b) { return a.title.localeCompare(b.title); }); break;
        case 'rating': sortareRating(); break;
    }
}

function sortareRating() {
    // movies.sort(function (a, b) { return a.rating - b.rating; });
    const movieRows = moviestable.getElementsByTagName('tr');
    const currentMovies = [];
    for (movie of movieRows) {
        if (movie.classList.contains('header-row')) continue;
        console.log(movie, typeof movie);
        currentMovies.push({
            title: movie.getElementsByTagName('td')[0].innerText,
            description: movie.getElementsByTagName('td')[1].innerText,
            actors: movie.getElementsByTagName('td')[3].innerText.split(','),
            rating: movie.getElementsByTagName('td')[2].innerText
        });
    }
    // currentMovies.splice(0, 1);
    // console.log(currentMovies);

    let auFostSchimbari;
    do {
        auFostSchimbari = false;
        for (let i = 0; i < currentMovies.length - 1; i++) {
            if (currentMovies[i].rating > currentMovies[i + 1].rating) {
                auFostSchimbari = true;
                [currentMovies[i], currentMovies[i + 1]] = [currentMovies[i + 1], currentMovies[i]];
            }
        }
    } while (auFostSchimbari);
    console.log(currentMovies);
    moviestable.innerHTML = '<tr class="header-row"> ' +
        '<td>Title</td>' +
        '<td>Description</td> ' +
        '<td>Acthors</td>' +
        '<td>Rating</td>' +
        '<td>Actions</td>' +
        '</tr>';
    adauga(currentMovies);
}