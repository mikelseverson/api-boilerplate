var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sourcemap = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var eslint = require('gulp-eslint');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var imagemin = require('gulp-imagemin')
var imageminPngquant = require('imagemin-pngquant');
var babel = require('gulp-babel');

gulp.task('default', ['content', 'copy-images', 'styles', 'lint'], () => {
	gulp.watch('./client/*.html', ['content']);	
	gulp.watch('./client/images/*', ['copy-images']);	
	gulp.watch('./client/stylesheets/sass/**/*.scss', ['styles']);
	gulp.watch('./client/scripts/*.js', ['lint', 'scripts']);	
})

gulp.task('serve', ['content', 'copy-images', 'styles', 'lint', 'scripts'], () => {
browserSync.init({
	proxy: "localhost:5000"
})
	gulp.watch('./client/*.html', ['content']);	
	gulp.watch('./client/images/*', ['copy-images']);	
	gulp.watch('./client/stylesheets/sass/**/*.scss', ['styles']);
	gulp.watch('./client/scripts/*.js', ['scripts']);	
});

gulp.task('content', () => {
	gulp.src('./client/index.html')
		.pipe(gulp.dest('./server/public/dist'))
		.pipe(reload({stream: true}));
});

gulp.task('copy-images', () => {
	gulp.src('./client/images/*')
	.pipe(imagemin({
		progressive: true,
		use: [imageminPngquant()]
		}))
	.pipe(gulp.dest('server/public/dist/images'))
})

gulp.task('styles', () => {
	gulp.src('./client/stylesheets/sass/**/*.scss')
		.pipe(sass({
			outputStyle: 'compressed'
			}).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest('./server/public/dist/stylesheets'))
		.pipe(reload({stream: true}));

	gulp.src('./client/stylesheets/css/**/*.css')
		.pipe(gulp.dest('./server/public/dist/stylesheets'))
		.pipe(reload({stream: true}));
});

gulp.task('scripts', () => {
	gulp.src('./client/scripts/**/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(sourcemap.init())
		.pipe(concat('app.js'))
		.pipe(uglify())
		.pipe(sourcemap.write())
		.pipe(gulp.dest('./server/public/dist/scripts'))
		.pipe(reload({stream: true}));
});

gulp.task('lint', () => {
	return gulp.src(['js/**/*.js'])
	.pipe(eslint.format())
	.pipe(eslint.failOnError());
});
