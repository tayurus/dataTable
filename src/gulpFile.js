var gulp = require('gulp');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

var srcPath = {
    htmlSrc: "html/**/*.html",
    imgSrc: ["**/*.png", "**/*.jpg", "**/*.svg"],
    cssSrc: ["**/*.css"],
    jsSrc: [  "**/*.js", "!gulpFile.js", "!node_modules/**/*.js"]
}

var distSrc = {
    dist: "../dist/"
}

gulp.task('build', function() {
    gulp.src(srcPath.htmlSrc).pipe(gulp.dest(distSrc.dist));

    gulp.src(srcPath.cssSrc).pipe(rename({
        dirname: ''
    })).pipe(concat("styles.css")).pipe(gulp.dest(distSrc.dist));

});
