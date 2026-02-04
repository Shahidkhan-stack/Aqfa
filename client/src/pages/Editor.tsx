import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ImagePlus, Save } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Editor() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { toast } = useToast();

  const handlePublish = () => {
    toast({
      title: "Article Published!",
      description: "Your story is now live on the platform.",
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-6 max-w-4xl py-12">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
             <span className="text-sm text-muted-foreground font-medium">Draft - Saved</span>
          </div>
          <div className="flex gap-3">
            <Button variant="ghost" size="sm" className="gap-2">
              <Save className="w-4 h-4" /> Save Draft
            </Button>
            <Button onClick={handlePublish} className="rounded-full px-6">
              Publish Story
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="group relative">
             <Button variant="outline" className="absolute -left-16 top-2 hidden xl:flex gap-2 h-10 w-10 p-0 rounded-full border-dashed border-2">
               <ImagePlus className="w-4 h-4 text-muted-foreground" />
             </Button>
             <Input 
               placeholder="Title" 
               className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold border-none px-0 h-auto placeholder:text-muted-foreground/30 focus-visible:ring-0"
               value={title}
               onChange={(e) => setTitle(e.target.value)}
             />
          </div>

          <div className="min-h-[500px]">
             <Textarea 
               placeholder="Tell your story..." 
               className="text-lg md:text-xl font-sans leading-relaxed border-none px-0 resize-none min-h-[60vh] focus-visible:ring-0 placeholder:text-muted-foreground/30"
               value={content}
               onChange={(e) => setContent(e.target.value)}
             />
          </div>
        </div>
      </div>
    </Layout>
  );
}
