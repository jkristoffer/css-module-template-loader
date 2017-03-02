/** 
 * Author Juan Kristoffer @jkristoffer
 **/

const cheerio = require('cheerio');
const cssModuleTemplateLoader = content => {
   // styles:<css-loader output>
   function fn(styles){
      var html = "--PLACEHOLDER--";
      function stylesReplacer(styles){
          return function(m, $0, $1){
            if(!$1) return $0;

            var classNames = $1;
            var newClassNames = classNames.split(" ")
                                            .map(n => styles[n] || n)
                                            .join(" ");

            return $0 + newClassNames;
         }   
      }
      var regexp = /(class=["'])([^"']+)/g;

      return html.replace(regexp, stylesReplacer(styles));
   };
   function clean(content) {
      return content.replace(/[\t\n]/g, "");
   }
   
   return 'module.exports = ' + clean(fn.toString()).replace('"--PLACEHOLDER--"', JSON.stringify(clean(content)));
};

const replacer = classnames => classnames.split(' ')
                                         .map(n => styles[n] || n)
                                         .join(' ');

module.exports = cssModuleTemplateLoader;
