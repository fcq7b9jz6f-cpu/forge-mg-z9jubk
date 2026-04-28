import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setLoading(true);
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (!r.ok) throw new Error("Failed");
      toast.success("Message sent");
      (e.target as HTMLFormElement).reset();
    } catch { toast.error("Could not send"); } finally { setLoading(false); }
  }
  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-lg mx-auto">
      <Input name="name" placeholder="Your name" required />
      <Input name="email" type="email" placeholder="Email" required />
      <Textarea name="message" placeholder="Message" rows={5} required />
      <Button type="submit" disabled={loading} className="w-full">{loading ? "Sending..." : "Send"}</Button>
    </form>
  );
}
