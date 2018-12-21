const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');

(async () => {
  const files = await imagemin(['src/assets/images/*.{jpg,png}'], 'dist/images', {
    plugins: [imageminJpegtran(), imageminPngquant({ quality: '65-80' })]
  });

  const logos = await imagemin(['src/assets/logos/*.{jpg,png}'], 'dist/logos', {
    plugins: [imageminJpegtran(), imageminPngquant({ quality: '65-80' })]
  });

  console.log(files);
  //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
})();
