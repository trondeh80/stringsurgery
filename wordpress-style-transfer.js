const fs = require('fs');

const theme = {
  'Theme Name': 'StringSurgery Wordpress Theme 1.0',
  'Author': 'Trond Erling Hundal',
  'Description': 'Custom theme for stringsurgery.co.uk',
  'Version': 1.0
};

const THEME_DIR = './theme-src';
const DIST_DIR = './dist';

transferCss();
console.log('CSS DONE');
transferJs();
console.log('JS DONE');
transferImages();
console.log('IMAGES DONE');

function transferJs() {
  const jsFile = `${DIST_DIR}/main.js`;
  fs.copyFileSync(jsFile, `${THEME_DIR}/js/main.js`);
}

function transferImages() {
  const images = fs.readdirSync(`${DIST_DIR}/images`);
  images.filter(image => image && isImage(image)).forEach(image =>
    fs.copyFileSync(`${DIST_DIR}/images/${image}`, `${THEME_DIR}/image/${image}`));

  function isImage(image) {
    const p = image.split('.');
    const key = p[p.length - 1].toLowerCase().trim();
    return [
      'png',
      'jpg',
      'gif',
      'jpeg',
      'svg'
    ].indexOf(key) > -1
  }
}

function transferCss() {
  const src = './dist/css/main.css';
  const dist = './theme-src/style.css';

  const themeData = createThemeOptions(theme);
  const source = fs.readFileSync(`${DIST_DIR}/css/main.css`);

  const data = `${themeData}

  /* StringSurgery - style-transfer output */
  
  ${source}
`;

  try {
    fs.writeFileSync(`${THEME_DIR}/style.css`, data);
  } catch (err) {
    console.error(err);
  }

  function createThemeOptions(theme) {
    const keys = Object.keys(theme);
    return '/*\n' + keys.map((key, index) => {
      return add(key, theme[key]);
    }).join('\n') + '\n*/';

    function add(key, value) {
      return `${key}: ${value}`;
    }
  }

}