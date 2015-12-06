var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('build', function() {
    var src = [
        './src/gfl-text-avatar.module.js',
        './src/gfl-text-avatar.directive.js',
        './src/gfl-text-avatar.service.js'];

    gulp.src(src)
        .pipe(concat('gfl-text-avatar.js'))
        .pipe(gulp.dest('./dist/'))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('default', [
    'build'
]);
