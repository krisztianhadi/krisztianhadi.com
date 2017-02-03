# My intro site with pug and sass mixed by gulp.

If you need to create fast a little introduction site just feel free to use the source of my project.

### Note

This project based on ["Pug and Sass starter project" by Joshua Azemoh](https://github.com/azemoh/gulp-pug-sass-seed/)

### This project uses...

1. [browser-sync](https://github.com/browsersync/browser-sync) to launch a local server and do live reloads as sass and pug files changes
2. [gulp-pug](https://github.com/jamen/gulp-pug) to compile pug files.
3. [gulp-data](https://github.com/colynb/gulp-data) to pass data to pug. this project uses JSON as the data source, however you can generate data objects from a variety of sources: json, front-matter, database, etc... see gulp-data [README](https://github.com/colynb/gulp-data)
4. [gulp-sass](https://github.com/dlmanning/gulp-sass) to compile sass files.
5. [gulp-autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer) to add vendor prefixes to css files
5. [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin) to compress static image files
6. [Menoe Grotesque Std](http://www.hungarumlaut.com/typefaces/menoe.html) a beautiful font by the talented Adam Katyi. Follow the link to purchase a license to use it.
5. [night-mode-js](https://github.com/cuddlecheek/night-mode-js) to add a dynamic nigh mode color switch


### To run
- Execute `npm install` from this directory to install dev dependencies.
- Execute `gulp` to run all tasks, launch the browser sync local server and watch for changes.
