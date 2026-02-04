import { Layout } from "@/components/layout/Layout";
import { author } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Mail, Briefcase, MapPin, Link2 } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start max-w-5xl mx-auto">
          
          {/* Sidebar Info */}
          <div className="space-y-6 md:sticky md:top-32">
            <div className="aspect-square overflow-hidden rounded-2xl shadow-xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <img src={author.avatar} alt={author.name} className="w-full h-full object-cover" />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-bold">{author.name}</h2>
              <p className="text-primary font-medium">{author.role}</p>
              
              <div className="space-y-2 text-sm text-muted-foreground pt-4 border-t">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4" /> San Francisco, CA
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase className="w-4 h-4" /> Available for Hire
                </div>
                <div className="flex items-center gap-3">
                  <Link2 className="w-4 h-4" /> lumina.dev/binte
                </div>
              </div>

              <div className="pt-4 flex gap-3">
                <a href={`mailto:${author.email}`} className="w-full">
                  <Button className="w-full rounded-full gap-2">
                    <Mail className="w-4 h-4" /> Contact Me
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Main Bio Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                Hi, I'm Binte. <br/>
                <span className="text-muted-foreground">I write about the intersection of design, technology, and culture.</span>
              </h1>
            </div>

            <div className="prose prose-lg prose-stone text-muted-foreground">
              <p>
                I am a multidisciplinary writer and strategist with a passion for clarity. 
                In a world full of noise, I believe the most valuable skill is the ability to distill complex ideas into simple, resonant narratives.
              </p>
              <p>
                With over a decade of experience in the tech industry, I've worn many hats: content strategist, UX writer, frontend developer, and product manager. 
                This diverse background allows me to approach storytelling with a unique perspective—one that balances technical accuracy with human emotion.
              </p>
              <p>
                Currently, I am looking for full-time opportunities where I can lead content initiatives and help build products that matter.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 pt-8">
              <div className="p-6 rounded-xl bg-secondary/50 border border-border/50">
                <h3 className="font-serif font-bold text-lg mb-2">Content Strategy</h3>
                <p className="text-sm text-muted-foreground">Planning, creating, and managing content to achieve business goals.</p>
              </div>
              <div className="p-6 rounded-xl bg-secondary/50 border border-border/50">
                <h3 className="font-serif font-bold text-lg mb-2">UX Writing</h3>
                <p className="text-sm text-muted-foreground">Crafting microcopy that guides users and enhances the product experience.</p>
              </div>
              <div className="p-6 rounded-xl bg-secondary/50 border border-border/50">
                <h3 className="font-serif font-bold text-lg mb-2">Technical Writing</h3>
                <p className="text-sm text-muted-foreground">Translating complex engineering concepts into accessible documentation.</p>
              </div>
              <div className="p-6 rounded-xl bg-secondary/50 border border-border/50">
                <h3 className="font-serif font-bold text-lg mb-2">Brand Storytelling</h3>
                <p className="text-sm text-muted-foreground">Defining and expressing the unique voice and values of a brand.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
