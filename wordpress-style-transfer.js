const fs = require('fs');

const theme = {
  'Theme Name': 'StringSurgery Wordpress Theme 1.0',
  'Author': 'Trond Erling Hundal',
  'Description': 'Custom theme for stringsurgery.co.uk',
  'Version': 1.0
};

const src = './dist/css/main.css';
const dist = './theme-src/style.css';
const themeData = createThemeOptions(theme);
const source = fs.readFileSync(src);

const data = `${themeData}

  /* StringSurgery - style-transfer output */
  
  ${source}
`;

try {
  fs.writeFileSync(dist, data);
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