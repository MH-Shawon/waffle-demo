import { cn } from "@/lib/utils";
import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

interface ReviewCardProps {
  img: string;
  name: string;
  username: string;
  body: string;
  rating: number;
}

const ReviewCard = ({ img, name, username, body, rating }: ReviewCardProps) => {
  const renderStars = (rating: number) => {
    const totalStars = 5;
    const stars = [];
    for (let i = 1; i <= totalStars; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} className="w-4 h-4 text-yellow-400" />);
      } else if (rating > i - 1 && rating < i) {
        stars.push(
          <div key={i} className="relative">
            <FaStar className="w-4 h-4 text-yellow-400 absolute left-0 top-0" />
            <div className="overflow-hidden w-1/2">
              <FaStar className="w-4 h-4 text-gray-300" />
            </div>
          </div>
        );
      } else {
        stars.push(<FaStar key={i} className="w-4 h-4 text-gray-300" />);
      }
    }
    return <div className="flex items-center space-x-0.5">{stars}</div>;
  };

  return (
    <motion.figure
      className={cn(
        "relative w-72 h-52 cursor-pointer overflow-hidden rounded-xl p-6",
        "transition-shadow duration-200 flex flex-col justify-between"
      )}
      whileHover={{
        y: -5,
        transition: { duration: 0.15 },
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="flex items-center mb-2">
        {renderStars(rating)}
        <span className="ml-2 text-base text-gray-600">{rating}/5</span>
      </div>

      <blockquote className="mt-2 text-base text-gray-700 leading-relaxed mb-4 flex-grow">
        &quot;{body}&quot;
      </blockquote>

      <div className="flex flex-row items-center gap-2 mt-auto">
        <img
          className="rounded-full w-9 h-9 object-cover"
          alt={name}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-base font-semibold text-gray-900">
            {name}
          </figcaption>
          <p className="text-sm text-gray-500">{username}</p>
        </div>
      </div>
    </motion.figure>
  );
};

export default ReviewCard;
