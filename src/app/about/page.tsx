import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center px-4 py-16">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center">
          Hi, I'm Zak!
        </h1>

        {/* Intro card */}
        <div className="p-8 md:p-12 w-full max-w-2xl flex flex-col space-y-6">
          <p className="text-lg leading-relaxed">
            I am a programmer and designer, with a focus on clean, simple, and thoughtful design.
          </p>

          <p className="text-lg leading-relaxed">
            I've been passionate about technology from a young age, and I'd love to make my own impact on the industry by creating and innovating with new projects and ideas.
          </p>

          <p className="text-lg leading-relaxed">
            In my own time, a few hobbies of mine include photography, homelab, guitar, and video games.
          </p>

          <p className="text-lg leading-relaxed">
            You can find more of my work or contact me through my links on the page footer. Thank you for taking the time to explore my work!
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
