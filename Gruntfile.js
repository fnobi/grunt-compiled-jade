module.exports = function (grunt) {
    grunt.loadTasks('tasks');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        release: {
            options: { }
        }
    });

    grunt.loadNpmTasks('grunt-release');
    grunt.registerTask('default', []);
};
