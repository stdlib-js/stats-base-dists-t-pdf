/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var uniform = require( '@stdlib/random-array-uniform' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var pkg = require( './../package.json' ).name;
var pdf = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var len;
	var x;
	var v;
	var y;
	var i;

	len = 100;
	x = uniform( len, -10.0, 10.0 );
	v = uniform( len, 0.1, 10.0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = pdf( x[ i % len ], v[ i % len ] );
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':factory', function benchmark( b ) {
	var mypdf;
	var v;
	var x;
	var y;
	var i;

	v = 2.0;
	mypdf = pdf.factory( v );
	x = uniform( 100, -2.0, 2.0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = mypdf( x[ i % x.length ] );
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
