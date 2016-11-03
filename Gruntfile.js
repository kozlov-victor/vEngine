
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                    'resources/public/js/lib/oop.js',
                    'resources/public/js/controllers/*.js',
                    'resources/public/js/directives/*.js',
                    'resources/public/js/factories/*.js',
                    'resources/public/js/filters/*.js',
                    'resources/generatorResources/static/behaviour/*.js',
                    'resources/public/js/main.js'
                ],
                dest: 'resources//public/js/all.js'
            }
        },
        less: {
            production: {
                options: {},
                files: {
                    'resources/public/css/all.css':'resources/public/less/styles.less'
                }
            }
        }

    });


    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['concat','less']);


};