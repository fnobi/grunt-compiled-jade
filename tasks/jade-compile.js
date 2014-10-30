var jade = require('jade');

module.exports = function (grunt) {
    var TASK_NAME = 'compiled_jade';
    var TASK_DESCRIPTION = 'compile jade template.';

    grunt.registerMultiTask(TASK_NAME, TASK_DESCRIPTION, function () {
        var target = this.target;
        var config = grunt.config(TASK_NAME)[target];
        var done = this.async();

        var root = config.root || process.cwd();
        var opts = config;

        var template = opts.template || [];
        var dest = opts.dest;
        var runtime = opts.runtime;
        var prefix = opts.prefix || '';

        if (!template.forEach) {
            template = [template];
        }
        if (!dest) {
            console.error('error: config doesn\'t have "dest".');
            return;
        }

        var buf = [];
        template.forEach(function (pattern) {
            var files = grunt.file.expand({
                cwd: root
            }, pattern);
            files.forEach(function (file) {
                var fnName = (function () {
                    var basename = file.replace(/^(.*\/)+/, '').replace(/\.jade$/, '');
                    var parts = basename.split(/\-|_/g);
                    parts.forEach(function (part, index) {
                        if (index > 0 || prefix) {
                            parts[index] = part.slice(0, 1).toUpperCase() + part.slice(1);
                        }
                    });
                    return prefix + parts.join('');
                })();
                var source = grunt.file.read(file);
                var fn = jade.compileClient(source, {
                    filename: file,
                    name: fnName
                });
                buf.push(fn.toString());
            });
        });

        grunt.file.write(dest, buf.join('\n'));
    });
};










