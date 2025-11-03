import ProjectCard from "./projectcard";

export default function ProjectCardGrid() {
  const cards = [
    {
      image: "/placeholder.svg",
      title: "Loft (WIP)",
      description: "A brief description of Loft.",
      href: "/projects/#loft",
    },
    {
      image: "/placeholder.svg",
      title: "Demerit Points Calculator",
      description: "A brief description of Demerit Points Calculator.",
      href: "/projects/#demerit-points-calculator",
    },
    {
      image: "/placeholder.svg",
      title: "GigaChatbot",
      description: "A brief description of GigaChatbot.",
      href: "/projects/#gigachatbot",
    },
    {
      image: "/placeholder.svg",
      title: "DuskAmp (WIP)",
      description: "A brief description of DuskAmp.",
      href: "/projects/#duskamp",
    },
    {
      image: "/placeholder.svg",
      title: "DuskTorrent (WIP)",
      description: "A brief description of DuskTorrent.",
      href: "/projects/#dusktorrent",
    },
    {
      image: "/placeholder.svg",
      title: "This site!",
      description: "A brief description of this site.",
      href: "/projects/#dusk-portfolio",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 max-w-[1600px]">
      {cards.slice(0, 10).map((card, index) => (
        <ProjectCard key={index} {...card} />
      ))}
    </div>
  );
}