const copydir = require('copy-dir');
const path = require('path');
const fileWalker = require('./file-walker');
const fs = require('fs');

module.exports = class WhipoInit {
    constructor(argv) {
        this.argv = argv;
    }

    run() {
        const template = path.join(__dirname, '../template');
        const target = path.join(process.cwd(), this.argv.name);
        console.log(template, target);
        copydir.sync(template, target, {
            filter: (stat, filepath, filename) => {
                if (!this.argv.sw && filename === 'sw.js') {
                    return false;
                }

                if (!this.argv.ak && filename === 'stub.env.js') {
                    return false;
                }

                return true;
             }
        });

        fileWalker(target, file => {
            const fileContent = fs.readFileSync(file, "utf8");
            fs.writeFileSync(file, this.convert(fileContent));
        }, directory => {
            console.log(directory);
        });
    }

    convert(content) {
        if (! this.argv.sw) {
            content = content.replace(/% IF SW %(.|\n)*% END IF SW %/g, '')
        }

        // Remove the comments used for the find and replace.
        content = content.replace(/\/\*%.*%\*\/(\r\n|\n|\r)/g, '')

        return content;
    }
}
