
// jscs:disable
// jscs:enable

'use strict';

/**
 * This the global application namespace.
 *
 * @module STYLEGUIDE
 * @author Stuart Pretorius
 */
requirejs (
    [
        'components/example'
    ] ,

    function ( example ) {

        example.setup ();

    }
);
