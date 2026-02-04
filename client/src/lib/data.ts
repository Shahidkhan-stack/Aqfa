import heroAbstract from "@/assets/images/hero-abstract.png";
import blogThumb1 from "@/assets/images/blog-thumb-1.png";
import blogThumb2 from "@/assets/images/blog-thumb-2.png";
import blogThumb3 from "@/assets/images/blog-thumb-3.png";

export const author = {
  name: "Aqfa",
  role: "Creative Director & Editorial Lead",
  bio: "Distilling complex narratives into elegant digital experiences. Focused on the intersection of modern aesthetics, human behavior, and future technology.",
  avatar: null, // Removing personal photo for a more anonymous, professional editorial feel
  email: "binteshahidattaria3@gmail.com",
  social: {
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  }
};

export const posts = [
  {
    id: 1,
    title: "The Art of Minimalist Design in Digital Spaces",
    excerpt: "Why less is often more when it comes to user interface design, and how negative space creates positive experiences.",
    content: `
      <p>In a world screaming for attention, silence is a luxury. Minimalism isn't just an aesthetic choice; it's a functional imperative in modern digital product design. When we strip away the non-essential, we're not just making things look "clean"—we're making them usable.</p>
      
      <h3>The Power of Negative Space</h3>
      <p>White space is active space. It guides the eye, creates hierarchy, and gives the user's mind room to breathe. Without it, interfaces feel cluttered, overwhelming, and cheap. By increasing margins and padding, we signal confidence. We say, "This content is important enough to stand alone."</p>
      
      <p>Consider the difference between a dense news portal and a focused editorial platform. One feels frantic; the other feels authoritative. Typography plays a huge role here. A strong serif heading paired with a clean sans-serif body text creates a rhythm that invites reading rather than scanning.</p>
      
      <h3>Function Over Decoration</h3>
      <p>Every element on a screen adds cognitive load. If a border, a shadow, or an icon doesn't serve a clear purpose, it's noise. The best digital products feel inevitable—as if they couldn't possibly be designed any other way. This inevitability comes from rigorous subtraction.</p>
    `,
    date: "Feb 12, 2025",
    readTime: "5 min read",
    image: blogThumb1,
    category: "Design",
    featured: true
  },
  {
    id: 2,
    title: "Cultivating Creativity in a Distracted World",
    excerpt: "Practical strategies for maintaining deep focus and producing high-quality work amidst constant notifications.",
    content: `
      <p>Deep work is becoming a superpower in the 21st century. As our devices become more intrusive, the ability to disconnect and focus on complex tasks is becoming rare—and valuable.</p>
      
      <p>Creativity requires a certain level of boredom. When our brains are constantly stimulated by dopamine hits from social media, we lose the capacity for the slow, meandering thought processes that lead to genuine insight. We need to reclaim our attention.</p>
      
      <blockquote>"The ability to perform deep work is becoming increasingly rare at exactly the same time it is becoming increasingly valuable in our economy." - Cal Newport</blockquote>
      
      <p>I've started implementing "monk mode" mornings: no phone, no email, just writing for the first three hours of the day. The results have been transformative. Not only has my output increased, but the quality of my thinking has deepened.</p>
    `,
    date: "Feb 08, 2025",
    readTime: "4 min read",
    image: blogThumb2,
    category: "Productivity",
    featured: false
  },
  {
    id: 3,
    title: "The Future of Remote Work is Asynchronous",
    excerpt: "Moving beyond Zoom fatigue to a more sustainable, written-first culture of collaboration.",
    content: `
      <p>We've successfully moved the office to the cloud, but we're still working as if we're sitting next to each other. We've traded shoulder taps for Slack pings and conference rooms for Zoom calls. This isn't the future; it's just a digital skeuomorph of the past.</p>
      
      <p>True remote work freedom comes from asynchronous communication. Writing things down. Documenting decisions. Letting people work when they are most productive, not just when everyone else is awake.</p>
    `,
    date: "Jan 28, 2025",
    readTime: "6 min read",
    image: blogThumb3,
    category: "Work",
    featured: false
  }
];
