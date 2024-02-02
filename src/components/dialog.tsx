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
interface DialogPageProps {
    dialogText?: string;
    dialogTitle?: string;
  dialogDescription?: string;
}


  
export default function DialogPage({ dialogText, dialogTitle, dialogDescription }: DialogPageProps) {
    return (
      <Dialog>
        <DialogTrigger className="px-4 py-2 mt-4 text-sm font-bold text-white transition duration-500 bg-pink-600 rounded-full hover:bg-slate-400 hover:text-slate-300">{dialogText}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{dialogTitle}</DialogTitle>
            <DialogDescription>{dialogDescription}
            <Image src={catFlower} alt="Picture of the author" width={500} height={500} />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )
  }