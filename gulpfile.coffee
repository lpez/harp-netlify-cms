# Load all required libraries.
gulp               = require('gulp')

#libraries for the server
harp               = require('harp')
browserSync        = require('browser-sync')
reload             = browserSync.reload

#CSS libraries
purify             = require('gulp-purifycss')
minifyCSS          = require('gulp-csso')

#image optimization libraries
imagemin           = require('gulp-imagemin')
imageminGuetzli    = require('imagemin-guetzli')
imageminMozjpeg    = require('imagemin-mozjpeg')

#libraries to make it easy to compile
cp                 = require('child_process')
runSequence        = require('run-sequence')

# Serve the Harp Site from the src directory
gulp.task 'serve', ->
  harp.server __dirname + '/site', { port: 9000 }, ->
    browserSync
      proxy: 'localhost:9000'
      open: false
      notify: styles: [
        'opacity: 0'
        'position: absolute'
      ]

    # Watch for scss changes, tell BrowserSync to refresh main.css
    gulp.watch [
      './site/**/*.css'
      './site/**/*.sass'
      './site/**/*.scss'
      './site/**/*.less'
    ], ->
      reload 'main.css', stream: true

    # Watch for all other changes, reload the whole page
    gulp.watch [
      './site/**/*.html'
      './site/**/*.ejs'
      './site/**/*.jade'
      './site/**/*.js'
      './site/**/*.json'
      './site/**/*.md'
    ], ->
      reload()

###
# Image Optimization
###

# Optimize JPG with Mozjpeg
gulp.task 'imageminJPG', ->
  gulp.src('./uncompressed-images/**/*.jpg').pipe(imagemin([imageminMozjpeg()])).pipe(gulp.dest('./site/images'))

# Optimize PNG with Guetzli
gulp.task 'imageminPNG', ->
  gulp.src('./uncompressed-images/**/*.png').pipe(imagemin([imageminGuetzli()])).pipe(gulp.dest('./site/images'))

gulp.task 'imagemin', (callback) ->
  runSequence 'imageminJPG', 'imageminPNG', callback

# Purify & Compress CSS
gulp.task 'css', ->
  gulp.src('./site/www/css/*.css').
  pipe(purify([
    './site/www/**/*.js'
    './site/www/*.html'
  ])).
  pipe(minifyCSS()).
  pipe gulp.dest('./site/www/css/')

# Compiling the site
gulp.task 'compile', (done) ->
  cp.exec('harp compile ./site', stdio: 'inherit').on 'close', done

# This builds the entire site except images
gulp.task 'build', (callback) ->
  runSequence 'compile', 'css', callback

# Since firing up the server is the most used item why not
gulp.task 'default', [
  'serve'
]