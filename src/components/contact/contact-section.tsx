"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, DownloadCloud } from "lucide-react";
import Link from "next/link";

interface ContactLink {
  href: string;
  text: string;
  icon: React.ElementType;
  ariaLabel: string;
  download?: boolean;
}

const contactLinks: ContactLink[] = [
  {
    href: "mailto:mouheb.sliti@example.com",
    text: "Email Me",
    icon: Mail,
    ariaLabel: "Send an email to Mouheb Sliti",
  },
  {
    href: "https://www.linkedin.com/in/mouhebsliti/",
    text: "LinkedIn",
    icon: Linkedin,
    ariaLabel: "View Mouheb Sliti's LinkedIn profile",
  },
  {
    href: "/documents/CV.pdf",
    text: "My Resume",
    icon: DownloadCloud,
    ariaLabel: "Download Mouheb Sliti's CV",
    download: true,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <Card className="w-full max-w-3xl mx-auto shadow-xl rounded-2xl border border-border overflow-hidden bg-card">
          <CardHeader className="text-center px-8 md:px-16 py-8 bg-card shadow-none rounded-b-3xl">
            <CardTitle className="text-4xl font-extrabold text-primary font-poppins drop-shadow-sm tracking-tight mb-2">
              Let's Connect
            </CardTitle>
            <CardDescription className="text-lg text-foreground/80 mt-6 max-w-md mx-auto font-medium">
              I'm always open to discussing new projects, creative ideas, or opportunities.<br />
              <span className="text-accent font-semibold mt-5 block">Feel free to reach out or download my CV.</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="px-8 md:px-16 py-6 bg-card rounded-b-2xl">
            <div className="flex flex-wrap justify-center gap-6 mt-[-4px]">
              {contactLinks.map((link) => (
                <Button
                  key={link.text}
                  asChild
                  variant="outline"
                  size="lg"
                  className="py-4 px-6 text-lg font-semibold rounded-xl justify-center bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-300 ease-in-out group shadow-md hover:shadow-xl border-2 border-primary/20"
                >
                  <Link
                    href={link.href}
                    target={link.download ? "_blank" : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                    download={link.download ? 'MouhebSliti_Resume.pdf' : undefined}
                  >
                    <link.icon className="mr-3 h-6 w-6 text-primary group-hover:text-accent-foreground transition-colors duration-300" />
                    {link.text}
                  </Link>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
