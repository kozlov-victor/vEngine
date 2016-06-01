
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                    'editor/public/js/lib/oop.js',
                    'editor/public/js/dataStructure/models.js',
                    'editor/public/js/dataStructure/collections.js',
                    'editor/public/js/dataStructure/bundle.js',
                    'editor/public/js/controllers/*.js',
                    'editor/public/js/directives/*.js',
                    'editor/public/js/factories/*.js',
                    'editor/public/js/main.js'
                ],
                dest: 'editor/public/js/all.js'
            }
        }

    });


    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['concat']);


};