import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="flex flex-col justify-center h-[calc(100vh-96px)] font-medium text-center">
          Projects page is currently under construction.
        </div>
      </main>
      <Footer />
    </div>
  );
}