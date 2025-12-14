import Link from "next/link";
import ProjectCard from "@/components/projectcard";
import { getAllProjects } from "@/utils/utils";

export default function ProjectCardGrid() {
  const projects = getAllProjects();

  return (
    <div className="max-w-[1600px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[36px] md:text-[40px] font-bold">Projects</h2>
        <Link
          href="/work"
          className="px-4 py-2 bg-gray-900 text-white rounded-lg shadow-sm hover:shadow-md transition-all"
        >
          See All
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
        {projects.slice(0, 5).map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
