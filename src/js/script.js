let numberOfFilms;

function start(){

    numberOfFilms = +prompt('How many films you already watched?');

    while(numberOfFilms == '' || numberOfFilms == null ||isNaN(numberOfFilms)){
        numberOfFilms = +prompt('How many films you already watched?');
    }

}
start()

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    generes: [],
    privat: false
}

function showMyDB(){
    if (personalMovieDb.privat == false ){
            console.log(personalMovieDb);
    }
}
    showMyDB();


function rememberMyFilms() {

    for (let i = 0; i < 2; i++){
        const watched_films = prompt('One of last watched films'),
              rate = prompt('How match do you rate it');

    if(watched_films !== '' && rate !== '' && watched_films !== null && rate !== null && watched_films.length < 50){
                console.log('cool');
                personalMovieDb.movies [watched_films] = rate;
            }else{
                console.log('error');
                i--
             }
        }
}rememberMyFilms()

function detectedPersonalLevel() {

    if (personalMovieDb.count < 10) {
        console.log('watched quite few film');
    } else if(personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
        console.log("you are a classic spectator");
    } else if(personalMovieDb.count >= 30 ) {
        console.log('you are a cinephile');
    }else{
        console.log('Error');
    }

}
detectedPersonalLevel()

function writeYourGenres(){
    for(let i = 1; i < 4; i++){
        let answer = prompt(`Your favorite genre is numbred ${i}`);
        personalMovieDb.generes[i-1] = answer
    }

}writeYourGenres()
console.log(personalMovieDb);