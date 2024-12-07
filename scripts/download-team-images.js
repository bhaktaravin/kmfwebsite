import fetch from 'node-fetch';
import fs from 'fs/promises';
import path from 'path';

const teamImages = [
  {
    name: 'anil-shrestha.jpg',
    url: 'https://kailashmedicalfoundation.org/wp-content/uploads/2023/07/anil.jpg'
  },
  {
    name: 'sunil-sharma.jpg',
    url: 'https://kailashmedicalfoundation.org/wp-content/uploads/2023/07/sunil.jpg'
  },
  {
    name: 'shyam-thapa.jpg',
    url: 'https://kailashmedicalfoundation.org/wp-content/uploads/2023/07/shyam.jpg'
  },
  {
    name: 'khem-karki.jpg',
    url: 'https://kailashmedicalfoundation.org/wp-content/uploads/2023/07/khem.jpg'
  }
];

const targetDir = path.join(process.cwd(), 'public', 'images', 'team');

async function downloadImage(url, filepath) {
  const response = await fetch(url);
  const buffer = await response.arrayBuffer();
  await fs.writeFile(filepath, Buffer.from(buffer));
  console.log(`Downloaded: ${filepath}`);
}

async function createPlaceholder() {
  const placeholderSvg = `
    <svg width="400" height="500" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
      <path d="M200 150 A50 50 0 1 0 200 250 A50 50 0 1 0 200 150" fill="#d1d5db"/>
      <path d="M100 400 Q200 300 300 400" stroke="#d1d5db" stroke-width="100" fill="none"/>
    </svg>
  `;
  
  await fs.writeFile(path.join(targetDir, 'placeholder.jpg'), placeholderSvg);
  console.log('Created placeholder image');
}

async function main() {
  try {
    // Ensure directory exists
    await fs.mkdir(targetDir, { recursive: true });
    console.log('Created directory:', targetDir);

    // Download all images
    await Promise.all(
      teamImages.map(({ url, name }) => 
        downloadImage(url, path.join(targetDir, name))
      )
    );

    // Create placeholder
    await createPlaceholder();

    console.log('All images downloaded successfully!');
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
