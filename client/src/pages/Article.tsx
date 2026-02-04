import { Layout } from "@/components/layout/Layout";
import { posts, author } from "@/lib/data";
import { useRoute } from "wouter";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Share2, Bookmark, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import NotFound from "./not-found";

export default function Article() {
  const [match, params] = useRoute("/article/:id");
  const post = match ? posts.find(p => p.id === Number(params.id)) : null;

  if (!post) return <NotFound />;

  return (
    <Layout>
      <article className="min-h-screen pb-20">
        {/* Header */}
        <div className="container mx-auto px-4 md:px-6 max-w-4xl pt-10 pb-8">
          <Link href="/">
            <a className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
            </a>
          </Link>

          <div className="space-y-4 text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold tracking-wide uppercase">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-[1.1] text-balance">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground md:max-w-2xl mx-auto leading-relaxed">
              {post.excerpt}
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Avatar className="w-10 h-10 border border-border">
              <AvatarImage src={author.avatar} />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <p className="text-sm font-semibold">{author.name}</p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="container mx-auto px-4 md:px-6 max-w-5xl mb-12">
          <div className="aspect-[21/9] overflow-hidden rounded-2xl shadow-lg">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div 
            className="prose prose-lg md:prose-xl prose-stone prose-headings:font-serif prose-headings:font-bold prose-p:font-sans prose-p:leading-loose prose-img:rounded-xl mx-auto first-letter:float-left first-letter:text-5xl first-letter:pr-3 first-letter:font-serif first-letter:font-bold text-pretty"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <Separator className="my-12" />

          {/* Article Footer */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-2 rounded-full">
                <Share2 className="w-4 h-4" /> Share
              </Button>
              <Button variant="ghost" size="sm" className="gap-2 rounded-full">
                <Bookmark className="w-4 h-4" /> Save
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">
              Tag: <span className="text-primary font-medium">{post.category}</span>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
