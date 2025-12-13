import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Project {
  slug: string;
  title: string;
  summary: string;
  images: string[];
  content: string;
}

export function getAllProjects(): Project[] {
  const projectsDir = path.join(process.cwd(), "src/app/work/projects");

  const files = fs.readdirSync(projectsDir).filter((f) => f.endsWith(".mdx"));

  return files.map((filename) => {
    const filePath = path.join(projectsDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      slug: filename.replace(".mdx", ""),
      title: data.title || "Untitled",
      summary: data.summary || "",
      images: (data.images as string[]) || [],
      content: String(content || ""),
    };
  });
}