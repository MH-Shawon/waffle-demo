"use client";

import { useState, useMemo } from "react";
import { MenuCategory } from "./MenuCategory";
import { MenuItemCard } from "./MenuItemCard";
import { categories, menuItemsByCategory } from "@/data/menu";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<string>("nutella");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const filteredItems = useMemo(() => {
    return menuItemsByCategory[activeCategory] || [];
  }, [activeCategory]);

  // Organize items by columns - ensure even distribution
  const columnItems = {
    left: filteredItems.filter((_, index) => index % 3 === 0),
    middle: filteredItems.filter((_, index) => index % 3 === 1),
    right: filteredItems.filter((_, index) => index % 3 === 2),
  };

  // Calculate the maximum number of items in any column
  const maxItemsPerColumn = Math.max(
    columnItems.left.length,
    columnItems.middle.length,
    columnItems.right.length
  );

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const categoryVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
        delay: 0.2,
      },
    },
  };

  return (
    <section className="py-20" ref={sectionRef}>
      <div className="container mx-auto">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-6xl font-bold text-center mb-10 font-denk">
            Our Menu
          </h2>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={categoryVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <MenuCategory
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </motion.div>

        {/* Menu Grid - Consistent gaps everywhere */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-[0.85fr_1fr_0.85fr] gap-4 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {/* Left Column - Vertically centered */}
            <motion.div className="flex flex-col gap-4 justify-center">
              {columnItems.left.map((item) => (
                <motion.div key={item.id} variants={itemVariants}>
                  <MenuItemCard item={item} isMiddleColumn={false} />
                </motion.div>
              ))}
              {/* Fill empty slots */}
              {Array.from({
                length: Math.max(
                  0,
                  maxItemsPerColumn - columnItems.left.length
                ),
              }).map((_, index) => (
                <motion.div
                  key={`empty-left-${index}`}
                  variants={itemVariants}
                  className="aspect-[4.8/5.8] bg-gray-50 rounded-lg"
                />
              ))}
            </motion.div>

            {/* Middle Column - Full height */}
            <motion.div className="flex flex-col gap-4">
              {columnItems.middle.map((item) => (
                <motion.div key={item.id} variants={itemVariants}>
                  <MenuItemCard item={item} isMiddleColumn={true} />
                </motion.div>
              ))}
              {/* Fill empty slots */}
              {Array.from({
                length: Math.max(
                  0,
                  maxItemsPerColumn - columnItems.middle.length
                ),
              }).map((_, index) => (
                <motion.div
                  key={`empty-middle-${index}`}
                  variants={itemVariants}
                  className="aspect-[5/6] bg-gray-50 rounded-lg"
                />
              ))}
            </motion.div>

            {/* Right Column - Vertically centered */}
            <motion.div className="flex flex-col gap-4 justify-center">
              {columnItems.right.map((item) => (
                <motion.div key={item.id} variants={itemVariants}>
                  <MenuItemCard item={item} isMiddleColumn={false} />
                </motion.div>
              ))}
              {/* Fill empty slots */}
              {Array.from({
                length: Math.max(
                  0,
                  maxItemsPerColumn - columnItems.right.length
                ),
              }).map((_, index) => (
                <motion.div
                  key={`empty-right-${index}`}
                  variants={itemVariants}
                  className="aspect-[4.8/5.8] bg-gray-50 rounded-lg"
                />
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Results Count */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p className="text-sm text-gray-500">
            Showing {filteredItems.length} items in{" "}
            {categories.find((cat) => cat.id === activeCategory)?.name}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
