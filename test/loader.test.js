const test = require('ava').test;
const loader = require('../index.js');
const getMockLoaderResult = source => {
   const fn = loader(source);
   const m = new module.constructor();

   m._compile(fn, './test.js');
   return m.exports;
};


test('replace classnames with css module names', t => {
   const mockHTML = '<div class="hello">World</div>';
   const mockCSSModuleOut = { "hello": "g33t1ng5" };
   const result = getMockLoaderResult(mockHTML)(mockCSSModuleOut);

   t.is(result, '<div class="g33t1ng5">World</div>');
});

test('multiple classnames', t => {
   const mockHTML = '<div class="hello olleh">World</div>';
   const mockCSSModuleOut = { "hello": "g33t1ng5", "olleh": "aloha" };
   const result = getMockLoaderResult(mockHTML)(mockCSSModuleOut);

   t.is(result, '<div class="g33t1ng5 aloha">World</div>');
});


test('no tabs or new lines', t => {
   const mockHTML = '<div class="hello olleh">\n\tWorld\n</div>';
   const mockCSSModuleOut = { "hello": "g33t1ng5", "olleh": "aloha" };
   const result = getMockLoaderResult(mockHTML)(mockCSSModuleOut);

   t.is(result.indexOf('\t'), -1);
   t.is(result.indexOf('\n'), -1);
});

test('single and double quotes', t => {
   const mockCSSModuleOut = { "hello": "g33t1ng5", "olleh": "aloha" };
   
   const mockHTML = '<div class="hello olleh">\n\tWorld\n</div>';
   const mockHTML2 = "<div class='hello olleh'>\n\tWorld\n</div>";
   const mockHTML3 = "<div class=\"hello olleh\">\n\tWorld\n</div>";
   const mockHTML4 = '<div class=\"hello olleh\">\n\tWorld\n</div>';

   const result = getMockLoaderResult(mockHTML)(mockCSSModuleOut);
   const result2 = getMockLoaderResult(mockHTML2)(mockCSSModuleOut);
   const result3 = getMockLoaderResult(mockHTML3)(mockCSSModuleOut);
   const result4 = getMockLoaderResult(mockHTML4)(mockCSSModuleOut);

   t.is(result, '<div class="g33t1ng5 aloha">World</div>');
   t.is(result2, "<div class='g33t1ng5 aloha'>World</div>");
   t.is(result3, "<div class=\"g33t1ng5 aloha\">World</div>");
   t.is(result4, '<div class=\"g33t1ng5 aloha\">World</div>');
});
