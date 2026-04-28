import { motion } from "framer-motion";
import { Brain, Cpu, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
<div className="container mx-auto px-6 py-24 md:py-32">
  <div className="flex flex-col items-center text-center space-y-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-secondary text-sm font-medium"
    >
      <Sparkles className="w-4 h-4 text-primary" />
      <span>AI Engineer @ Megsy AI</span>
    </motion.div>
    
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl"
    >
      Architecting the Future of <span className="text-muted-foreground opacity-50">Artificial Intelligence</span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
    >
      Hamza Hassan Elgzairy is a visionary AI developer at Megsy AI, specializing in building intelligent systems that bridge the gap between human intuition and machine precision.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="flex flex-wrap justify-center gap-4 pt-4"
    >
      <button className="px-8 py-4 bg-primary text-background rounded-full font-semibold hover:opacity-90 transition-opacity">
        View Projects
      </button>
      <button className="px-8 py-4 border border-primary/10 rounded-full font-semibold hover:bg-secondary transition-colors">
        Read Research
      </button>
    </motion.div>
  </div>
</div>
    </motion.section>
  );
}
