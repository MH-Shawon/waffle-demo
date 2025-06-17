"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useLayoutEffect } from "react";
import Image from "next/image";

interface CardData {
  price: string;
  title: string;
  description: string;
  image: string;
  backgroundText: string;
  rotateImage: "right" | "left";
  dark: boolean;
}

const cards: CardData[] = [
  {
    price: "12$",
    title: "THE CLASSIC STREET BOSS",
    description:
      "A tribute to the original — juicy beef patty, melted cheddar, crispy lettuce, ripe tomatoes, and a hint of our secret sauce, all stacked on a toasted brioche bun.",
    image: "/assets/Images/item1.png",
    backgroundText: "THE CLASSIC STREET BOSS",
    rotateImage: "right",
    dark: true,
  },
  {
    price: "15$",
    title: "THE SMOKY BBQ ROYALE",
    description:
      "Bold and smoky! Double patties glazed with BBQ sauce, topped with crispy onion rings, melted pepper jack cheese, and a kick of jalapeños, all wrapped in a soft sesame bun.",
    image: "/assets/Images/item2.png",
    backgroundText: "THE SMOKY BBQ ROYALE",
    rotateImage: "left",
    dark: false,
  },
  {
    price: "14$",
    title: "THE VEGGIE DELIGHT",
    description:
      "A fresh and tasty vegetarian option with a grilled veggie patty, crisp lettuce, juicy tomato, and creamy avocado on a toasted bun.",
    image: "/assets/Images/item3.png",
    backgroundText: "THE VEGGIE DELIGHT",
    rotateImage: "right",
    dark: true,
  },
  {
    price: "13$",
    title: "THE SPICY CRUNCH",
    description:
      "A fiery favorite! Spicy fried chicken, crunchy slaw, pickles, and a drizzle of hot sauce, all in a soft potato bun.",
    image: "/assets/Images/item4.png",
    backgroundText: "THE SPICY CRUNCH",
    rotateImage: "left",
    dark: false,
  },
];

function SignatureCard({
  price,
  title,
  description,
  image,
  backgroundText,
  rotateImage = "right",
  dark = false,
  rotateCard = "right",
}: {
  price: string;
  title: string;
  description: string;
  image: string;
  backgroundText: string;
  rotateImage?: "right" | "left";
  dark?: boolean;
  rotateCard?: "right" | "left";
}) {
  const textRef = useRef<HTMLSpanElement>(null);
  const [textWidth, setTextWidth] = useState(0);

  useLayoutEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth);
    }
  }, [backgroundText]);

  const speed = 40; // pixels per second
  const duration = textWidth / speed; // duration for one full scroll

  return (
    <div
      className={`relative w-full max-w-4xl mx-auto my-12 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 ${
        rotateCard === "right" ? "rotate-2" : "-rotate-2"
      } ${dark ? "bg-black text-white" : "bg-background text-black"}`}
    >
      {/* Faded background text */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute flex h-full top-16 -translate-y-1/4"
          style={{ width: "max-content" }}
          animate={{ x: [-textWidth, 0] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: duration,
              ease: "linear",
            },
          }}
        >
          {Array(2)
            .fill(0)
            .map((_, i) => (
              <span
                key={i}
                ref={i === 0 ? textRef : null}
                className="opacity-10 text-[12vw] font-bold uppercase pointer-events-none select-none whitespace-nowrap px-8"
              >
                {backgroundText}
              </span>
            ))}
        </motion.div>
      </div>
      {/* Price badge */}
      <div
        className={`absolute top-8 left-8 z-10 rounded-full px-5 py-3 text-lg font-bold shadow-lg ${
          dark ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        {price}
      </div>
      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-10 py-16 relative z-10">
        <div className="flex-1 min-w-[250px]">
          <h2 className="text-4xl md:text-5xl font-denk mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-lg md:text-xl mb-8 font-bai max-w-lg">
            {description}
          </p>
          <button
            className={`border rounded-full px-8 py-3 text-lg font-semibold transition-all duration-200 ${
              dark
                ? "border-white text-white hover:bg-white hover:text-black"
                : "border-black text-black hover:bg-black hover:text-white"
            }`}
          >
            BOOK NOW
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div
            className={`w-72 h-72 md:w-96 md:h-96 relative transition-transform duration-300 ${
              rotateImage === "right" ? "rotate-3" : "-rotate-3"
            }`}
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain drop-shadow-2xl"
              sizes="(max-width: 768px) 288px, 384px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function StickyMotionCard({ index, card }: { index: number; card: CardData }) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  const initialRotate = index % 2 === 0 ? -8 : 8;
  const finalRotate = index % 2 === 0 ? 2 : -2;

  return (
    <motion.div
      ref={ref}
      className="flex-none h-[655px] sticky top-1/2 -translate-y-1/2 w-[1120px] will-change-transform mx-auto"
      style={{ zIndex: 100 + index }}
      initial={{ opacity: 0, y: 100, rotate: initialRotate }}
      animate={
        hasAnimated
          ? { opacity: 1, y: 0, rotate: finalRotate }
          : { opacity: 0, y: 100, rotate: initialRotate }
      }
      transition={{ duration: 1.2, ease: "easeInOut", delay: index * 0.18 }}
    >
      <SignatureCard
        {...card}
        rotateCard={index % 2 === 0 ? "right" : "left"}
      />
    </motion.div>
  );
}

export default function SignatureCardsStack() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  return (
    <motion.section
      ref={sectionRef}
      className="relative py-24"
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-5xl font-bold text-center mb-16">
        Our Signature Bites
      </h2>
      <div className="relative" style={{ height: `${cards.length * 655}px` }}>
        {cards.map((card, i) => (
          <StickyMotionCard key={card.title} index={i} card={card} />
        ))}
      </div>
    </motion.section>
  );
}
