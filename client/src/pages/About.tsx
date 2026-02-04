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
          <div className="space-y-8 md:sticky md:top-32">
            <div className="aspect-square bg-secondary rounded-[2rem] flex items-center justify-center border border-border/50 shadow-inner">
              <span className="text-6xl font-serif font-bold text-muted-foreground/20">A.</span>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-1">
                <h2 className="text-3xl font-serif font-bold tracking-tight">Aqfa</h2>
                <p className="text-muted-foreground font-medium uppercase tracking-widest text-xs">Creative Direction</p>
              </div>
              
              <div className="space-y-4 text-sm text-muted-foreground pt-6 border-t">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4" /> Editorial Studio
                </div>
                <div className="flex items-center gap-3">
                  <Link2 className="w-4 h-4" /> lumina.dev/aqfa
                </div>
              </div>

              <div className="pt-6">
                <a href={`mailto:${author.email}`} className="w-full">
                  <Button className="w-full rounded-full h-12 gap-2 bg-foreground text-background">
                    <Mail className="w-4 h-4" /> Message
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Main Bio Content */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-serif font-bold leading-[1] tracking-tighter">
                AQFA. <br/>
                <span className="text-muted-foreground italic font-normal">Lead Content Strategist.</span>
              </h1>
            </div>

            <div className="prose prose-xl prose-stone text-foreground/80 leading-relaxed font-light">
              <p>
                Architecture of the mind, expressed through the written word. My practice is centered on the belief that clarity is the ultimate luxury. 
              </p>
              <p>
                As a Creative Director and Editorial Lead, I help brands and individuals find their core resonance through structured storytelling and minimalist design principles.
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
