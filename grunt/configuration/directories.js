
'use strict';

module.exports = function () {

    return {

        development : {
            images              : {
                presentation    : 'stylesheets/css/images'
            }                                               ,
            javascripts         : {
                components      : 'javascripts'             ,
                loader          : 'node_modules/requirejs'  ,
                tasks           : 'grunt'
            }                                               ,
            styleguide          : 'example'                 ,
            stylesheets         : 'stylesheets/scss'
        }                                                   ,

        public      : {
            documentation       : {
                javascripts     : 'public/documentation/javascripts'            ,
                styleguide      : 'public/documentation/styleguide'             ,
                stylesheets     : 'public/documentation/styleguide/stylesheets'
            }                                                                   ,
            images              : {
                presentation    : 'public/stylesheets/images'
            }                                                                   ,
            javascripts         : {
                components      : 'public/javascripts'                          ,
                temporary       : 'temporary'                                   ,
                vendor          : 'public/javascripts/vendor'
            }                                                                   ,
            name                : 'public'                                      ,
            stylesheets         : 'public/stylesheets'
        }
    };

};
