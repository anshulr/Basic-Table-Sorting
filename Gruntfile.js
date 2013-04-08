module.exports = function(grunt) {
  grunt.initConfig({
    jasmine : {
	customTemplateTask : {
		src: 'src/**/*.js',
		options: {
			specs: 'spec/*Spec.js',
			helpers: 'spec/*Helper.js',
			template: 'custom.tmpl'
		}
	}
    },
    jshint: {
      all: [
        'Gruntfile.js',
        'src/**/*.js',
        'spec/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  
  grunt.registerTask('test', ['jshint', 'jasmine']);

  // Default task.
  grunt.registerTask('default', ['test']);
};
