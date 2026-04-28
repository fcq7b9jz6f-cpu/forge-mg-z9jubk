import { motion } from "framer-motion";
export default function AboutContent() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
<div className="container mx-auto px-6 py-24">
  <div className="max-w-3xl">
    <motion.h2 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="text-4xl font-bold mb-8"
    >
      About Hamza
    </motion.h2>
    <div className="space-y-6 text-lg text-muted-foreground">
      <p>
        Based at the intersection of technology and creativity, Hamza Hassan is an AI Engineer dedicated to pushing the boundaries of what's possible with Megsy AI.
      </p>
      <p>
        With a deep focus on generative models and autonomous agents, he builds tools that empower developers and businesses to leverage the full potential of artificial intelligence.
      </p>
    </div>
  </div>
</div>
    </motion.section>
  );
}
