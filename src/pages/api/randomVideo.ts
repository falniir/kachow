import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const videosDirectory = path.join(process.cwd(), 'public/videos');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  fs.readdir(videosDirectory, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read video directory' });
    }

    const videoFiles = files.filter(file => /\.(mp4|mov)$/i.test(file));
    if (videoFiles.length === 0) {
      return res.status(404).json({ error: 'No video files found' });
    }

    const randomIndex = Math.floor(Math.random() * videoFiles.length);
    const randomVideoPath = `/videos/${videoFiles[randomIndex]}`;
    res.status(200).json({ path: randomVideoPath });
  });
}
