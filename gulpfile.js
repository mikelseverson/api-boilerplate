var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var replace = require('gulp-html-replace');
var sourcemap = require('gulp-sourcemaps');

gulp.task('content', () => {
	gulp.src('./client/index.html')
		.pipe(gulp.dest('./server/public/dist'))
		.pipe(reload({stream: true}));
});

gulp.task('styles', () => {
	gulp.src('./client/styles/*.css')
		.pipe(minifyCSS())
		.pipe(gulp.dest('./server/public/dist/styles'))
		.pipe(reload({stream: true}));
});

gulp.task('scripts', () => {
	gulp.src('./client/scripts/*.js')
		.pipe(sourcemap.init())
			.pipe(uglify())
			.pipe(concat('app.js'))
		.pipe(sourcemap.write())
		.pipe(gulp.dest('./server/public/dist/scripts'))
		.pipe(reload({stream: true}));
});

gulp.task('serve', () => {
browserSync.init({
	proxy: "localhost:5000"
})
	gulp.watch('./client/*.html', ['content']);	
	gulp.watch('./client/styles/*.css', ['styles']);
	gulp.watch('./client/scripts/*.js', ['scripts']);	
});