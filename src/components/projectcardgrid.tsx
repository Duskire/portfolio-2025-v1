import ProjectCard from "@/components/projectcard";
import { getAllProjects } from "@/utils/utils";

export default function ProjectCardGrid() {
  const projects = getAllProjects();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 max-w-[1600px]">
      {projects.slice(0, 5).map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
