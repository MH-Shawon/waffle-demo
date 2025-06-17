"use client";

import Image from "next/image";

const recipes = [
  {
    id: 1,
    category: "INSTANT POT",
    title: "Beef and Vegetable Stew",
    image: "/assets/Images/item1.png",
  },
  {
    id: 2,
    category: "VEGETARIAN",
    title: "Eggplant Parmesan",
    image: "/assets/Images/item2.png",
  },
  {
    id: 3,
    category: "HEALTHY",
    title: "Quinoa and Black Bean Stuffed Sweet Potatoes",
    image: "/assets/Images/item3.png",
  },
  {
    id: 4,
    category: "DESSERT",
    title: "Chocolate Avocado Mousse",
    image: "/assets/Images/item4.png",
  },
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="border-2 border-[rgb(188,160,103)] rounded-xl p-8 bg-background inline-block">
            <h1 className="text-4xl md:text-5xl font-serif text-foreground tracking-wide uppercase">
              VIDEO RECIPES
            </h1>
          </div>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="border-2 border-[rgb(188,160,103)] rounded-xl p-6 bg-background hover:bg-gray-100 transition-colors duration-300 cursor-pointer group"
            >
              {/* Image Container */}
              <div className="relative mb-4 rounded-xl overflow-hidden aspect-square border-2 border-[rgb(188,160,103)]">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  className="object-cover"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="64" height="64" viewBox="0 0 64 64">
                    <defs>
                      <mask id="play-mask">
                        <rect width="64" height="64" fill="white" />
                        <polygon points="27,22 46,32 27,42" fill="black" />
                      </mask>
                    </defs>
                    <circle
                      cx="32"
                      cy="32"
                      r="32"
                      fill="rgb(188,160,103)"
                      mask="url(#play-mask)"
                    />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <p className="text-yellow-600 text-sm font-sans tracking-widest uppercase">
                  {recipe.category}
                </p>
                <h3 className="text-foreground text-2xl font-serif leading-tight">
                  {recipe.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
