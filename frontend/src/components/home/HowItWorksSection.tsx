import { steps } from "@/data/home";
import { fadeUp } from "@/lib/motion";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function HowItWorksSection() {
  return (
    <section className="border-y border-border bg-muted/40 py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="max-w-md"
        >
          <h2 className="font-heading text-2xl font-medium tracking-tight">
            How It Works
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            A seamless experience for both buyers and creators.
          </p>
        </motion.div>

        <div className="mt-12 flex flex-col sm:flex-row sm:items-stretch">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-1 items-stretch">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeUp}
                transition={{ delay: index * 0.1 }}
                className="flex-1 py-6 sm:py-0 sm:pr-6"
              >
                <p className="font-heading text-sm text-muted-foreground/60">
                  Step {step.number}
                </p>
                <h3 className="font-heading mt-2 text-xl font-medium tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {step.desc}
                </p>
              </motion.div>

              {index !== steps.length - 1 && (
                <div className="hidden items-center px-4 sm:flex">
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground/40" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
