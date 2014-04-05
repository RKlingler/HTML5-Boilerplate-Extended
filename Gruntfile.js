module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			build: {
				src: [
					'js/vendor/**/*.js',
					'js/**/*.js',
					'!js/vendor/jquery-1.11.0.min.js',
					'!js/vendor/modernizr-2.7.1.min.js'
				],
				dest: 'js-min/scripts.js'
			}
		},

		compass: {
			dist: {
				options: {
					config: 'config.rb'
				}
			}
		},

		watch: {
			scripts: {
				files: ['js/**/*.js'],
				tasks: ['uglify'],
			},
			styles: {
				files: ['sass/**/*.scss'],
				tasks: ['compass'],
			}
		}

	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('default', ['uglify', 'compass']);

};
