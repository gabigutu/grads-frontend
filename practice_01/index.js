 const moviestable = document.getElementById('movies');

    const movies = [
        {title: 'Fromula1', description: 'best sport', rating: 5,actors: ['hamilton', 'verstapen', 'vettel']},
        {title: 'Fotbal', description: 'Just Money', rating: 4.7,actors: ['messi', 'ronaldo', 'neymar']},
        {title: 'Tennis', description: 'Nice Sport', rating: 3,actors: ['djokovic', 'federer', 'nadal']},
    
    ];

    function adauga (){

        for (aux of movies){
            const tr = document.createElement('tr');
            const tdTitle = document.createElement('td');
            const tdDescription = document.createElement('td');
            const tdRating = document.createElement('td');
            const tdActors = document.createElement('td');

            const tdDelete = document.createElement('td');
            const deleteButton = document.createElement('button');
            deleteButton.innerText = 'Delete';
            


            deleteButton.addEventListener('click', function(){
                tr.remove();
            });
            tdDelete.appendChild(deleteButton);
            tr.appendChild(tdDelete);



            tdTitle.innerText = aux.title;
            tdDescription.innerText = aux.description;
            tdRating.innerText = aux.rating;
            for (actor of aux.actors){
                tdActors.innerText += actor + ' , ';
            }

            tr.appendChild(tdTitle);
            tr.appendChild(tdDescription);
            tr.appendChild(tdRating);
            tr.appendChild(tdActors);

            moviestable.appendChild(tr);

        }
             


    }

    function sortare(){

        

        const selVal = document.getElementById('select').value;
        switch(selVal){
            case 'title': movies.sort(function(a,b){ return a.title.localeCompare(b.title);}); break;
            case 'rating': movies.sort(function(a,b){ return a.rating - b.rating;}); break;
        }
    }