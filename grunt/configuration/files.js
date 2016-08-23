
'use strict';

module.exports = function () {

    return {
        javascripts     : {
            feature     : 'modernizr.js'            ,
            format      : '.jscsrc'                 ,
            lint        : '.jshintrc'               ,
            loader      : 'require.js'              ,
            public      : 'styleguide.js'
        }                                           ,
        stylesheets     : {
            development : 'HTML5.scss'              ,
            lint        : '.csslintrc'              ,
            public      : 'HTML5.css'               ,
            styleguide  : 'demonstration.html'
        }
    };

};
