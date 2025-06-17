"use client";

import { Marquee } from "@/components/ui/marquee";
import ReviewCard from "@/components/ReviewCard";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
    rating: 3.5,
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
    rating: 4.9,
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
    rating: 4.5,
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
    rating: 4.9,
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
    rating: 4.5,
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
    rating: 3.9,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

export default function CustomerReviews() {
  return (
    <section id="reviews" className="py-20 bg-[#FAEBD6]">
      <div className="text-center mb-12">
        <h2 className="text-6xl font-bold mb-4 text-black font-denk">
          Customer Reviews
        </h2>
        <p className="text-gray-800 max-w-2xl mx-auto font-[var(--font-bai-jamjuree)]">
          Hear what our customers have to say about their experience at Waffle
          House
        </p>
        <div className="w-24 h-1 bg-[#BC9F67] mx-auto mt-6"></div>
      </div>
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background ">
        <Marquee reverse={true} speed={15} className="mb-4">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse={false} speed={15}>
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </section>
  );
}
