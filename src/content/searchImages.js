const fs = require('fs');
const path = require('path');

console.log('\nPlace this script in src/content directory and run it there by typing node searchImages.js')
console.log('The output are two lines for every missing image referenced in the markdown file.')
console.log('The first line is the path to the markdown file.')
console.log('The second line is the line number in the markdown file where the missing image is referenced.')

function pruneToSrc(filePath) {
  const srcIndex = filePath.indexOf('src/');
  return filePath.slice(srcIndex);
}

const images = [];

function searchImages(directory) {
  fs.readdirSync(directory).forEach((file) => {
    const filePath = path.join(directory, file);
    const fileStat = fs.statSync(filePath);
    
    if (fileStat.isDirectory()) {
      searchImages(filePath);
    } else {
      if (file.indexOf('.md') !== -1) {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const lines = fileContent.split('\n');
        
        lines.forEach((line) => {
          if (line.indexOf('/images/') !== -1) {
            const [key, value] = line.split(':');
            if (key && value) {
            const imagePath = path.join(directory, value.trim());
            
            fs.access(imagePath, (err) => {
              if (!err) {
                images.push({ key: key.trim(), value: imagePath });
              } else { 
                console.log(`filePath ${pruneToSrc(filePath)}`);
                console.log(`line ${line}`);
            }
            });
          }
        }
        });
      }
    }
  });
}

searchImages(__dirname);

console.log(images);
