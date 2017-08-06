
const browserify = require('browserify');
const stringify = require('stringify');
const gulp = require('gulp');
const source = require('vinyl-source-stream');
const addSrc = require('gulp-add-src');
const concat = require('gulp-concat');
const less = require('gulp-less');
const path = require('path');


gulp.task('vendor', ()=> {
    return gulp.src([
            'client-app/vendor/split.js',
            'client-app/vendor/reactiveForms.js'
        ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('resources/public/js/build/'));
});

gulp.task('bundle', ()=> {
    return (
        browserify({
            entries: ['client-app/app/index.js'],
            paths: ['./client-app/app/']
        })
        .transform(stringify(['.html']))
        .transform("babelify", {
            presets: ["es2015"],
            plugins: ["transform-runtime"],
        })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('resources/public/js/build/'))
    )
});

gulp.task('less', ()=> {
    return gulp
        .src('client-app/main.less')
        .pipe(addSrc('client-app/app/**/*.less'))
        .pipe(concat('bundle.less'))
        .pipe(less())
        .pipe(gulp.dest('resources/public/css'));
});

gulp.task('default', ['vendor','bundle','less']);
gulp.task('js', ['bundle']);