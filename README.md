# Whipo

Quickly whip up server side rendered web applications using express and template literals.

See the docs at [whipo.alexlockhart.me](http://whipo.alexlockhart.me/).

## Get started

```js
nvm use 16
npm install whipo --global
whipo init my-app
cd my-app
npm install
npm start
```

Open [localhost:5000](http://localhost:5000/)

## Other CLI Options

| Option             | Alias  | Description | Default |
| ------------------ | ------ | ----------- | ------- |
| `--service-worker` | `--sw` | Include a service worker in the generated project | `false` |
| `--api-keys`       | `--ak` | Include a gitignored env file for api keys        | `false` |

## API Keys

If you need access to API keys, move the `stub.env.js` file to `.env.js` and fill this file with the keys.
Then, import this file anywhere under src/server as shown below.

```js
import env from '../../.env.js';
```

## Support

[Buy me a coffee](https://www.buymeacoffee.com/alexlockhart)

[Patreon](https://www.patreon.com/alexlockhart)
