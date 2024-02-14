import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const RandomVideoDialog: React.FC = () => {
  const [videoPath, setVideoPath] = useState<string>('');

  const fetchRandomVideo = async () => {
    const response = await fetch('/api/randomVideo');
    const data = await response.json();
    setVideoPath(data.path);
  };

  return (
    <Dialog>
      <DialogTrigger onClick={() => fetchRandomVideo()} className="button-class">Secret Button 😳</DialogTrigger>
      <DialogContent> 
        {videoPath && (
          <video width="320" height="240" controls>
            <source src={videoPath} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default RandomVideoDialog;