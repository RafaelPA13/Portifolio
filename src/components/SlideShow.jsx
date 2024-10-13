import { useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";

export default function SlideShow({ list }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? list.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === list.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div>
      <div className="flex gap-3 relative group">
        <button
          onClick={prevSlide}
          className="invisible lg group-hover:visible absolute top-1/2 -translate-y-1/2 left-5 text-3xl text-white cursor-pointer"
        >
          <FaArrowCircleLeft />
        </button>
        <img
          src={list[currentIndex].certificado}
          alt={list[currentIndex].curso}
          className="w-full h-full rounded-xl lg:h-[900px]"
        />
        <button
          onClick={nextSlide}
          className="invisible lg group-hover:visible absolute top-1/2 -translate-y-1/2 right-5 text-3xl text-white cursor-pointer"
        >
          <FaArrowCircleRight />
        </button>
      </div>
      <div className="flex mt-4 justify-center">
        {list.map((slide, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrentIndex(i);
            }}
            className={`text-2xl cursor-pointer ${
              currentIndex === i ? "text-red-500" : "text-blue-950"
            }`}
          >
            <RxDotFilled />
          </button>
        ))}
      </div>
    </div>
  );
}
