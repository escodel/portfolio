const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');

(async () => {
  const files = await imagemin(['assets/images/*.{jpg,png}'], 'build/images', {
    plugins: [imageminJpegtran(), imageminPngquant({ quality: '65-80' })]
  });

  const logos = await imagemin(['assets/logos/*.{jpg,png}'], 'build/logos', {
    plugins: [imageminJpegtran(), imageminPngquant({ quality: '65-80' })]
  });

  console.log(files);
  //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
})();
