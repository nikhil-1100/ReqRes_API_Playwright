import fs from 'fs';
import path from 'path';

export default async () => {
  const rootPath = process.cwd();
  const artifactsDir = path.join(rootPath, 'testAssets/artifacts');
  
  const subFolders = [
    'monocart-report',
    'test-results' 
  ];

  try {
    console.log('🧹 Cleaning artifacts from previous runs...');
    if (fs.existsSync(artifactsDir)) {
      fs.rmSync(artifactsDir, { recursive: true, force: true });
    }
    fs.mkdirSync(artifactsDir, { recursive: true });

    for (const folder of subFolders) {
      fs.mkdirSync(path.join(artifactsDir, folder), { recursive: true });
    }
    console.log('✅ Artifacts directory and Monocart folder recreated.');
  } catch (error) {
    console.error('❌ Error during global setup:', error.message);
  }
};