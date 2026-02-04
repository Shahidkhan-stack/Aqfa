import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { FileText, Users, Globe, Award } from "lucide-react";

export default function Services() {
  const offerings = [
    {
      title: "Content Strategy",
      description: "Comprehensive roadmaps for digital presence, ensuring every word serves a strategic purpose.",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      title: "Brand Voice",
      description: "Defining the unique linguistic identity of your brand to build lasting emotional connections.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Digital Publishing",
      description: "Crafting long-form editorial content that establishes authority and drives engagement.",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: "Creative Direction",
      description: "Visual and narrative alignment that creates a cohesive, high-end digital experience.",
      icon: <Award className="w-6 h-6" />,
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-6 py-20 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="space-y-4 max-w-2xl">
            <h1 className="text-6xl md:text-7xl font-serif font-bold tracking-tighter">OFFERINGS.</h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-light">
              Strategic editorial services designed for those who value clarity, elegance, and intentionality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-border overflow-hidden rounded-[2rem] border border-border">
            {offerings.map((item, i) => (
              <div key={i} className="bg-background p-12 space-y-6 hover:bg-secondary/20 transition-colors duration-500">
                <div className="text-primary">{item.icon}</div>
                <h3 className="text-2xl font-serif font-bold">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-light">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
