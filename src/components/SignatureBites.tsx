import Image from "next/image";
import SectionHeader from "./SectionHeader";

const SignatureBites = () => {
  const bites = [
    {
      name: "Belgian Waffle with Berries",
      description: "Golden-brown waffle, fresh berries, whipped cream.",
      image: "/waffle-berries.jpg",
    },
    {
      name: "Chicken & Waffles",
      description: "Crispy fried chicken, fluffy waffle, maple syrup.",
      image: "/chicken-waffle.jpg",
    },
    {
      name: "Savory Waffle Sandwich",
      description: "Waffle, egg, cheese, bacon, and a hint of spice.",
      image: "/waffle-sandwich.jpg",
    },
  ];

  return (
    <section id="signature-bites" className="py-20 bg-[rgb(235,231,228)]">
      <SectionHeader
        title="Signature Bites"
        subtitle="Experience our most beloved waffle creations, crafted with passion and the finest ingredients. Each bite is a journey."
      />
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-10 mt-10">
        {bites.map((bite, index) => (
          <div key={index} className="text-center">
            <div className="relative w-full h-60 mb-6 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={bite.image}
                alt={bite.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900 font-denk">
              {bite.name}
            </h3>
            <p className="text-gray-700 font-bai">
              {bite.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SignatureBites;
