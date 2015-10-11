/**
 * Created by ChloeGyuriKim on 11/09/15.
 */
var gulp =require('gulp');
    nodemon = require('gulp-nodemon');

gulp.task('default', function(){
  nodemon({
   script: 'app.js',
    ext: 'js',
    env: {
      PORT:8000
    },
    ignore: ['./node_modules/**']
  })
  .on('restart', function(){
    console.log('Restarting');
  })
});

