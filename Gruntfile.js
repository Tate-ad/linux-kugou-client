/* Grunt file */

module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            "files": ['Gruntfile.js', 'app/public/js/*.js'],
            "jshintrc": ".jshintrc"
        },
        watch: {
            script: {
                files: ['app/public/js/*.js', 'Gruntfile.js'],
                options: {
                    event: ['all']
                },
                tasks: ['jshint']
            }
        }
    });
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.registerTask("default", ['watch']);
};
