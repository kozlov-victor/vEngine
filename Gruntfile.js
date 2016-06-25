
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                    'resources/public/js/lib/oop.js',
                    'resources/public/js/dataStructure/models.js',
                    'resources/public/js/dataStructure/collections.js',
                    'resources/public/js/dataStructure/bundle.js',
                    'resources/public/js/controllers/*.js',
                    'resources/public/js/directives/*.js',
                    'resources/public/js/factories/*.js',
                    'resources/generatorResources/static/behaviour/*.js',
                    'resources/public/js/main.js'
                ],
                dest: 'resources//public/js/all.js'
            }
        }

    });


    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['concat']);


};