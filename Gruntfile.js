module.exports = function(grunt) {

	grunt.initConfig({
		jshint: {
			all: [
				'src/jquery.musketeer.js'
			]
		},
		uglify: {
			options: {
				output: {
					comments: 'some'
				}
			},
			yastorage: {
				src: 'node_modules/ya-js-storage/src/index.js',
				dest: 'tmp/ya-js-storage.min.js'
			},
			musketeer: {
				src: 'src/jquery.musketeer.js',
				dest: 'tmp/jquery.musketeer.min.js'
			}
		},
		concat: {
			all: {
				src: [
					'node_modules/barba.js/dist/barba.min.js',
					'tmp/ya-js-storage.min.js',
					'tmp/jquery.musketeer.min.js'
				],
				dest: 'dist/jquery.musketeer-bundle.min.js'
			}
		},
		watch: {
			all: {
				files: [
					'src/jquery.musketeer.js'
				],
				tasks: [ 'jshint:all', 'uglify:yastorage', 'uglify:musketeer', 'concat:all' ]
			}
		}
	});

	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-concat' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );

	grunt.registerTask( 'default', [ 'watch:all' ] );

};
