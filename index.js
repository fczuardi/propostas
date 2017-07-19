require('shelljs/global');

const contents = cat('template.md');
console.log({contents})
const pattern = /___(.*?)___/g;
const placeholders = contents.match(pattern);

console.log(placeholders);

cp('template.md', 'p1.md');
placeholders.forEach( (placeholder) => {
    let varname = placeholder.replace(pattern, '$1');
    let value = env[varname];
    sed('-i', placeholder, value, 'p1.md');
});


echo(cat('p1.md'));
