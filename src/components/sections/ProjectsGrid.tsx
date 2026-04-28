import { motion } from "framer-motion";
import { ExternalLink } from 'lucide-react';

export default function ProjectsGrid() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
<div className="container mx-auto px-6 py-24">
  <h2 className="text-4xl font-bold mb-12 text-center">Featured Work</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    {[
      { title: 'Megsy Core AI', category: 'Infrastructure', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80' },
      { title: 'Neural Vision', category: 'Computer Vision', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80' }
    ].map((project, i) => (
      <motion.div key={i} className="group cursor-pointer">
        <div className="relative aspect-video rounded-3xl overflow-hidden mb-6">
          <img src={project.image} alt={project.title} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
            <ExternalLink className="text-white w-10 h-10" />
          </div>
        </div>
        <p className="text-sm font-medium text-primary/60 uppercase tracking-widest mb-2">{project.category}</p>
        <h3 className="text-2xl font-bold">{project.title}</h3>
      </motion.div>
    ))}
  </div>
</div>
    </motion.section>
  );
}
