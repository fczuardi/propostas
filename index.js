#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" --harmony_sloppy_let "$0" "$@"
require('shelljs/global');

const contents = cat('template.md');
const pattern = /___(.*?)___/g;
const placeholders = contents.match(pattern);

cp('template.md', 'p1.md');
placeholders.forEach( (placeholder) => {
    let varname = placeholder.replace(pattern, '$1');
    let value = env[varname];
    sed('-i', placeholder, value, 'p1.md');
});


echo(cat('p1.md'));
