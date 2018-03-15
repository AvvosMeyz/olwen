
module.exports = function(grunt){

    grunt.initConfig({

        concat: {
          js: {
            src: ['src/js/animation.js', 'src/js/main.js',],
            dest: 'build/js/scripts.js',
          },
          css: {
            src: ['src/main.css', 'src/css/theme.css',],
            dest: 'build/css/style.css',
          },
        },
          watch: {
            js: {
              files: ['src/js/**/*.js'],
              tasks: ['concat:js'],
            },
            css: {
                files: ['src/css/**/*.css'],
                tasks: ['concat:css'],
              },
          },
      });

      
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['concat','watch']);
};