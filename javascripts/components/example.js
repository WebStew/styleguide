
/**
 * This is an example of a submodule within the global application namespace.
 *
 * @module      STYLEGUIDE
 * @submodule   components
 *
 */

'use strict';

/**
 * Class example documentation
 *
 * USAGE:
 * ----------------------------------------
 * var example = require ( 'components/example' );
 *
 * example.setup();<br>
 *
 * @class example
 * @static
 */
define ( function () {

    return {

        /**
         * Example exported method.
         *
         * @method setup
         * @public
         * @example
         *      example.setup();
         */
        setup : function () {

            console.log ( 'Your module example script' );

        }
    };

});
