export interface CarouselItem {
    image: string;
    alt: string;
}

export interface CarouselSet {
    id: string;
    items: CarouselItem[];
}

export const carousels: CarouselSet[] = [
    {
        id: "loft-carousel",
        items: [
            { image: "/placeholder.svg", alt: "Image 1" },
            { image: "/placeholder.svg", alt: "Image 2" },
            { image: "/placeholder.svg", alt: "Image 3" },
        ],
    },
    {
    id: "demerit-points-calculator-carousel",
        items: [
            { image: "/placeholder.svg", alt: "Image 1" },
            { image: "/placeholder.svg", alt: "Image 2" },
            { image: "/placeholder.svg", alt: "Image 3" },
        ],
    },
    {
    id: "gigachatbot-carousel",
        items: [
            { image: "/placeholder.svg", alt: "Image 1" },
            { image: "/placeholder.svg", alt: "Image 2" },
            { image: "/placeholder.svg", alt: "Image 3" },
        ],
    },
    {
    id: "duskamp-carousel",
        items: [
            { image: "/placeholder.svg", alt: "Image 1" },
            { image: "/placeholder.svg", alt: "Image 2" },
            { image: "/placeholder.svg", alt: "Image 3" },
        ],
    },
    {
    id: "dusktorrent-carousel",
        items: [
            { image: "/placeholder.svg", alt: "Image 1" },
            { image: "/placeholder.svg", alt: "Image 2" },
            { image: "/placeholder.svg", alt: "Image 3" },
        ],
    },
    {
    id: "dusk-portfolio-carousel",
        items: [
            { image: "/placeholder.svg", alt: "Image 1" },
            { image: "/placeholder.svg", alt: "Image 2" },
            { image: "/placeholder.svg", alt: "Image 3" },
        ],
    },
];
