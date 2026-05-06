"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type CarouselImage = {
  src: StaticImageData;
  alt: string;
};

type ImageCarouselProps = {
  images: CarouselImage[];
};

export function ImageCarousel({ images }: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const prev = () => {
    setActiveIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const next = () => {
    setActiveIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  return (
    <>
      <div className="relative mx-auto w-full max-w-full sm:max-w-4xl">
        <div className="relative mx-auto h-[430px] w-full max-w-4xl overflow-hidden py-8">
          {images.map((image, index) => {
            const isActive = index === activeIndex;
            const distance = Math.abs(index - activeIndex);

            return (
              <button
                key={image.alt}
                onClick={() => {
                  if (isActive) setModalOpen(true);
                  else setActiveIndex(index);
                }}
                className={`absolute left-1/2 top-1/2 overflow-hidden rounded-2xl border border-neutral-800 transition-all duration-700 ease-out ${
                  isActive
                    ? "z-30 h-72 w-52 -translate-x-1/2 -translate-y-1/2 scale-100 opacity-100 shadow-2xl shadow-sky-500/25 sm:h-80 sm:w-60 md:h-96 md:w-72"
                    : index < activeIndex || (activeIndex === 0 && index === images.length - 1)
                    ? "z-10 h-60 w-44 -translate-x-[95%] -translate-y-1/2 scale-90 opacity-45 blur-[1px] grayscale-[20%] sm:h-72 sm:w-52 md:h-80 md:w-60"
                    : "z-10 h-60 w-44 -translate-x-[5%] -translate-y-1/2 scale-90 opacity-45 blur-[1px] grayscale-[20%] sm:h-72 sm:w-52 md:h-80 md:w-60"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out"
                />
              </button>
            );
          })}
        </div>

        <button
          onClick={prev}
          className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-700 bg-[#111]/90 text-white backdrop-blur transition hover:bg-[#1A1A1A]"
          aria-label="Imagen anterior"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-700 bg-[#111]/90 text-white backdrop-blur transition hover:bg-[#1A1A1A]"
          aria-label="Imagen siguiente"
        >
          <ChevronRight size={20} />
        </button>

        <p className="mt-2 text-center text-sm text-neutral-500">
          Tocá la imagen central para verla en grande
        </p>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4">
          <button
            onClick={() => setModalOpen(false)}
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 bg-[#111] text-white"
            aria-label="Cerrar imagen"
          >
            <X size={20} />
          </button>

          <div className="relative h-[85vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-neutral-800">
            <Image
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}