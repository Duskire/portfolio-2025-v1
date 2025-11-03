"use client";

import React from "react";
import ProjectCarousel from "./projectcarousel";
import { carousels } from "./carousels";

interface CarouselSectionProps {
  carouselId: string;
  title: string;
  body: React.ReactNode;
  imageHeight?: string;
  imageWidth?: string;
}

/* export default function ProjectCarouselSection({
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
    <section className="flex flex-col items-center w-full px-6 py-12">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left">{title}</h2>

        <div className="w-full flex justify-center">
          <ProjectCarousel carousel={carousel} imageHeight={imageHeight} imageWidth={imageWidth} />
        </div>
        
        {body && (
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-left">
            {body}
          </p>
        )}
      </div>
    </section>
  );
} */

export default function ProjectCarouselSection({
  carouselId,
  title,
  body,
  imageWidth = "w-[600px] md:w-[800px]",
  imageHeight = "h-[400px]",
}: {
  carouselId: string;
  title: string;
  body: React.ReactNode;
  imageWidth?: string;
  imageHeight?: string;
}) {
  return (
    <section
      id={carouselId}
      className="flex flex-col my-12"
    >
      <h2 className="mb-[32px] text-3xl md:text-4xl font-bold mb-4 text-left">{title}</h2>
      <div className={`max-w-[800px] w-full`}>
        <div className="flex justify-center">
          <div className={`${imageWidth}`}>
            <ProjectCarousel
              carousel={{
                id: carouselId,
                items: carousels.find((c) => c.id === carouselId)?.items || [],
              }}
              imageWidth="w-full"
              imageHeight={imageHeight}
            />
          </div>
        </div>
                <div className="mt-[32px] text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed text-left">
          {body}
        </div>
      </div>
    </section>
  );
}