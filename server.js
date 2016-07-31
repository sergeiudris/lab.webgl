/**
 * Webgl widgets legacy code (http://serge-joggen.github.io/webgl-widgets-legacy)
 *
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
var express = require('express');
var port = 2000;
var app = express();
var fs = require('fs');
var path = require('path');

var html = [];
html.push('<ul>');
fs.readdirSync(path.join(__dirname, 'examples')).forEach(function (file) {
    if (fs.statSync(path.join(__dirname, 'examples', file)).isDirectory()) {
        //app.use(rewrite('/' + file + '/*', '/' + file + '/index.html'))
        html.push(['<li><a href="examples/', file, '">', file, '</a></li>'].join(''));
    }
})
html.push('</ul>');
html = html.join('');

//fs.writeFile('index.html',html);

app.use(express.static(__dirname));

app.get('/', function (req, res, next) {
    res.send(html);
});

app.listen(port, function () {
    console.log('>app is running on port ' + port + '\n>type   http://127.0.0.1:' + port + '   in your browser to use the application\n>to stop the server: press  ctrl + c');
});

