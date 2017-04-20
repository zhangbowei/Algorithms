import gulp from 'gulp';
import babel from 'gulp-babel';
import watch from 'gulp-watch';

gulp.task('babel',() => {
    gulp.src('src/simple.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', () => {
    gulp.watch('src/simple.js', ['babel']);
});
