
var parseHTML = require('@triskel/parser'),
    stringifyNodes = require('@triskel/stringify');

function tinyhtml (html, options) {
  return stringifyNodes( parseHTML(html, options), options );
}

tinyhtml.parse = parseHTML;
tinyhtml.stringify = stringifyNodes;

module.exports = tinyhtml;
