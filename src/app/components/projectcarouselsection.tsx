"use client";

import React from "react";
import ProjectCarousel from "./projectcarousel";
import { carousels } from "./carousels";

interface CarouselSectionProps {
  carouselId: string;
  title: string;
  body?: string | React.ReactNode;
  imageHeight?: string;
  imageWidth?: string;
}

export default function ProjectCarouselSection({
  carouselId,
  title,
  body,
  imageHeight,
  imageWidth,
}: CarouselSectionProps) {
  const carousel = carousels.find((c) => c.id === carouselId);

  if (!carousel) {
    console.error(`Carousel with id "${carouselId}" not found.`);
    return null;
  }

  return (
    <section className="flex flex-col items-center w-full px-6 py-12 text-center">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>

        {body && (
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            {body}
          </p>
        )}

        <div className="w-full flex justify-center">
          <ProjectCarousel carousel={carousel} imageHeight={imageHeight} imageWidth={imageWidth} />
        </div>
      </div>
    </section>
  );
}
