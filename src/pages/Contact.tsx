import { Helmet } from "react-helmet-async";
import ContactForm from "@/components/sections/ContactForm";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | Hamza Hassan</title>
        <meta name="description" content="Get in touch with Hamza Hassan" />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <main className="min-h-screen">
      <ContactForm />
      </main>
    </>
  );
}
