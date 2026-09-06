import { Container, Eyebrow } from "@dcw/ui";
import { pageMeta } from "@/lib/seo";
import { ContactForm } from "@/components/contact-form";

export const metadata = pageMeta({
  title: "Contact",
  description: "Contact Devdutta Creative World about product collaboration, IRISH, or responsible disclosure.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main id="main">
      <Container className="py-16 sm:py-20">
        <Eyebrow>Contact</Eyebrow>
        <h1 className="font-display mt-3 text-4xl">Collaboration, not cold outreach theatre.</h1>
        <p className="mt-4 max-w-xl text-[color:var(--ink-muted)]">
          Describe the work. We do not publish a phone number or street address. Delivery uses a configurable destination
          set by the owner.
        </p>
        <div className="mt-10 max-w-xl">
          <ContactForm />
        </div>
      </Container>
    </main>
  );
}
