
const browserify = require('browserify');
const stringify = require('stringify');
const gulp = require('gulp');
const source = require('vinyl-source-stream');
const addSrc = require('gulp-add-src');
const concat = require('gulp-concat');
const less = require('gulp-less');
const path = require('path');


gulp.task('js-vendor', ()=> {
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
gulp.task('js-bundle', ()=> {
    return (
        browserify({
            entries: ['web-app/bootstrap.js'],
            paths: ['./web-app/app/']
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
        .src('web-app/main.less')
        .pipe(addSrc('web-app/app/**/*.less'))
        .pipe(concat('bundle.less'))
        .pipe(less())
        .pipe(gulp.dest('resources/public/css'));
});

gulp.task('default', ['js-vendor','js-bundle','less']);