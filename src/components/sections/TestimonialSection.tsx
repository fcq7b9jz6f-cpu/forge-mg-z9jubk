import { motion } from "framer-motion";
import { Quote } from 'lucide-react';

export default function TestimonialSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
<div className="container mx-auto px-6 py-24">
  <div className="relative p-12 md:p-24 rounded-[3rem] bg-primary text-background overflow-hidden">
    <div className="absolute top-0 right-0 p-12 opacity-10">
      <Quote size={120} />
    </div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="relative z-10 max-w-3xl"
    >
      <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
        "AI is not just about automation; it's about augmenting human potential to solve the unsolvable."
      </h2>
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-secondary/20" />
        <div>
          <p className="font-bold text-xl">Hamza Hassan</p>
          <p className="opacity-60">Lead AI Developer, Megsy AI</p>
        </div>
      </div>
    </motion.div>
  </div>
</div>
    </motion.section>
  );
}
