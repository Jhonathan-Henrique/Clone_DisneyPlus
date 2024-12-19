const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles(){
	return gulp.src('./src/styles/*.scss') //Aqui é onde vamos pegar os arquivos fonte.
		.pipe(sass({ outputStyle: 'compressed' })) //Os arquivos de saida serão comprimidos.
		.pipe(gulp.dest('./dist/css')); // Aqui vai ser o destino dos arquivos comprimidos.
}

function images(){
	return gulp.src('./src/images/**/*') //Aqui é onde vamos pegar os arquivos fonte.
		.pipe(imagemin()) 
		.pipe(gulp.dest('./dist/images')); // Aqui vai ser o destino dos arquivos comprimidos.
}

exports.default = gulp.parallel(styles, images);

exports.watch = function() {
	gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}