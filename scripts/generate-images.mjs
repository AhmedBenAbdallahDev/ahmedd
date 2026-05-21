import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.join(process.cwd(), 'public');
const ogSvg = path.join(publicDir, 'og-image.svg');
const faviconSvg = path.join(publicDir, 'favicon.svg');

async function generate() {
  try {
    if (fs.existsSync(ogSvg)) {
      await sharp(ogSvg).resize(1200, 630, { fit: 'cover' }).png().toFile(path.join(publicDir, 'og-image.png'));
      console.log('Generated og-image.png');
    } else {
      console.warn('og-image.svg not found');
    }

    if (fs.existsSync(faviconSvg)) {
      await sharp(faviconSvg).resize(512, 512).png().toFile(path.join(publicDir, 'favicon-512.png'));
      await sharp(faviconSvg).resize(192, 192).png().toFile(path.join(publicDir, 'favicon-192.png'));
      console.log('Generated favicon-512.png and favicon-192.png');
    } else {
      console.warn('favicon.svg not found');
    }

    // update manifest to include png icons
    const manifestPath = path.join(publicDir, 'site.webmanifest');
    if (fs.existsSync(manifestPath)) {
      const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
      manifest.icons = [
        { src: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
        { src: '/favicon-512.png', sizes: '512x512', type: 'image/png' },
        { src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' }
      ];
      fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
      console.log('Updated site.webmanifest with PNG icons');
    }

  } catch (err) {
    console.error('Image generation failed:', err);
    process.exit(1);
  }
}

generate();
