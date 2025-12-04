import ProjectCard from "./projectcard";

export default function ProjectCardGrid() {
  const cards = [
    {
      image: "/placeholder.svg",
      title: "Loft (WIP)",
      description: "An all-in-one education platform designed for studying, collaboration, and communication.",
      href: "/projects/#loft",
    },
    {
      image: "/placeholder.svg",
      title: "Demerit Points Calculator",
      description: "A driving demerit calculator created as part of a tertiary project.",
      href: "/projects/#demerit-points-calculator",
    },
    {
      image: "/placeholder.svg",
      title: "GigaChatbot",
      description: "A Python-based chatbot that can do a range of tasks using commands and user input.",
      href: "/projects/#gigachatbot",
    },
    {
      image: "/placeholder.svg",
      title: "DuskAmp (WIP)",
      description: "A clean, functional, and customisable music-player application.",
      href: "/projects/#duskamp",
    },
    {
      image: "/placeholder.svg",
      title: "DuskTorrent (WIP)",
      description: "A lightweight torrent client with a clean, straightforward interface.",
      href: "/projects/#dusktorrent",
    },
    {
      image: "/placeholder.svg",
      title: "This site!",
      description: "A portfolio site created to showcase my work and share information about me in one place.",
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