import Image from "next/image";
import { useEffect, useState } from "react";

export default function Gallery({ name, user }) {
  const [active, setActive] = useState(0);

  const arrayOfImages = [
    "/assets/images/greenpeas.jpg",
    "/assets/images/hala.JPG",
    "/assets/images/coffeeBreak.JPG",
    "/assets/images/holidayAll.JPG",
    "/assets/images/OSRA.JPG",
  ];

  useEffect(() => {
    let interval = setInterval(() => {
      document.querySelector("button[data-carousel-next]").click();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="gallery" className="relative w-full" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative overflow-hidden h-46 rounded-lg md:h-[600px]">
        {/* Item 1 */}
        {arrayOfImages.map((src, idx) => (
          /* eslint-disable-next-line */
          <img
            alt=""
            src={src}
            key={src}
            className={`${idx == active % arrayOfImages.length
              ? "left-1/2 -translate-x-1/2"
              : idx < active % arrayOfImages.length
                ? "-left-full"
                : "left-full"
              } absolute block w-screen transition-all object-cover`}
          />
        ))}
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={() => {
          if (active - 1 < 0) {
            setActive(arrayOfImages.length - 1);
          } else {
            setActive((prev) => (prev - 1) % arrayOfImages.length);
          }
        }}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-6 h-6 text-white dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={() => setActive((prev) => (prev + 1) % arrayOfImages.length)}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-6 h-6 text-white dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
