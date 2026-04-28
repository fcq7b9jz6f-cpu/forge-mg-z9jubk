import { motion } from "framer-motion";
import { Bot, Code, Zap, Globe } from 'lucide-react';

export default function ExpertiseSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
<div className="container mx-auto px-6 py-24">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {[
      { icon: Bot, title: 'Neural Networks', desc: 'Designing deep learning architectures that learn and adapt.' },
      { icon: Code, title: 'LLM Optimization', desc: 'Fine-tuning large language models for specialized domains.' },
      { icon: Zap, title: 'Real-time AI', desc: 'Implementing low-latency inference for production systems.' },
      { icon: Globe, title: 'Megsy Ecosystem', desc: 'Leading AI integration within the Megsy AI platform.' }
    ].map((item, i) => (
      <motion.div
        key={i}
        whileHover={{ y: -5 }}
        className="p-8 rounded-3xl bg-secondary/50 border border-primary/5 hover:border-primary/20 transition-all"
      >
        <item.icon className="w-10 h-10 mb-6 text-primary" />
        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
        <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
      </motion.div>
    ))}
  </div>
</div>
    </motion.section>
  );
}
