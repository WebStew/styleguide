
'use strict';

module.exports = function ( grunt ) {

    var directories = require ( '../../../grunt/configuration/directories' ) ( grunt ) ,
        files       = require ( '../../../grunt/configuration/files'       ) ( grunt ) ,
        javascripts  = '';

    // Build the path to the temporary compiled JavaScript file by requireJS
    javascripts += directories.public.javascripts.components    + '/'       ;
    javascripts += directories.public.javascripts.temporary     + '/'       ;
    javascripts += files.javascripts.public                                 ;

    grunt.config.set ( 'copy' , {
        images      : {
            files   :  [
                {
                    dest    : directories.public.images.presentation        ,
                    expand  : true                                          ,
                    filter  : 'isFile'                                      ,
                    flatten : true                                          ,
                    src     : [
                        directories.development.images.presentation + '/*'
                    ]
                }
            ]
        }                                                                   ,
        javascripts : {
            files   : [
                {
                    dest    : directories.public.javascripts.components     ,
                    expand  : true                                          ,
                    filter  : 'isFile'                                      ,
                    flatten : true                                          ,
                    src     : [
                        javascripts
                    ]
                }                                                           ,
                {
                    dest    : directories.public.javascripts.vendor         ,
                    expand  : true                                          ,
                    filter  : 'isFile'                                      ,
                    flatten : true                                          ,
                    src     : [
                        directories.development.javascripts.loader + '/' + files.javascripts.loader
                    ]
                }
            ]
        }                                                                   ,
        styleguide  : {
            files   : [
                {
                    cwd     : directories.public.stylesheets                ,
                    dest    : directories.public.documentation.stylesheets  ,
                    expand  : true                                          ,
                    src     : [
                        '**/*'
                    ]
                }                                                           ,
                {
                    cwd     : directories.development.styleguide            ,
                    dest    : directories.public.documentation.styleguide   ,
                    expand  : true                                          ,
                    filter  : 'isFile'                                      ,
                    flatten : true                                          ,

                    rename  : function ( destination , source ) {

                        return destination + '/' + source.replace ( files.stylesheets.styleguide , 'index.html' );

                    }                                                       ,

                    src     : [
                        files.stylesheets.styleguide
                    ]
                }                                                           ,
                {
                    cwd     : directories.public.name                       ,
                    dest    : directories.public.documentation.styleguide   ,
                    expand  : true                                          ,
                    src     : [
                        'javascripts/**/*'
                    ]
                }
            ]
        }
    });

    grunt.loadNpmTasks ( 'grunt-contrib-copy' );

};
