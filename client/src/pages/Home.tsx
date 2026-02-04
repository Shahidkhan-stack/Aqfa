import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { author, posts } from "@/lib/data";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "wouter";
import heroWorkspace from "@/assets/images/hero-workspace.png";
import { motion } from "framer-motion";

export default function Home() {
  const featuredPost = posts.find(p => p.featured) || posts[0];
  const recentPosts = posts.filter(p => p.id !== featuredPost.id);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative px-4 md:px-6 pb-16 md:pb-24">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1]">
              Stories, ideas, <br/> and <span className="text-muted-foreground italic">insights.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              A curated space for thoughtful writing on design, technology, and the creative process.
            </p>
            <div className="flex gap-4 pt-2">
              <Link href="/about">
                <Button size="lg" className="rounded-full px-8 h-12 text-base">
                  Meet the Author
                </Button>
              </Link>
              {localStorage.getItem("is_admin") === "true" && (
                <Link href="/write">
                  <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base border-primary/20 hover:bg-secondary/50">
                    Start Writing
                  </Button>
                </Link>
              )}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={heroWorkspace} 
                alt="Workspace" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="px-4 md:px-6 py-12 bg-secondary/30">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-serif font-semibold">Featured Story</h2>
          </div>
          
          <Link href={`/article/${featuredPost.id}`}>
            <a className="group grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-card rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-border/50">
              <div className="aspect-video overflow-hidden rounded-xl">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="font-medium text-primary bg-primary/5 px-2 py-1 rounded-md">{featuredPost.category}</span>
                  <span>•</span>
                  <span>{featuredPost.date}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif font-bold group-hover:text-primary/80 transition-colors leading-tight">
                  {featuredPost.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed line-clamp-3">
                  {featuredPost.excerpt}
                </p>
                <div className="pt-4 flex items-center text-sm font-medium text-primary">
                  Read Full Story <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          </Link>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="px-4 md:px-6 py-16 md:py-24">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-serif font-bold">Recent Writing</h2>
            <Link href="#">
              <a className="text-sm font-medium hover:underline decoration-1 underline-offset-4">View Archive</a>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Link key={post.id} href={`/article/${post.id}`}>
                <a className="group space-y-4 block">
                  <div className="aspect-[3/2] overflow-hidden rounded-xl bg-muted">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      <span>{post.category}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold leading-snug group-hover:underline decoration-1 underline-offset-4 decoration-primary/30">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
