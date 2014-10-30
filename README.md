grunt-jade-compile
====

compile jade template.

### install

```
% cd your/grunt/project/root
% npm install grunt-jade-compile --save-dev
```

### usage

```javascript:Gruntfile.js
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jade_compile: {
            dev: {
            }
        }
    });

    grunt.loadNpmTasks('grunt-jade-compile');

    grunt.registerTask('default', ['jade_compile:dev']);
};
```
