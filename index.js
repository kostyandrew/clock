#!/usr/bin/env node

const term = require('terminal-kit').terminal;

term.fullscreen();

function write() {
    var width = term.width;
    var height = term.height;
    term.clear();
    term("\n");
    term(' ╭' + '╴'.repeat(width - 4) + '╮ ');
    term("\n");

    var top = Math.floor((height - 5) / 2);
    for (var i = 0; i < top; i++) {
        term(' ╵' + ' '.repeat(width - 4) + '╵ ');
        term("\n");
    }

    var date = (new Date).toLocaleString();
    var start = Math.floor((width - date.length - 4) / 2);
    var end = width - date.length - 4 - start;
    date = ' '.repeat(start) + date + ' '.repeat(end);
    term(' ╵' + date + '╵ ');
    term("\n");

    var bottom = height - 5 - top;
    for (var i = 0; i < bottom; i++) {
        term(' ╵' + ' '.repeat(width - 4) + '╵ ');
        term("\n");
    }
    term(' ╰' + '╴'.repeat(width - 4) + '╯ ');
}
write();

var writeint = setInterval(write, 1000);

term.on('terminal', function (name, data) {
    if (name === 'resize') {
        write();
        clearInterval(writeint);
        writeint = setInterval(write, 1000);
    }
});