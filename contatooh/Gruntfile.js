module.exports = function(grunt) {
	
	grunt.initConfig({

		copy: {
			project: {
				expand: true, 
				cwd: '.',
				src: ['**', '!Gruntfile.js', '!package.json', '!public/bower.json'],
				dest: 'dist'
			}
		}, 

		clean: {
			dist: {
				src: ['dist']		
			}, 
			garbage: {
				src: ['dist/public/bower_components',
					  'dist/public/javascripts/main.js',
					  'dist/public/javascripts/controller',
					  'dist/public/javascripts/service']
			}
		}, 

		usemin: {

			html: ['dist/public/**/*.html']
		}, 

		useminPrepare: {
			options: {
				dest: 'dist/public'
			},

			html: ['dist/public/**/*.html']
		}, 

		ngmin: {
			all: {
				expand: true,
				cwd: '.tmp/concat/javascripts',
				src: '**/*.js',
				dest: '.tmp/concat/javascripts'
			}
		},
	});

	grunt.registerTask('default', ['dist', 'minify', 'clean:garbage']);
	grunt.registerTask('dist', ['clean:dist', 'copy']);
	grunt.registerTask('minify', ['useminPrepare', 'concat', 'ngmin', 'uglify', 'cssmin', 'usemin']);

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-usemin');
	grunt.loadNpmTasks('grunt-ngmin');
}