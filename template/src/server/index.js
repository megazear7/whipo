import express from 'express';
import App from './app.js';

const server = express();
const port = 5000;
const app = new App();

server.get('/', async (req, res) => {
    const html = await app.render(req);
    res.send(html);
});
server.use(express.static('src/client'));
server.listen(port, () => console.log(`Example app listening on port ${port}`));
