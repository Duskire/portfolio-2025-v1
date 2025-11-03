import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col font-medium">
        <div className="flex flex-col justify-center flex-grow text-center">
          About page is currently under construction.
        </div>
      </main>
      <Footer />
    </div>
  );
}