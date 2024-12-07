import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
  {
    url: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=800',
    filename: 'jumla-mission.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800',
    filename: 'dolakha-mission.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1583946099379-f9c9cb8bc030?w=800',
    filename: 'kathmandu-mission.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=800',
    filename: 'jumla-past.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800',
    filename: 'dolakha-past.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=800',
    filename: 'kathmandu-past.jpg'
  }
];

const downloadImage = (url, filename) => {
  const filepath = path.join(__dirname, '..', 'public', 'images', filename);
  const file = fs.createWriteStream(filepath);

  https.get(url, response => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${filename}`);
    });
  }).on('error', err => {
    fs.unlink(filepath, () => {});
    console.error(`Error downloading ${filename}:`, err.message);
  });
};

images.forEach(image => {
  downloadImage(image.url, image.filename);
});
