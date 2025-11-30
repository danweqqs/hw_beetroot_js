import browserSync from "browser-sync";

export const server = () => {
    browserSync.init({
        server: {
            baseDir: app.path.build.html
        },
        notify: false
    });
};