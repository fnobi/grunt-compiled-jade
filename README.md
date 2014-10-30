grunt-compiled-jade
====

compile jade template.

### install

```
% cd your/grunt/project/root
% npm install grunt-compiled-jade --save-dev
```

### usage

```javascript:Gruntfile.js
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compiled_jade: {
            dev: {
            }
        }
    });

    grunt.loadNpmTasks('grunt-compiled-jade');

    grunt.registerTask('default', ['compiled_jade:dev']);
};
```
