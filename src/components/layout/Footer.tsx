export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2"><div className="text-lg font-semibold text-foreground">Hamza Hassan</div><p className="mt-2 text-sm text-muted-foreground max-w-xs">Innovating at the speed of thought with Megsy AI.</p></div>
        <div><h4 className="text-sm font-semibold text-foreground mb-3">Navigation</h4><ul className="space-y-2"><li><a href="/" className="text-sm text-muted-foreground hover:text-foreground">Home</a></li><li><a href="/about" className="text-sm text-muted-foreground hover:text-foreground">About</a></li><li><a href="/projects" className="text-sm text-muted-foreground hover:text-foreground">Projects</a></li></ul></div><div><h4 className="text-sm font-semibold text-foreground mb-3">Social</h4><ul className="space-y-2"><li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">LinkedIn</a></li><li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">GitHub</a></li><li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Twitter</a></li></ul></div>
      </div>
      <div className="container mx-auto px-4 py-6 border-t border-border text-xs text-muted-foreground flex justify-between"><span>© 2026 Hamza Hassan</span><span>Built with Megsy AI</span></div>
    </footer>
  );
}
