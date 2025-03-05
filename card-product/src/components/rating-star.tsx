import { useState } from "react";

export function RatingStar() {
  const [rating, setRating] = useState(4);

  const handleStarClick = (selectedRating: number) => {
    setRating(selectedRating);
  };

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 fill-current ${starValue <= rating ? 'text-yellow-500' : 'text-gray-400'} cursor-pointer`}
            viewBox="0 0 24 24"
            onClick={() => handleStarClick(starValue)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 2l2.121 6.485L20 9.515l-5.485 3.768L17.657 18 12 15.4 6.343 18l1.142-4.717L4 9.515l5.879-.03z"
            />
          </svg>
        );
      })}
    </div>
  );
};