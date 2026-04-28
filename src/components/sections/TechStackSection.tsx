import { motion } from "framer-motion";
import { Terminal, Cpu, Database, Layers } from 'lucide-react';

export default function TechStackSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
<div className="container mx-auto px-6 py-24 bg-secondary/20 rounded-[3rem]">
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold mb-4">The Tech Stack</h2>
    <p className="text-muted-foreground">Advanced tools for next-generation AI development</p>
  </div>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
    {[
      { icon: Terminal, name: 'PyTorch', level: 'Expert' },
      { icon: Cpu, name: 'CUDA', level: 'High Performance' },
      { icon: Database, name: 'Vector DBs', level: 'Pinecone/Weaviate' },
      { icon: Layers, name: 'Transformers', level: 'Custom Architectures' }
    ].map((tech, i) => (
      <motion.div 
        key={i}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: i * 0.1 }}
        className="flex flex-col items-center text-center space-y-4"
      >
        <div className="w-16 h-16 rounded-2xl bg-background flex items-center justify-center shadow-sm border border-primary/5">
          <tech.icon className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h4 className="font-bold">{tech.name}</h4>
          <p className="text-xs text-muted-foreground uppercase tracking-wider">{tech.level}</p>
        </div>
      </motion.div>
    ))}
  </div>
</div>
    </motion.section>
  );
}
