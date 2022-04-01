import '/example.js';

/*
The JS is loaded at the bottom of the page, so you do not need to wait for the dom load
or anything like that. You can use ES6 import statements since this is a module.
*/

console.log('Add your JS to the src/client/app.js file.');

const allMovies = () => document.querySelectorAll('.movie');
const deactivateMovie = movie => movie.classList.remove('active');
const deactivateAllMovies = () => allMovies().forEach(otherMovie => deactivateMovie(otherMovie));
const activateMovie = movie => movie.classList.add('active');

allMovies().forEach(movie => {
    movie.addEventListener('click', () => {
        deactivateAllMovies()
        activateMovie(movie);
    })
});
