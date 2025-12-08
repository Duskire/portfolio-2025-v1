import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col font-medium">
        <div className="flex flex-col justify-center flex-grow items-center mx-[32px]">
          <div className="text-[24px] mb-[8px]">Hi, I'm Zak! <br /></div>
          <div>I am a programmer and designer, with a focus on clean, simple, and thoughtful design. <br />
          I've been passionate about technology from a young age, and I'd love to make my own impact on the industry by creating and innovating with new projects and ideas. <br />
          In my own time, a few hobbies of mine include photography, homelab, guitar, and video games. <br />
          You can find more of my work or contact me through my links on the page footer. <br />
          Thank you for taking the time to explore my work!</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}