let mix = require('laravel-mix');
mix.js('src/scripts/script.js', 'dist/scripts/script-dist.js');
mix.js('src/scripts/storage.js', 'dist/scripts/storage-dist.js');
mix.css('src/css/styles.css', 'dist/css');

mix.copy('src/index.html', 'dist/index.html').options({processCssUrls : false});
mix.copyDirectory('src/images', 'dist/images');