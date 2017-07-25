var PATHS = require('./utils/config').paths,
    TEMPLATE_CONTEXT_DATA = require('./app/templates/utils/values'),
    ROOT_REPLACEMENT_EXP = /((?:src|url|href)\s*[=(:]\s*["']?\s*)(\/)([^"'\/])/gi,
    gulp = require('gulp'),
    del = require('del'),
    sync = require('browser-sync').create(),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    handlebars = require('gulp-compile-handlebars'),
    watchify = require('watchify');

gulp.task('default', function() {});

// ------------------- clean -------------------
gulp.task('clean', function () {
  return del([
    'public'
  ]);
});

// ------------------- styles -------------------
gulp.task('styles:sass', function () {
  gulp.src(PATHS.css.app)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./public/css'))
    .pipe(sync.reload({stream: true}));
});

gulp.task('styles:vendor', function () {
    gulp.src(PATHS.css.vendor)
      .pipe(concat('vendor.css'))
      .pipe(gulp.dest('./public/css'));
});

// ------------------- templates -------------------
gulp.task('base:templates', function () {
  var options = {
    batch: [PATHS.hbs.partials]
  };

  gulp.src(PATHS.hbs.templates)
    .pipe(handlebars(TEMPLATE_CONTEXT_DATA, options))
    .pipe(rename(function (path) {path.extname = '.html';}))
    .pipe(gulp.dest('./public'))
    .pipe(sync.reload({stream: true}));
});

// ------------------- Scripts -------------------
gulp.task('scripts:js', function () {
  gulp.src(PATHS.js.app)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./public/js'))
    .pipe(sync.reload({stream: true}));
});

gulp.task('scripts:vendor', function () {
  gulp.src(PATHS.js.vendor)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./public/js'))
    .pipe(sync.reload({stream: true}));
});

// ------------------- assets -------------------
gulp.task('base:assets', function () {
  //del('public');
  gulp.src(PATHS.assets)
    .pipe(gulp.dest('public'));
});


// -------------------watch for me, while I'm gone... -------------------
gulp.task('default:watch', function () {
  //watchify(bundler)
      //.on('update', onCodeUpdate);
  gulp.watch(PATHS.hbs.templates, ['base:templates']);
  gulp.watch(PATHS.hbs.partials + '/**', ['base:templates']);
  gulp.watch('app/styles/**/*.scss', ['styles:sass']);
  gulp.watch([PATHS.assets, '!app/assets/data/**'], ['base:assets']);
});

// ------------------- server -------------------
gulp.task('default:server', function () {
  sync.init({
    server: {
      baseDir: "./public/"
    }
  });
});

// basic tasks
gulp.task('default', ['base', 'default:server', 'default:watch']);
gulp.task('base', ['base:assets', 'base:styles', 'scripts:js', 'scripts:vendor', 'base:templates']);
gulp.task('base:styles', ['styles:vendor', 'styles:sass']);

