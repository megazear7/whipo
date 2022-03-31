# Whipo

Quickly whip up web applications

## TODO

Need to use the `template` folder to generate a project with a global cli command.

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

| Option | Alias | Description | Default | 
| ------ | ----- | ----------- | ------- |
| `--service-worker` | `--sw` | Include a service worker in the generated project | `false` |

## API Keys

If you need access to API keys, move the `stub.env.js` file to `.env.js` and fill this file with the keys.
Then, uncomment the .env.js import in the App.js file, or wherever else you need it.

## Support

[Buy me a coffee](https://www.buymeacoffee.com/alexlockhart)

[Patreon](https://www.patreon.com/alexlockhart)
