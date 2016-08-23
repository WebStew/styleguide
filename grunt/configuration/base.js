
'use strict';

module.exports = function ( grunt ) {

    return {
        public  : grunt.file.readJSON ( 'package.json'          ) ,
        require : grunt.file.readJSON ( 'requirejs-config.js'   )
    };

};
