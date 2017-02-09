/** 
 * Author Juan Kristoffer @jkristoffer
 **/

const cheerio = require('cheerio');
const cssModuleTemplateLoader = content => {
   const $ = cheerio.load(content);
   
   // styles:<css-loader output>
   return styles => {
      Object.keys(styles).forEach(k => {
         $(`.${k}`).removeClass(k).addClass(styles[k]);
      });

      return $.html();
   };
};

module.exports = cssModuleTemplateLoader;
