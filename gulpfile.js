var gulp = require('gulp'),
	sass = require('gulp-sass');
	del = require('del');

gulp.task('sass', function() {
	return gulp.src('app/sass/**/*.sass')
	.pipe(sass())
	.pipe(gulp.dest('app/css'))
});

gulp.task('clean', function() {
	return del.sync('dist');
	cd();
});

gulp.task('img', function() {
	return gulp.src('app/img/**/*')
	.pipe(gulp.dest('dist/img'))
});

gulp.task('css', function() {
	return gulp.src('app/css/main.css')
	.pipe(gulp.dest('dist/css'))
});

gulp.task('fonts', function() {
	return gulp.src('app/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'))
});

gulp.task('owlcarousel', function() {
	return gulp.src('app/owlcarousel/**/*')
	.pipe(gulp.dest('dist/owlcarousel'))
});

gulp.task('html', function() {
	return gulp.src('app/*.html')
	.pipe(gulp.dest('dist'))
});

gulp.task('script', function() {
	return gulp.src('app/js/*.js')
	.pipe(gulp.dest('dist/js'))
});

gulp.task('watch', function() {
	gulp.watch('app/sass/**/*.sass', gulp.series('sass')); 
});