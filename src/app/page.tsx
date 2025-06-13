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
              I am a <span className="font-semibold !text-primary dark:!text-primary">Unity Certified Professional Programmer</span> and <span className="font-semibold !text-primary dark:!text-primary">Computer Science Engineer</span> specializing in <span className="font-semibold !text-primary dark:!text-primary">immersive XR experiences</span> and <span className="font-semibold !text-primary dark:!text-primary">scalable, cloud-connected systems</span>. I design and develop <span className="font-semibold !text-primary dark:!text-primary">full-stack solutions</span>, covering <span className="font-semibold !text-primary dark:!text-primary">interactive front-ends</span> in virtual environments and <span className="font-semibold !text-primary dark:!text-primary">event-driven, distributed backend services</span>.
            </p>
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
              I also work with <span className="font-semibold !text-primary dark:!text-primary">AI</span> and <span className="font-semibold !text-primary dark:!text-primary">generative models</span>, integrating <span className="font-semibold !text-primary dark:!text-primary">intelligent systems</span> into applications to enhance <span className="font-semibold !text-primary dark:!text-primary">functionality</span> and <span className="font-semibold !text-primary dark:!text-primary">operational efficiency</span>.
            </p>
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
              My expertise includes <span className="font-semibold !text-primary dark:!text-primary">real-time multiplayer infrastructures</span>, <span className="font-semibold !text-primary dark:!text-primary">cloud-native architectures</span>, and <span className="font-semibold !text-primary dark:!text-primary">CI/CD pipeline automation</span> for reliable and maintainable deployments.
            </p>
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
              With a <span className="font-semibold !text-primary dark:!text-primary">DevOps mindset</span> and a focus on <span className="font-semibold !text-primary dark:!text-primary">emerging technologies</span>, I deliver <span className="font-semibold !text-primary dark:!text-primary">innovative</span>, <span className="font-semibold !text-primary dark:!text-primary">high-performance</span>, and <span className="font-semibold !text-primary dark:!text-primary">resilient systems</span> across platforms.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full mt-12">
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
