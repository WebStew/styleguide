
'use strict';

module.exports = function ( grunt ) {

    var directories = require ( '../../../grunt/configuration/directories'  ) ( grunt ) ,
        files       = require ( '../../../grunt/configuration/files'        ) ( grunt ) ;

    grunt.config.set ( 'sass' , {
        development : {
            files   : [
                {
                    cwd     : directories.development.stylesheets   ,
                    dest    : directories.public.stylesheets        ,
                    expand  : true                                  ,
                    ext     : '.css'                                ,
                    src     : [
                        files.stylesheets.development
                    ]
                }
            ]                                                       ,
            options : {
                precision   : 3                                     ,
                sourcemap   : 'none'                                ,
                style       : 'compressed'
            }
        }
    });

    grunt.loadNpmTasks ( 'grunt-contrib-sass' );

};
