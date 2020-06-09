const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('buildAssets', function() {
    return gulp.src('app/scss/app.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist'));
});

gulp.task('watchAssets', function() {
    return gulp.watch('app/**/*.scss', gulp.series(['buildAssets']));
});
