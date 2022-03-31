const copydir = require('copy-dir');
const path = require('path');

module.exports = class WhipoInit {
    constructor(argv) {
        this.argv = argv;
    }

    run() {
        const template = path.join(__dirname, '../template');
        const target = path.join(process.cwd(), this.argv.name);
        console.log(template, target);
        copydir.sync(template, target, {
            filter: function (stat, filepath, filename) {
                // TODO service worker
                return true;
             }
        });
    }
}
