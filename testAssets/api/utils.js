import fs from 'fs';
import path from 'path';

const artifactsPath = path.resolve('testAssets/artifacts');

export class Utils {
  /**
   * Clears and recreates the artifacts directory
   */
  static manageArtifacts() {
    if (fs.existsSync(artifactsPath)) {
      fs.rmSync(artifactsPath, { recursive: true, force: true });
    }
    fs.mkdirSync(artifactsPath, { recursive: true });
    // Create a subfolder for the monocart report specifically
    fs.mkdirSync(path.join(artifactsPath, 'monocart-report'), { recursive: true });
  }

  /**
   * Saves API response data as a JSON file
   */
  static saveArtifact(name, data) {
    if (!fs.existsSync(artifactsPath)) {
      fs.mkdirSync(artifactsPath, { recursive: true });
    }
    const filePath = path.join(artifactsPath, `${name}.json`);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  }
}