import { Twitter, Facebook, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ShareButtonsProps {
  title: string;
  url: string;
}

const ShareButtons = ({ title, url }: ShareButtonsProps) => {
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
  };

  const handleShare = (platform: keyof typeof shareLinks) => {
    window.open(shareLinks[platform], "_blank", "width=600,height=400");
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-muted-foreground">Share:</span>
      <Button
        variant="ghost"
        size="sm"
        className="h-8 w-8 p-0 hover:bg-[#1DA1F2]/10 hover:text-[#1DA1F2]"
        onClick={() => handleShare("twitter")}
        title="Share on Twitter"
      >
        <Twitter size={16} />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="h-8 w-8 p-0 hover:bg-[#1877F2]/10 hover:text-[#1877F2]"
        onClick={() => handleShare("facebook")}
        title="Share on Facebook"
      >
        <Facebook size={16} />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="h-8 w-8 p-0 hover:bg-[#25D366]/10 hover:text-[#25D366]"
        onClick={() => handleShare("whatsapp")}
        title="Share on WhatsApp"
      >
        <MessageCircle size={16} />
      </Button>
    </div>
  );
};

export default ShareButtons;
