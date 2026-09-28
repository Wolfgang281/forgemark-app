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
          <h2 className="font-heading text-2xl font-medium tracking-tight">
            Popular Categories
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Explore our curated selection of high-quality digital assets.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 divide-y divide-border border-t border-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-5">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ delay: index * 0.06 }}
              className="group flex items-center gap-4 px-5 py-6 transition-colors hover:bg-muted/40 sm:flex-col sm:items-start sm:gap-6"
            >
              <span className="font-heading text-3xl text-muted-foreground/40 transition-colors group-hover:text-foreground/70">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">{category.title}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
