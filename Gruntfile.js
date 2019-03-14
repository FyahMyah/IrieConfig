module.exports = function (grunt) {

  let FILES_TO_WATCH = ['modules/**/*.mjs', 'test/**/*.mjs', 'test/**/*.js'];
  // Project configuration.
  grunt.initConfig({
    watch: {
      scripts: {
        files: FILES_TO_WATCH,
        tasks: ['jshint']
      },
      options: {
        livereload: true
      }
    },

    jshint: {
      options: {
        jshintrc: true,
        reporter: require('jshint-stylish')
      },
      all: FILES_TO_WATCH
    },

    connect: {
      server: {
        options: {
          livereload: true,
          port: 9001,
          base: [
            'tests', 'modules'
          ]
        }
      }
    }
  });

  // Load the plugin that provides the "connect" task.
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['connect', 'watch']);

};