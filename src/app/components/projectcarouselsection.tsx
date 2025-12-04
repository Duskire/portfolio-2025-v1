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
      <h2 className="mb-[32px] text-3xl md:text-4xl font-bold text-left">{title}</h2>
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