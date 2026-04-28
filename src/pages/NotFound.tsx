import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <div className="text-7xl font-semibold text-foreground tracking-tight">404</div>
        <p className="mt-4 text-muted-foreground">The page you’re looking for doesn’t exist.</p>
        <Button asChild className="mt-6"><Link to="/">Back home</Link></Button>
      </div>
    </main>
  );
}
