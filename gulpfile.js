var gulp = require('gulp')

// processHtml
var uglifyCss = require('gulp-uglifycss');
gulp.task('processHtml', () =>
{
    return gulp
    .src('./src/**/*.html')
    .pipe(uglifyCss())
    .pipe(gulp.dest('./dist'))
})

// processHandlebars


// processCss
gulp.task('processCss', () =>
{
    return gulp
    .src('./src/**/*.css')
    .pipe(uglifyCss())
    .pipe(gulp.dest('./dist'))
})

// processSass

// processJs
var minifyJs = require('gulp-terser')
gulp.task('processJs', () =>
{
    return gulp
    .src('./src/**/*.js')
    .pipe(minifyJs())
    .pipe(gulp.dest('dist'))
})

// processTs


// copyImgs
gulp.task('copyImgs', () =>
{
    return gulp.src('./src/**/*.{gif,jpg,png,svg,ico}')
    .pipe(gulp.dest('dist'))
})

// Called by 'default', watches for changes and recompiles changed files
gulp.task('watch', () =>
{
    // html
    gulp.watch('./src/**/*.html', gulp.series('processHtml'))

    // hbs

    // js
    gulp.watch('./src/**/*.js', gulp.series('processJs'))
    
    // ts

    // css
    gulp.watch('./src/**/*.css', gulp.series('processCss'))

    // scss

    // imgs
    gulp.watch('./src/**/*.{gif,jpg,png,svg,ico}', gulp.series('copyImgs'))
})

// Called by 'default', runs once compiling everything at the start
gulp.task('run', gulp.series([
    // html
    'processHtml', 

    // hbs

    // js
    'processJs',

    // ts

    // css
    'processCss', 

    // scss

    // imgs
    'copyImgs'
]))

// Called when you run gulp in the terminal
gulp.task('default', gulp.parallel(['run', 'watch']))