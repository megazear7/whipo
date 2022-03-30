export default data => `
    <h1>Hello, World</h1>

    ${ data.movies.map(movie => `
        ${movie.title}
        ${movie.year}
        ${movie.rating} stars
    `)}
`;
