
'use strict';

module.exports = function ( grunt ) {

    var directories = require ( '../../../grunt/configuration/directories' ) ( grunt );

    grunt.config.set ( 'clean' , {
        options     : {
            force   : true
        } ,
        public      : {
            src     : [
                directories.public.name
            ]
        } ,
        release     : {
            src     : [
                directories.public.javascripts.components + '/' + directories.public.javascripts.temporary
            ]
        }
    });

    grunt.loadNpmTasks ( 'grunt-contrib-clean' );

};
