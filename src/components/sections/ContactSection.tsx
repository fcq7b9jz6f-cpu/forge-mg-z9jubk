import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function ContactSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
<div className="container mx-auto px-6 py-24">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
    <div>
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-4xl font-bold mb-6"
      >
        Let's build the future together.
      </motion.h2>
      <p className="text-lg text-muted-foreground mb-8">
        Currently open to research collaborations and high-impact AI projects. Reach out via email or follow my work on social platforms.
      </p>
      <div className="flex space-x-6">
        {[
          { icon: Github, href: "#" },
          { icon: Linkedin, href: "#" },
          { icon: Twitter, href: "#" },
          { icon: Mail, href: "mailto:hamza@megsy.ai" }
        ].map((social, i) => (
          <motion.a
            key={i}
            whileHover={{ scale: 1.1 }}
            href={social.href}
            className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-background transition-colors"
          >
            <social.icon size={20} />
          </motion.a>
        ))}
      </div>
    </div>
    <div className="bg-secondary/30 p-8 rounded-[2rem] border border-primary/5">
      <h3 className="text-xl font-bold mb-6">Quick Inquiry</h3>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full p-4 rounded-xl bg-background border border-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/20" />
        <input type="email" placeholder="Email" className="w-full p-4 rounded-xl bg-background border border-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/20" />
        <textarea placeholder="Message" rows={4} className="w-full p-4 rounded-xl bg-background border border-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/20"></textarea>
        <button className="w-full py-4 bg-primary text-background rounded-xl font-bold hover:opacity-90 transition-opacity">Send Message</button>
      </form>
    </div>
  </div>
</div>
    </motion.section>
  );
}
