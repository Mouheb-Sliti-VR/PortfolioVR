import { PortfolioGrid } from '@/components/portfolio/portfolio-grid';
import { ContactSection } from '@/components/contact/contact-section';
import { ClientAvatar3D } from '@/components/layout/client-avatar-3d';


export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="py-12 md:py-20 bg-gradient-to-br from-card via-background to-card rounded-2xl shadow-2xl border border-border/50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left space-y-5 md:space-y-7">
            <h2 className="text-3xl md:text-4xl font-bold text-primary md:mx-0 tracking-tight relative">
              About Me
              <span className="block w-28 h-1 bg-primary/70 rounded-full mt-3 mx-auto md:mx-0"></span>
            </h2>
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
              I’m a versatile <span className="font-semibold text-primary">Computer Science Engineer</span> and <span className="font-semibold text-primary">Unity Certified Professional Developer</span> passionate about immersive <span className="font-semibold text-primary">XR experiences</span> and scalable, event-driven <span className="font-semibold text-primary">backends</span>. I take projects from concept to deployment — building interactive <span className="font-semibold text-primary">3D applications</span>, architecting <span className="font-semibold text-primary">multiplayer servers</span>, and managing <span className="font-semibold text-primary">CI/CD pipelines</span> for <span className="font-semibold text-primary">GCP deployment</span>.
            </p>
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
              Driven by <span className="font-semibold text-primary">curiosity</span> and a love for <span className="font-semibold text-primary">continuous learning</span>, I stay ahead of <span className="font-semibold text-primary">emerging technologies</span> and embrace <span className="font-semibold text-primary">challenges</span> beyond my core stack. My strength lies in blending <span className="font-semibold text-primary">technical depth</span>, <span className="font-semibold text-primary">creative problem-solving</span>, and a <span className="font-semibold text-primary">DevOps mindset</span> to deliver reliable, high-performance solutions across platforms.
            </p>
          </div>
          <div className="w-full h-[250px] md:h-[350px] flex items-center justify-center mt-8 md:mt-0">
            <ClientAvatar3D />
          </div>
        </div>
      </section>

      <section id="portfolio">
        <h2 className="text-4xl font-bold text-center mb-10 text-primary">My Work</h2>
        <PortfolioGrid />
      </section>

      <ContactSection />
    </div>
  );
}
