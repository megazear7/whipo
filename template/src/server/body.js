export default data => `
    <div class="container">
        <h1>Whipo Example</h1>

        <div class="movie-container">
            ${ data.movies.map(movie => `
                <div class="movie">
                    <div class="movie-content">
                        <h2>${movie.title} <span class="movie-year">(${movie.year})</span></h2>
                        <div class="movie-rating">${movie.rating}/10</div>
                    </div>
                </div>
            `).join('')}
        </div>
    </div>
`;
