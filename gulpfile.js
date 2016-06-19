"use strict"

var gulp = require("gulp")
var browserify = require("browserify")
var source = require("vinyl-source-stream")
var livereload = require('gulp-livereload')
var watchify = require('watchify')

gulp.task("default", () => {
	livereload.listen()
	var bundler = browserify("./src/components/index.jsx")
		.plugin(watchify, {ignoreWatch: './src/components/*'})
		.transform("babelify", {presets: ["es2015", "react"]})
	bundle(bundler)
	bundler.on('update', function () {
		bundle(bundler)
	})
})

function bundle(bundler) {
  bundler
    .on('error', function (err) {
    	console.error(err.message)
    	this.emit('end')
  	})
    .bundle()
    .pipe(source('bundle.js')) // Set source name
    .pipe(gulp.dest("./public/dist"))
    .pipe(livereload()); // Reload the view in the browser
}