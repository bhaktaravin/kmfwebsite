import fetch from 'node-fetch';
import fs from 'fs/promises';
import path from 'path';

const memorialImages = [
  {
    name: 'mitul-bhakta.jpg',
    url: 'https://kailashmedicalfoundation.org/wp-content/uploads/2023/07/mitul.jpg'
  },
  {
    name: 'kailash-bhakta.jpg',
    url: 'https://kailashmedicalfoundation.org/wp-content/uploads/2023/07/kailash.jpg'
  }
];

const targetDir = path.join(process.cwd(), 'public', 'images', 'in-memory');

async function downloadImage(url, filepath) {
  const response = await fetch(url);
  const buffer = await response.arrayBuffer();
  await fs.writeFile(filepath, Buffer.from(buffer));
  console.log(`Downloaded: ${filepath}`);
}

async function main() {
  try {
    // Ensure directory exists
    await fs.mkdir(targetDir, { recursive: true });
    console.log('Created directory:', targetDir);

    // Download all images
    await Promise.all(
      memorialImages.map(({ url, name }) => 
        downloadImage(url, path.join(targetDir, name))
      )
    );

    console.log('All memorial images downloaded successfully!');
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
