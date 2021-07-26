var gulp = require('gulp')
var uglifyCss = require('gulp-uglifycss');
const minifyJs = require('gulp-terser')

gulp.task('processHbs', () =>
{
    return gulp
    .src('./src/**/*.hbs')
    .pipe(uglifyCss())
    .pipe(gulp.dest('./dist'))
})

gulp.task('processCss', () =>
{
    return gulp
    .src('./src/**/*.css')
    .pipe(uglifyCss())
    .pipe(gulp.dest('./dist'))
})

gulp.task('processJs', () =>
{
    return gulp
    .src('./src/**/*.js')
    .pipe(minifyJs())
    .pipe(gulp.dest('dist'))
})

gulp.task('copyImgs', () =>
{
    return gulp.src('./src/**/*.{gif,jpg,png,svg,ico}')
    .pipe(gulp.dest('dist'))
})

gulp.task('watch', () =>
{
    gulp.watch('./src/**/*.css', gulp.series('processCss'))
    gulp.watch('./src/**/*.js', gulp.series('processJs'))
    gulp.watch('./src/**/*.hbs', gulp.series('processHbs'))
    gulp.watch('./src/**/*.{gif,jpg,png,svg,ico}', gulp.series('copyImgs'))
})

gulp.task('run', gulp.series([
    'processCss', 
    'processHbs', 
    'processJs',
    'copyImgs'
]))

gulp.task('default', gulp.parallel(['run', 'watch']))