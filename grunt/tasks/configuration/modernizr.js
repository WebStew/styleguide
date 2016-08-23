
'use strict';

module.exports = function ( grunt ) {

    var directories = require ( '../../../grunt/configuration/directories' ) ( grunt ) ,
        files       = require ( '../../../grunt/configuration/files'       ) ( grunt ) ;

    grunt.config.set ( 'modernizr' , {
        public                  : {
            dest                : directories.public.javascripts.vendor + '/' + files.javascripts.feature   ,
            extensibility       : {
                addtest         : false                                                                     ,
                cssclassprefix  : ''                                                                        ,
                domprefixes     : false                                                                     ,
                hasevents       : false                                                                     ,
                prefixed        : false                                                                     ,
                prefixes        : false                                                                     ,
                testallprops    : false                                                                     ,
                testprops       : false                                                                     ,
                teststyles      : false

            }                                                                                               ,
            extra               : {
                cssclasses      : true                                                                      ,
                load            : true                                                                      ,
                mq              : false                                                                     ,
                printshiv       : false                                                                     ,
                shiv            : true
            }                                                                                               ,
            matchCommunityTests : false                                                                     ,
            options             : [
                'setClasses'
            ]                                                                                               ,
            parseFiles          : true                                                                      ,
            tests               : [
                'cssanimations'                                                                             ,
                'cssgradients'                                                                              ,
                'csstransforms'                                                                             ,
                'mq'                                                                                        ,
                'opacity'                                                                                   ,
                'svg'                                                                                       ,
                'touch'
            ]                                                                                               ,

            // We uglify in a central uglify task for all JavaScript files
            uglify              : false
        }
    });

    grunt.loadNpmTasks ( 'grunt-modernizr' );

};
