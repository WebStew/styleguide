
'use strict';

module.exports = function ( grunt ) {

    var directories = require ( '../../../grunt/configuration/directories'  ) ( grunt ) ,
        files       = require ( '../../../grunt/configuration/files'        ) ( grunt ) ;

    grunt.config.set ( 'csslint' , {
        public              : {
            files           : [
                {
                    src     : [
                        directories.public.stylesheets + '/**/*.css'
                    ]
                }
            ]                                                           ,
            options         : {
                csslintrc   : files.stylesheets.lint                      ,
                import      : 2
            }
        }
    });

    grunt.loadNpmTasks ( 'grunt-contrib-csslint' );

};
