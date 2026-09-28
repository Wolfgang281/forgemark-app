import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/motion";
import heroArt from "@/assets/hero-art.svg";
import { motion } from "motion/react";

interface HeroSectionProps {
  onCtaClick: () => void;
}

export function HeroSection({ onCtaClick }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,var(--color-accent),transparent)]"
      />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 px-4 py-14 sm:px-6 sm:py-20 md:grid-cols-2 md:gap-12 md:py-24">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="space-y-6 text-center md:pt-6 md:text-left"
        >
          <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground">
            BUILT FOR CREATORS
          </span>
          <h1 className="font-heading text-4xl leading-[1.05] font-medium text-balance sm:text-5xl md:text-6xl">
            Discover premium digital products, built by{" "}
            <span className="relative inline-block">
              creators
              <svg
                aria-hidden
                viewBox="0 0 120 12"
                className="absolute -bottom-1 left-0 h-2.5 w-full text-foreground/40"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8.5C20 3 45 2 62 6.5C80 11 100 4 118 7"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </h1>
          <p className="mx-auto max-w-md text-balance text-muted-foreground md:mx-0">
            Courses, source code, templates, AI prompts and ebooks, sold
            directly by the creators who made them.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2 md:justify-start">
            <Button size="lg" onClick={onCtaClick}>
              Become a Partner
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl border border-border bg-card p-4 shadow-lg shadow-black/5 transition-shadow hover:shadow-xl sm:p-6"
        >
          <img
            src={heroArt}
            alt="Abstract illustration representing the Forgemark marketplace"
            className="w-full rounded-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
