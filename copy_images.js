const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\ndrs-admin\\.gemini\\antigravity\\brain\\af129c0f-9096-453f-b7f8-bec89f29198d';
const destDir = 'C:\\Users\\ndrs-admin\\Documents\\antigravity\\eager-hopper\\images';

console.log('srcDir exists:', fs.existsSync(srcDir));
console.log('destDir exists:', fs.existsSync(destDir));

const files = {
  'hero_farm_1783407475787.jpg': 'hero_farm.jpg',
  'cafe_bakery_1783407494619.jpg': 'cafe_bakery.jpg',
  'cute_sheep_1783407513267.jpg': 'cute_sheep.jpg'
};

for (const [srcName, destName] of Object.entries(files)) {
  const srcPath = path.join(srcDir, srcName);
  const destPath = path.join(destDir, destName);
  console.log(`Checking source file: ${srcPath} (exists: ${fs.existsSync(srcPath)})`);
  console.log(`Checking dest file path: ${destPath}`);
  try {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${srcName} to ${destName}`);
  } catch (err) {
    console.error(`Error copying ${srcName}:`, err.code, err.message);
  }
}
