var fs = require('fs')

const htmlTemplate = fs.readFileSync('template.html', 'utf-8');
console.log(htmlTemplate);