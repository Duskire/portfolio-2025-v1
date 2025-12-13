import { getAllProjects } from "@/utils/utils";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function WorkPage() {
  const projects = getAllProjects();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            // Short excerpt (first 120 chars)
            const excerpt = project.content
              .replace(/^#.*$/gm, "")
              .replace(/\n+/g, " ")
              .slice(0, 120)
              .trim();

            return (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group block p-4 border rounded-xl border-white/10 bg-card-bg hover:border-accent transition"
              >
                <div className="h-48 w-full mb-4 overflow-hidden rounded-lg">
                  {project.images[0] && (
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  )}
                </div>

                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                <p className="text-white/70 mb-2">{project.summary}</p>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}