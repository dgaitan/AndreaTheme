const gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	browser = require('browser-sync').create();

//compile sass
gulp.task('sass', function(){
	return gulp.src('./resources/sass/**/*.scss')
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(autoprefixer({ browsers: ['last 2 versions', 'not ie <= 8', 'Firefox > 20'] }))
		.pipe(gulp.dest('./assets/css'));
});

//minify js
gulp.task('minify', function(){
	return gulp.src('./resources/js/*.js')
		.pipe(uglify())
		.pipe(concat('datools.js'))
		.pipe(gulp.dest('./assets/js'));
});

//watch sass files
gulp.task('default', function(){
	browser.init({
		proxy: 'your-server'
	});
	gulp.watch('./*.php').on('change', browser.reload);
	gulp.watch('./*.css').on('change', browser.reload);
	gulp.watch('./template-parts/*.php').on('change', browser.reload);
	gulp.watch('./inc/*.php').on('change', browser.reload);
	gulp.watch('./assets/css/*.css').on('change', browser.reload);
	gulp.watch('./assets/js/*.js').on('change', browser.reload);
	gulp.watch('./resources/js/*.js', ['minify']);
	gulp.watch('./resources/sass/**/*.scss', ['sass']);
});