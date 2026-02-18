import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

// Pfade
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const configPath = path.resolve(__dirname, './icon.config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

const iconsDir = path.resolve(__dirname, '../', config.paths.inputDir);
const outputFile = path.resolve(__dirname, '../', config.paths.typeOutputFile);

const files = fs.readdirSync(iconsDir)
  .filter(file => file.endsWith('.svg'))
  .map(file => path.parse(file).name);

const content = `export type IconName = ${files.map(f => `'${f}'`).join(' | ')};\n`;

const outDir = path.dirname(outputFile);
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, {recursive: true});

fs.writeFileSync(outputFile, content, 'utf-8');

console.log(`✅ Generated IconName for ${files.length} icons -> ${outputFile}`);
