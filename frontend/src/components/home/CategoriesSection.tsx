import { categories } from "@/data/home";
import { fadeUp } from "@/lib/motion";
import { motion } from "motion/react";

export function CategoriesSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        className="mb-8 flex flex-col items-center justify-between gap-2 text-center sm:mb-10 sm:flex-row sm:text-left"
      >
        <div>
          <h2 className="text-lg font-semibold tracking-tight">
            Popular Categories
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Explore our curated selection of high-quality digital assets.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-5">
        {categories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -3 }}
              className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card px-4 py-7 text-center shadow-sm transition-shadow hover:border-foreground/20 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted transition-colors group-hover:bg-foreground group-hover:text-background">
                <Icon className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                {cat.title}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
