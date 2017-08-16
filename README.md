# Initial motivations

This project was conceived when it was decided to use [CSS modules](https://github.com/css-modules/css-modules) to an 
[Angular@1.x](https://angularjs.org/) project that is bundled together using [Webpack@1.x](https://webpack.github.io/docs).

As with angular you assign a template to a controller/component/directive by supplying them with a `template` or `templateURL`. 
Ideally `templateURL` are used for larger and more complex templates but supplying it this way will result in a HTTP request
each time a template is required. Here's where [$templateCache](https://docs.angularjs.org/api/ng/service/$templateCache)
comes in and you're back to writing your long and complex HTML template into a string in javascript. Now there are solutions
out there that could all these for you and keep you sane ([Grunt](https://github.com/ericclemmons/grunt-angular-templates) |
 [Gulp](https://github.com/miickel/gulp-angular-templatecache) | [Rails](https://github.com/pitr/angular-rails-templates)). 
 In webpack it's much easier, you could skip the entire $templateCache and simply get away with `template: require('./mytemplate')`
, effectively inlining your templates into your post-build javascript files.

With this `css-module-template-loader`, it goes one step further.
