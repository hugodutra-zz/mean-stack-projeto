module.exports = function(grunt) {
	
	grunt.initConfig({

		copy: {
			project: {
				expand: true, 
				cwd: '.',
				src: ['**', '!Gruntfile.js', '!package.json', '!public/bower.json', '!*.md'],
				dest: 'dist'
			}
		}, 

		clean: {
			dist: {
				src: ['dist']		
			}, 
			garbage: {
				src: ['dist/public/vendor',
					  'dist/public/javascripts/main.js',
					  'dist/public/javascripts/controllers',
					  'dist/public/javascripts/services']
			}
		}, 

		usemin: {

			html: ['dist/app/views/**/*.ejs']
		}, 

		useminPrepare: {
			options: {
				root: 'dist/public',
				dest: 'dist/public'
			},

			html: ['dist/app/views/**/*.ejs']
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