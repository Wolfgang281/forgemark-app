import { steps } from "@/data/home";
import { fadeUp } from "@/lib/motion";
import { motion } from "motion/react";

export function HowItWorksSection() {
  return (
    <section className="border-y border-border bg-muted/40 py-14 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <h2 className="text-lg font-semibold tracking-tight">
            How It Works
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            A seamless experience for both buyers and creators.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              transition={{ delay: i * 0.1 }}
              className="relative flex flex-col items-center"
            >
              {i !== 0 && (
                <span className="absolute right-1/2 top-5 hidden h-px w-full bg-border sm:block" />
              )}

              <div className="relative z-10 mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-sm font-semibold shadow-sm">
                {step.number}
              </div>
              <h3 className="font-medium">{step.title}</h3>
              <div className="my-3 h-px w-28 bg-border" />
              <p className="max-w-[220px] text-sm text-muted-foreground">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
