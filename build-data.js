const fs = require('fs');
const path = require('path');
const readline = require('readline');
const base_path = './blog';

function isMarkdownFile(file_name) {
    return path.extname(file_name) === '.md'
}

async function processLineByLine() {
    var fileStream = fs.createReadStream('./Hi there.md');

    var rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    for await (let line of rl) {
        // input.txt 中的每一行在这里将会被连续地用作 `line`。
        console.log(`Line from file: ${line}`);
    }
}

processLineByLine();

function asyncTravel(dir, callback, finish) {
    fs.readdir(dir, function (err, files) {
        if (err === null) {
            // todo
            (function next(i) {
                if (i < files.length) {
                    var pathname = path.join(dir, files[i]);

                    fs.stat(pathname, function (err, stats) {
                        if (stats.isDirectory()) {
                            asyncTravel(pathname, callback, function () {
                                next(i + 1);
                            });
                        } else {
                            console.log(stats);
                            console.log(stats.ctime.getTime());
                            callback(err, pathname, function () {
                                next(i + 1)
                            })
                        }

                    })
                } else {
                    finish && finish();
                }
            }(0));
        } else {
            callback(e);
        }
    })
}

// asyncTravel(base_path, function (err, pathname, next) {
//     console.log(pathname);
//     next();
// });