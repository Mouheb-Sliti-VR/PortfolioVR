import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="py-6 bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 items-center">
          {/* Left: Profile */}
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="flex items-center gap-4 text-primary hover:text-primary/80 transition-colors duration-300 group"
            >
              <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-primary/50 group-hover:border-accent transition-colors duration-300">
                <Image
                  src="/images/1.jpg"
                  alt="Mouheb Sliti profile picture"
                  fill
                  className="object-cover"
                  data-ai-hint="profile picture"
                />
              </div>
              <span>
                <span className="text-2xl font-bold font-poppins block group-hover:text-accent transition-colors duration-300">
                  Mouheb Sliti
                </span>
                <span className="text-sm font-poppins text-foreground/80 block">
                  R&D Engineer / XR Developer
                </span>
              </span>
            </Link>
          </div>
          {/* Center: Unity Badge and Label */}
          <div className="flex justify-center">
            <a
              href="https://www.credly.com/badges/453a25b9-89f7-48bc-a6f8-8bef92931365"
              target="_blank"
              rel="noopener noreferrer"
              title="Click to verify"
              className="inline-flex items-center"
            >
              <span className="rounded-full border-2 border-accent bg-background p-2 flex items-center justify-center">
                <img
                  src="/images/unity-certified-professional-programmer.png"
                  alt="Unity Certified Professional Programmer Badge"
                  width={36}
                  height={36}
                  className="block"
                />
              </span>
              <span className="ml-2 text-xs font-semibold font-poppins text-foreground/90 tracking-wide whitespace-nowrap">
                Unity Certified Professional Programmer
              </span>
            </a>
          </div>
          {/* Right: Theme Toggle */}
          <div className="flex justify-end items-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
