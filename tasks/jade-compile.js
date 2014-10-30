module.exports = function (grunt) {
    var TASK_NAME = 'jade_compile';
    var TASK_DESCRIPTION = 'compile jade template.';

    grunt.registerMultiTask(TASK_NAME, TASK_DESCRIPTION, function () {
        var target = this.target;
        var config = grunt.config(TASK_NAME)[target];
        var done = this.async();

        var root = config.root || process.cwd();
        var opts = config;

        console.log('jade compile');
    });
};
