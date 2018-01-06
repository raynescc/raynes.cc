module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// LESS Task
		less: {
			development: {
				files: {
					// Core LESS
					"css/main.css": "less/main.less",
				}
			}
		},
		// LESS Watch
		watch: {
			less: {
				files: 'less/*.less',
				tasks: 'less'
			}
		}
	});
}
