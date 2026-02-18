import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import SVGSpriter from 'svg-sprite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const configPath = path.resolve(__dirname, './icon.config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

const inputDir = path.resolve(__dirname, '../', config.paths.inputDir);
const spriteDir = path.resolve(__dirname, '../', config.paths.spriteOutputDir);

if (!fs.existsSync(spriteDir)) {
  fs.mkdirSync(spriteDir, { recursive: true });
}

const spriter = new SVGSpriter({
  mode: {
    symbol: {
      dest: '.',
      sprite: config.sprite.fileName
    }
  }
});

// SVG Dateien einlesen
fs.readdirSync(inputDir)
  .filter(file => file.endsWith('.svg'))
  .forEach(file => {
    const filePath = path.join(inputDir, file);
    const svg = fs.readFileSync(filePath, 'utf-8');
    spriter.add(filePath, null, svg);
  });

// Sprite generieren
spriter.compile((error, result) => {
  if (error) {
    console.error(error);
    return;
  }

  for (const mode in result) {
    for (const resource in result[mode]) {
      fs.writeFileSync(
        path.join(spriteDir, config.sprite.fileName),
        result[mode][resource].contents
      );
    }
  }

  console.log('✅ Sprite generated successfully at', path.join(spriteDir, config.sprite.fileName));
});
