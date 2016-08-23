
'use strict';

module.exports = function ( grunt ) {

    // Build your application
    grunt.registerTask ( 'build:public' , function () {

        grunt.task.run (
            [
                'clean:public'          ,
                'copy:images'           ,
                'jshint:tasks'          ,
                'jshint:development'    ,
                'jscs:tasks'            ,
                'jscs:development'      ,
                'yuidoc:development'    ,
                'sass:development'      ,
                'csslint:public'        ,
                'requirejs:development' ,
                'copy:javascripts'      ,
                'modernizr:public'      ,
                'clean:release'         ,
                'uglify:public'         ,
                'copy:styleguide'       ,
                'replace:styleguide'
            ]
        );

    });

};
