/**
 * Created by Sergio on 3/25/2015.
 */
/**
 * Created by Sergio on 2/24/2015.
 */

var gulp = require("gulp"),
    sourcemaps = require("gulp-sourcemaps"),
    babel = require("gulp-babel"),
    concat = require("gulp-concat"),
    del = require('del'),
    runSequence = require('run-sequence'),
    watch = require('gulp-watch'),
    webServer = require('gulp-webserver'),
    opn = require('opn'),
    plumber = require('gulp-plumber');



gulp.task("default", function (cb) {
    runSequence('clean', 'copy:html', 'copy:img', 'copy:svg', 'copy:css', 'copy:json', 'copy:vendor', 'scripts', 'webserver', 'watch', 'open:browser', cb);
});

gulp.task("watch", function(){

    gulp.watch('app/index.html', ["copy:html"]);
    gulp.watch("app/svg/**", ["copy:svg"]);
    gulp.watch("app/json/**", ["copy:json"]);
    gulp.watch("app/css/**", ["copy:css"]);
    gulp.watch("app/img/**", ["copy:img"]);
    gulp.watch("app/js/**/*.js", ["scripts"]);
});

gulp.task('webserver', function() {
    gulp.src( '.' )
        .pipe(webServer({
            host:             'localhost',
            port:             '8000',
            livereload:       true,
            directoryListing: false
        }));
});

gulp.task('open:browser', function() {
    opn( 'http://' + 'localhost' + ':' + '8000/dist/' );
});


// Copy files and assests
gulp.task("copy:html", function () {
    gulp.src("app/index.html")
        .pipe(plumber())
        .pipe(gulp.dest("dist"));
});

gulp.task("copy:svg", function () {
    gulp.src("app/svg/**/*.svg")
        .pipe(plumber())
        .pipe(gulp.dest("dist/svg"));
});

gulp.task("copy:json", function () {
    gulp.src("app/json/**/*.json")
        .pipe(plumber())
        .pipe(gulp.dest("dist/json"));
});


gulp.task("copy:vendor", function () {
    gulp.src("bower_components/**/*.js")
        .pipe(plumber())
        .pipe(gulp.dest("dist/vendor"));
});

gulp.task("copy:css", function () {
    gulp.src("app/css/**")
        .pipe(gulp.dest("dist/css"));
});

gulp.task("copy:img", function () {
    gulp.src("app/img/**")
        .pipe(plumber())
        .pipe(gulp.dest("dist/img"));
});

gulp.task("clean", function (cb) {
    del([
        'dist/**'
    ], cb);
});

gulp.task("scripts", function () {
    gulp.src(["app/js/**/*.js"])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(babel({modules: "amd"}))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("dist/js"));
});