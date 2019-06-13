const gulp = require('gulp'),
sass = require('gulp-sass'),
browserSync = require('browser-sync'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer');


const paths = {
    styles: {
        src: './app/assets/styles/**/*.scss',
        dest: './app/temp/styles/'
    },
    scripts: {
        src: './app/assets/scripts/**/*.js',
        dest: './app/temp/scripts/'
    }
};


// Styles
function styles(done) {
    console.log('Starting styles task');
    return gulp.src(paths.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer]))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.stream());
        done();
}

exports.styles = styles;


// Scripts


// Images


// Watch
function watch() {
    browserSync.init({
        notify: false,
        server: {
            baseDir: 'app'
        }
    });

    gulp.watch(paths.styles.src, styles);
    gulp.watch('./app/*.html').on('change', browserSync.reload);
}

// Build


// Exports
exports.watch = watch;

