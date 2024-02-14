import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image";
import catFlower from "@/lib/images/catflower.jpg";
import { useState } from "react";
interface DialogPageProps {
    dialogText?: string;
    dialogTitle?: string;
    dialogDescription?: string;
    scale?: number; // New prop for scaling
}


const RandomVideoDialog: React.FC = () => {
  const [videoPath, setVideoPath] = useState<string>('');

  const fetchRandomVideo = async () => {
    const response = await fetch('/api/randomVideo');
    const data = await response.json();
    setVideoPath(data.path);
  };
};
  
export function DialogPageYes({ dialogText, dialogTitle, dialogDescription, scale = 1 }: DialogPageProps) {
  const dialogStyle = {
    transform: `scale(${scale})`
  };





    return (
      <Dialog>
        <DialogTrigger style={dialogStyle} className="px-4 py-2 mt-4 text-sm font-bold text-white transition duration-500 bg-pink-600 rounded-full hover:bg-slate-400 hover:text-slate-300">{dialogText}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{dialogTitle}</DialogTitle>
            <DialogDescription>{dialogDescription}
            <Image src={catFlower} alt="Picture of kitty holding flowers" width={500} height={500} />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )
}
  