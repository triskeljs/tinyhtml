/* global describe, it */

var tinyHTML = require('../tinyhtml'),
    assert = require('assert');

var snippet_script = `foo<script src="http://example.com/script.js">
    var hola = function caracola () {};
  </script>bar`;

describe('parsing tags', function () {

  it('foobar', function () {

    assert.strictEqual( tinyHTML(snippet_script, {
      processors: {
        script: function (_tag) {
          return 'foobar';
        }
      }
    }), `foofoobarbar`, 'accesing attributes');

  });

  it('script', function () {

    assert.strictEqual( tinyHTML(snippet_script, {
      processors: {
        script: function (tag) {
          tag._ = '';
        }
      }
    }), 'foo<script src="http://example.com/script.js"></script>bar', 'compress');

  });

  it('script attrs_str', function () {

    assert.strictEqual( tinyHTML(snippet_script, {
      processors: {
        script: function (tag, getContent, getAttrs) {
          tag._ = getAttrs();
        }
      }
    }), 'foo<script src="http://example.com/script.js"> src="http://example.com/script.js"</script>bar', 'compress');

  });

  it('script attrs', function () {

    assert.strictEqual( tinyHTML(snippet_script, {
      processors: {
        script: function (tag) {
          tag._ = 'var href = \'' + tag.attrs.src + '\';';
        }
      }
    }), `foo<script src="http://example.com/script.js">var href = 'http://example.com/script.js';</script>bar`, 'accesing attributes');

  });

});
