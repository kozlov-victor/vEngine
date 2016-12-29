
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
            'web-app/vendor/split.js',
            'web-app/vendor/vue.js',
            'web-app/vendor/vue-form.js',
            'web-app/vendor/vue-resources.js',
            'web-app/vendor/vue-router.js'
        ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('resources/public/js/build/'));
});

// process.env.NODE_ENV === "production"
// browserify -t vueify -e src/main.js -o build/build.js
gulp.task('js-bundle', function() {
    return (
        browserify({
            entries: ['web-app/bootstrap.js'],
            paths: ['./web-app/app/']
        })
        .transform(stringify(['.html']))
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('resources/public/js/build/'))
    )
});

gulp.task('less', function () {
    return gulp
        .src('web-app/main.less')
        .pipe(addSrc('web-app/app/**/*.less'))
        .pipe(concat('bundle.less'))
        .pipe(less())
        .pipe(gulp.dest('resources/public/css'));
});

gulp.task('default', ['js-vendor','js-bundle','less']);