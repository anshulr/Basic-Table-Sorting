module.exports = function(grunt) {
  grunt.initConfig({
    jasmine : {
      // Your project's source files
      src : 'src/**/*.js',
      // Your Jasmine spec files
      specs : 'spec/**/*.js',
    },
    phantomjs : {
    'ignore-ssl-errors' : true
  }
  });

  // Register tasks.
  grunt.loadNpmTasks('grunt-jasmine-runner');

  // Default task.
  grunt.registerTask('default', 'jasmine');
};
