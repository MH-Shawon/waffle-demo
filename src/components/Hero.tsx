"use client";

import Image from "next/image";

import { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  Variants,
} from "framer-motion";

type ImagePosition = {
  src: string;
  alt: string;
  top: string;
} & ({ left: string; right?: never } | { right: string; left?: never });

interface ImageSet {
  left: ImagePosition[];
  right: ImagePosition[];
}

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorSide, setCursorSide] = useState<"left" | "right" | "center">(
    "center"
  );
  const [currentImageSet, setCurrentImageSet] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [hasInteractedWithName, setHasInteractedWithName] = useState(false);

  const { scrollY } = useScroll();

  // Transform scroll into background movement
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -200]);
  const textScale = useTransform(scrollY, [0, 500], [1, 0.9]);
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const windowWidth = window.innerWidth;
      const mouseX = e.clientX;

      setMousePosition({ x: mouseX, y: e.clientY });

      if (mouseX < windowWidth * 0.25) {
        setCursorSide("left");
      } else if (mouseX > windowWidth * 0.75) {
        setCursorSide("right");
      } else {
        setCursorSide("center");
      }
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const imageSetIndex = Math.floor(scrollPosition / 200) % imageSets.length;
      setCurrentImageSet(imageSetIndex);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Waffle-specific image collections
  const itemImages: Record<string, ImagePosition[]> = {
    classic: [
      {
        src: "/assets/Images/item1.png",
        alt: "Classic Waffle",
        top: "15%",
        left: "8%",
      },
      {
        src: "/assets/Images/item2.png",
        alt: "Waffle with Syrup",
        top: "35%",
        right: "10%",
      },
      {
        src: "/assets/Images/item3.png",
        alt: "Waffle with Berries",
        top: "55%",
        left: "12%",
      },
      {
        src: "/assets/Images/item4.png",
        alt: "Waffle with Cream",
        top: "75%",
        right: "8%",
      },
    ],
    signature: [
      {
        src: "/assets/Images/popularItems1.jpg",
        alt: "Blueberry Waffle",
        top: "20%",
        left: "10%",
      },
      {
        src: "/assets/Images/popularItems2.jpg",
        alt: "Special Waffle",
        top: "40%",
        right: "12%",
      },
      {
        src: "/assets/Images/popularItems3.jpg",
        alt: "Premium Waffle",
        top: "60%",
        left: "6%",
      },
      {
        src: "/assets/Images/popularItems4.jpg",
        alt: "Deluxe Waffle",
        top: "80%",
        right: "14%",
      },
    ],
    chocolate: [
      {
        src: "/assets/Images/item1.png",
        alt: "Chocolate Waffle",
        top: "18%",
        left: "14%",
      },
      {
        src: "/assets/Images/item2.png",
        alt: "Chocolate Waffle with Syrup",
        top: "38%",
        right: "6%",
      },
      {
        src: "/assets/Images/item3.png",
        alt: "Chocolate Waffle with Berries",
        top: "58%",
        left: "8%",
      },
      {
        src: "/assets/Images/item4.png",
        alt: "Chocolate Waffle with Cream",
        top: "78%",
        right: "12%",
      },
    ],
    savory: [
      {
        src: "/assets/Images/popularItems1.jpg",
        alt: "Savory Waffle",
        top: "22%",
        left: "12%",
      },
      {
        src: "/assets/Images/popularItems2.jpg",
        alt: "Special Savory Waffle",
        top: "42%",
        right: "8%",
      },
      {
        src: "/assets/Images/popularItems3.jpg",
        alt: "Premium Savory Waffle",
        top: "62%",
        left: "10%",
      },
      {
        src: "/assets/Images/popularItems4.jpg",
        alt: "Deluxe Savory Waffle",
        top: "82%",
        right: "14%",
      },
    ],
    berry: [
      {
        src: "/assets/Images/item1.png",
        alt: "Berry Waffle",
        top: "25%",
        left: "8%",
      },
      {
        src: "/assets/Images/item2.png",
        alt: "Berry Waffle with Syrup",
        top: "45%",
        right: "10%",
      },
      {
        src: "/assets/Images/item3.png",
        alt: "Berry Waffle with Berries",
        top: "65%",
        left: "12%",
      },
      {
        src: "/assets/Images/item4.png",
        alt: "Berry Waffle with Cream",
        top: "85%",
        right: "8%",
      },
    ],
  };

  // Image sets for 3-image display
  const imageSets: ImageSet[] = [
    {
      left: [
        {
          src: "/assets/Images/item1.png",
          alt: "Waffle 1",
          top: "25%",
          left: "8%",
        },
        {
          src: "/assets/Images/popularItems2.jpg",
          alt: "Waffle 2",
          top: "65%",
          left: "12%",
        },
      ],
      right: [
        {
          src: "/assets/Images/item3.png",
          alt: "Waffle 3",
          top: "45%",
          right: "10%",
        },
      ],
    },
    {
      left: [
        {
          src: "/assets/Images/popularItems1.jpg",
          alt: "Waffle 4",
          top: "30%",
          left: "6%",
        },
        {
          src: "/assets/Images/item2.png",
          alt: "Waffle 5",
          top: "60%",
          left: "14%",
        },
      ],
      right: [
        {
          src: "/assets/Images/popularItems3.jpg",
          alt: "Waffle 6",
          top: "45%",
          right: "12%",
        },
      ],
    },
    {
      left: [
        {
          src: "/assets/Images/item4.png",
          alt: "Waffle 7",
          top: "22%",
          left: "10%",
        },
        {
          src: "/assets/Images/popularItems4.jpg",
          alt: "Waffle 8",
          top: "68%",
          left: "8%",
        },
      ],
      right: [
        {
          src: "/assets/Images/item1.png",
          alt: "Waffle 9",
          top: "45%",
          right: "8%",
        },
      ],
    },
  ];

  const handleItemHover = (itemName: string) => {
    setHoveredItem(itemName);
    setHasInteractedWithName(true);
  };

  const handleItemLeave = () => {
    setHoveredItem(null);
  };

  const getVisibleImages = () => {
    if (hoveredItem) {
      return itemImages[hoveredItem] || [];
    }

    if (
      hasInteractedWithName &&
      (cursorSide === "left" || cursorSide === "right")
    ) {
      const currentImages = imageSets[currentImageSet];
      if (cursorSide === "left") {
        return [...currentImages.left, currentImages.right[0]];
      } else {
        return [
          currentImages.left[0],
          ...currentImages.right,
          currentImages.left[1],
        ];
      }
    }

    return [];
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -50,
      transition: {
        duration: 0.3,
      },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-[#FAEBD6] relative overflow-hidden cursor-none"
      style={{ y: backgroundY }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.header
        className="flex items-center justify-end p-6 text-gray-900 relative z-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      ></motion.header>

      {/* Food Images */}
      <AnimatePresence mode="wait">
        {getVisibleImages().map((item, index) => (
          <motion.div
            key={`${hoveredItem || cursorSide}-${currentImageSet}-${index}`}
            className="absolute z-10"
            style={{
              top: item.top,
              ...(item.left && { left: item.left }),
              ...(item.right && { right: item.right }),
            }}
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            custom={index}
          >
            <motion.div
              className="relative w-24 h-32 md:w-28 md:h-36 lg:w-32 lg:h-40"
              whileHover={{
                scale: 1.1,
                rotate: Math.random() * 10 - 5,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover rounded-lg shadow-xl border-2 border-white/20"
              />
            </motion.div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Custom Cursor */}
      <motion.div
        className="fixed w-4 h-4 bg-gray-900/80 rounded-full pointer-events-none z-30"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
        animate={{
          scale:
            hoveredItem || (hasInteractedWithName && cursorSide !== "center")
              ? 1.5
              : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />

      {/* Main Content */}
      <div className="flex items-center justify-center mt-32 min-h-[calc(100vh-120px)] px-6 relative z-15">
        <div className="w-full max-w-7xl">
          {/* Center - Large Typography */}
          <motion.div
            className="text-center"
            style={{ scale: textScale, opacity: textOpacity }}
          >
            <div className="space-y-2">
              <motion.h1
                className="text-6xl md:text-8xl lg:text-9xl font-bold text-gray-900/80 leading-none tracking-tight cursor-pointer font-[var(--font-denk)]"
                variants={textVariants}
                whileHover={{ scale: 1.02, color: "#BC9F67" }}
                onMouseEnter={() => handleItemHover("classic")}
                onMouseLeave={handleItemLeave}
              >
                Maple Pecan
              </motion.h1>
              <motion.h2
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900/70 leading-none tracking-tight cursor-pointer font-[var(--font-denk)]"
                variants={textVariants}
                whileHover={{ scale: 1.02, color: "#BC9F67" }}
                onMouseEnter={() => handleItemHover("signature")}
                onMouseLeave={handleItemLeave}
              >
                Blueberry Bliss
              </motion.h2>
              <motion.h2
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900/70 leading-none tracking-tight cursor-pointer font-[var(--font-denk)]"
                variants={textVariants}
                whileHover={{ scale: 1.02, color: "#BC9F67" }}
                onMouseEnter={() => handleItemHover("chocolate")}
                onMouseLeave={handleItemLeave}
              >
                Chocolate Dream
              </motion.h2>
              <motion.h2
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900/70 leading-none tracking-tight cursor-pointer font-[var(--font-denk)]"
                variants={textVariants}
                whileHover={{ scale: 1.02, color: "#BC9F67" }}
                onMouseEnter={() => handleItemHover("savory")}
                onMouseLeave={handleItemLeave}
              >
                Savory Delight
              </motion.h2>
              <motion.h2
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900/70 leading-none tracking-tight cursor-pointer font-[var(--font-denk)]"
                variants={textVariants}
                whileHover={{ scale: 1.02, color: "#BC9F67" }}
                onMouseEnter={() => handleItemHover("berry")}
                onMouseLeave={handleItemLeave}
              >
                Berry Burst
              </motion.h2>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-gray-900/60 text-sm font-[var(--font-bai-jamjuree)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          {hoveredItem
            ? ``
            : hasInteractedWithName &&
              (cursorSide === "left" || cursorSide === "right")
            ? ""
            : ""}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
