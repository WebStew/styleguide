
'use strict';

module.exports = function ( grunt ) {

    var directories = require ( '../../../grunt/configuration/directories'  ) ( grunt ) ,
        files       = require ( '../../../grunt/configuration/files'        ) ( grunt ) ;

    grunt.config.set ( 'jscs' , {

        development : {
            src     : directories.development.javascripts.components + '/**/*.js'
        } ,
        options     : {
            config  : files.javascripts.format ,
            verbose : true
        } ,
        tasks       : {
            src     : directories.development.javascripts.tasks + '/**/*.js'
        }
    });

    grunt.loadNpmTasks ( 'grunt-jscs' );

};
