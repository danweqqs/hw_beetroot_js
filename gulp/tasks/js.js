import gulp from "gulp";

export const js = () => {
    return gulp.src(app.path.src.js)
        .pipe(gulp.dest(app.path.build.js))
        .pipe(app.plugins.browserSync.stream());
};