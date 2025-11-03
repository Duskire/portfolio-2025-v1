import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ProjectCarouselSection from "../components/projectcarouselsection";

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col font-medium">
        <div className="flex flex-col justify-start flex-grow items-center gap-[32px]">
          <div id = "loft">
            <ProjectCarouselSection
              carouselId="loft-carousel"
              title="Loft (WIP)"
              body="Some information about Loft here..."
              imageWidth="w-[600px] md:w-[800px]"
              imageHeight="h-[400px]"
            />
          </div>
          <div id = "demerit-points-calculator">
            <ProjectCarouselSection
              carouselId="demerit-points-calculator-carousel"
              title="Demerit Points Calculator"
              body="Some information about Demerit Points Calculator here..."
              imageWidth="w-[600px] md:w-[800px]"
              imageHeight="h-[400px]"
            />
          </div>
          <div id = "gigachatbot">
            <ProjectCarouselSection
              carouselId="gigachatbot-carousel"
              title="GigaChatbot"
              body="Some information about GigaChatbot here..."
              imageWidth="w-[600px] md:w-[800px]"
              imageHeight="h-[400px]"
            />
          </div>
          <div id = "duskamp">
            <ProjectCarouselSection
              carouselId="duskamp-carousel"
              title="DuskAmp (WIP)"
              body="Some information about DuskAmp here..."
              imageWidth="w-[600px] md:w-[800px]"
              imageHeight="h-[400px]"
            />
          </div>
          <div id = "dusktorrent">
            <ProjectCarouselSection
              carouselId="dusktorrent-carousel"
              title="DuskTorrent (WIP)"
              body="Some information about DuskTorrent here..."
              imageWidth="w-[600px] md:w-[800px]"
              imageHeight="h-[400px]"
            />
          </div>
          <div id = "dusk-portfolio">
            <ProjectCarouselSection
              carouselId="dusk-portfolio-carousel"
              title="Portfolio (This site!)"
              body="Some information about this site here..."
              imageWidth="w-[600px] md:w-[800px]"
              imageHeight="h-[400px]"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}