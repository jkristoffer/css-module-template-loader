const test = require('ava').test;
const stylesReplacer = styles => {
    return function(m, $0, $1){
      if(!$1) return $0;

      const classNames = $1;
      const newClassNames = classNames.split(' ')
                                      .map(n => styles[n] || n)
                                      .join(' ');

      return $0 + newClassNames;
   }   
}

const mockHTML = '<div class="hello olleh">World</div>';
const mockCSSModuleOut = { "hello": "g33t1ng5", "olleh": "aloha" };
const r = /(class=")([^"]+)/g;

test('replacer', t => {
   const result = mockHTML.replace(r, stylesReplacer(mockCSSModuleOut));

   t.is(result, '<div class="g33t1ng5 aloha">World</div>');
});

