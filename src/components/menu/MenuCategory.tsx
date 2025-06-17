"use client";

import { Button } from "@/components/ui/button";
import { MenuCategory as MenuCategoryType } from "@/types/menu";
import { motion, Variants } from "framer-motion";

interface MenuCategoryProps {
  categories: MenuCategoryType[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export function MenuCategory({
  categories,
  activeCategory,
  onCategoryChange,
}: MenuCategoryProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <motion.div
      className="flex flex-wrap justify-center gap-4 mb-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {categories.map((category) => (
        <motion.div key={category.id} variants={itemVariants}>
          <Button
            variant={activeCategory === category.id ? "default" : "outline"}
            onClick={() => onCategoryChange(category.id)}
            className={`rounded-full px-6 py-4 font-medium text-lg ${
              activeCategory !== category.id
                ? "border-2 border-[rgb(188,160,103)] text-[rgb(188,160,103)] hover:bg-[rgb(188,160,103)]/10"
                : ""
            }`}
          >
            {category.name}
          </Button>
        </motion.div>
      ))}
    </motion.div>
  );
}
