const test = require('ava').test;
const loader = require('../index.js');


test('replace classnames with css module names', t => {
   const mockHTML = '<div class="hello">World</div>';
   const mockCSSModuleOut = { "hello": "g33t1ng5" };
   const result = loader(mockHTML)(mockCSSModuleOut);

   t.is(result, '<div class="g33t1ng5">World</div>');
});

test('multiple classnames', t => {
   const mockHTML = '<div class="hello olleh">World</div>';
   const mockCSSModuleOut = { "hello": "g33t1ng5", "olleh": "aloha" };
   const result = loader(mockHTML)(mockCSSModuleOut);

   t.is(result, '<div class="g33t1ng5 aloha">World</div>');
});
