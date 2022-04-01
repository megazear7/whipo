import page from './page.js';
import body from './body.js'

export default class App {
    constructor(req) {
        this.req = req;
    }

    async render() {
        return page(body(await this.data()));
    }

    async data() {
        // Pass in whatever data you need to render on the page.
        // This is an async function, so you can make API calls if needed.
        return {
            movies: [{
                    title: "Lord of the Rings: The Fellowship of the Ring",
                    year: 2001,
                    rating: 10
                }, {
                    title: "Dune",
                    year: 2021,
                    rating: 9
                }, {
                    title: "A Map of Tiny Perfect Things",
                    year: 2021,
                    rating: 10
                }
            ]
        }
    }
}
