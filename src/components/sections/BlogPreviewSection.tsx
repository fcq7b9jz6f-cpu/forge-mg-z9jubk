import { motion } from "framer-motion";
import { BookOpen, ArrowRight, Clock } from 'lucide-react';

export default function BlogPreviewSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
<div className="container mx-auto px-6 py-24">
  <div className="flex justify-between items-end mb-12">
    <div>
      <h2 className="text-4xl font-bold mb-4">Latest Insights</h2>
      <p className="text-muted-foreground">Thoughts on AI, Neural Networks, and the future of Megsy AI.</p>
    </div>
    <button className="hidden md:flex items-center space-x-2 text-primary font-semibold hover:opacity-70 transition-opacity">
      <span>View All Posts</span>
      <ArrowRight size={20} />
    </button>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      {
        title: "The Rise of Autonomous Agents in 2024",
        date: "Oct 12, 2023",
        readTime: "5 min read",
        category: "Research"
      },
      {
        title: "Optimizing LLMs for Edge Devices",
        date: "Sep 28, 2023",
        readTime: "8 min read",
        category: "Technical"
      },
      {
        title: "Why Megsy AI is Changing the Dev Landscape",
        date: "Aug 15, 2023",
        readTime: "4 min read",
        category: "Ecosystem"
      }
    ].map((post, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1 }}
        className="group cursor-pointer"
      >
        <div className="p-8 rounded-[2rem] bg-secondary/30 border border-primary/5 group-hover:border-primary/20 transition-all h-full flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <span className="px-3 py-1 rounded-full bg-background text-xs font-bold uppercase tracking-wider">{post.category}</span>
            <div className="flex items-center text-muted-foreground text-xs">
              <Clock size={14} className="mr-1" />
              {post.readTime}
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
            {post.title}
          </h3>
          <div className="mt-auto pt-6 flex items-center text-sm font-medium opacity-60">
            {post.date}
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</div>
    </motion.section>
  );
}
