
'use strict';

module.exports = function ( grunt ) {

    var directories = require ( '../../../grunt/configuration/directories'  ) ( grunt ) ,
        files       = require ( '../../../grunt/configuration/files'        ) ( grunt ) ;

    grunt.config.set ( 'jshint' , {
        development     : [
            directories.development.javascripts.components + '/**/*.js'
        ] ,
        options         : {
            jshintrc    : files.javascripts.lint
        } ,
        tasks           : [
            directories.development.javascripts.tasks + '/**/*.js'
        ]
    });

    grunt.loadNpmTasks ( 'grunt-contrib-jshint' );

};
