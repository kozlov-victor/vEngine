
var browserify = require('browserify');
var stringify = require('stringify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var addSrc = require('gulp-add-src');
var concat = require('gulp-concat');
var less = require('gulp-less');
var path = require('path');


gulp.task('js-vendor', function() {
    return gulp.src([
            'web-app/js/vendor/split.js',
            'web-app/js/vendor/vue.js',
            'web-app/js/vendor/vue-resources.js',
            'web-app/js/vendor/vue-router.js'
        ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('resources/public/js/build/'));
});


gulp.task('js-bundle', function() {
    return (
        browserify({
            entries: ['web-app/js/bootstrap.js'],
            paths: ['./web-app/js/app/']
        })
        .transform(stringify(['.hjs', '.html']))
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('resources/public/js/build/'))
    )
});

gulp.task('less', function () {
    return gulp
        .src('web-app/less/main.less')
        .pipe(addSrc('web-app/js/app/**/*.less'))
        .pipe(concat('bundle.less'))
        .pipe(less())
        .pipe(gulp.dest('resources/public/css'));
});

gulp.task('default', ['js-vendor','js-bundle','less']);