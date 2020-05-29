const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('buildAssets', function() {
    return gulp.src('scss/app.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist'));
});

gulp.task('watchAssets', function() {
    gulp.watch('app/**/*.scss', gulp.series(['buildAssets']));
});
