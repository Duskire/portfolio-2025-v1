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
              body={
                <>
                  Loft was a project that I began writing as a project for my DigiTech class in high school, the goal was to create a single unified place for students to communicate online with each other in a moderated environment, complete school work, be notified of upcoming events, and get news and other announcements from the school. <br /> 
                  Loft has since been put on hold due while I work on other things and complete my tertiary education, but I plan on returning to it soon. <br />
                  <strong>Languages/frameworks: Electron, HTML, Tailwind CSS, TypeScript, React</strong>
                </>
              }
              imageWidth="w-[600px] md:w-[800px]"
              imageHeight="h-[400px]"
            />
          </div>
          <div id = "demerit-points-calculator">
            <ProjectCarouselSection
              carouselId="demerit-points-calculator-carousel"
              title="Demerit Points Calculator"
              body={
                <>
                  Some information about Demerit Points Calculator here... <br />
                  <strong>Languages/frameworks: Python, HTML, Flask, Bootstrap</strong>
                </>
              }
              imageWidth="w-[600px] md:w-[800px]"
              imageHeight="h-[400px]"
            />
          </div>
          <div id = "gigachatbot">
            <ProjectCarouselSection
              carouselId="gigachatbot-carousel"
              title="GigaChatbot"
              body={
                <>
                  Some information about GigaChatbot here... <br />
                  <strong>Languages/frameworks: Python</strong>
                </>
              }
              imageWidth="w-[600px] md:w-[800px]"
              imageHeight="h-[400px]"
            />
          </div>
          <div id = "duskamp">
            <ProjectCarouselSection
              carouselId="duskamp-carousel"
              title="DuskAmp (WIP)"
              body={
                <>
                  Some information about DuskAmp here... <br />
                  <strong>Languages/frameworks: Qt, C++</strong>
                </>
              }
              imageWidth="w-[600px] md:w-[800px]"
              imageHeight="h-[400px]"
            />
          </div>
          <div id = "dusktorrent">
            <ProjectCarouselSection
              carouselId="dusktorrent-carousel"
              title="DuskTorrent (WIP)"
              body={
                <>
                  Some information about DuskTorrent here... <br />
                  <strong>Languages/frameworks: Spring, Java</strong>
                </>
              }
              imageWidth="w-[600px] md:w-[800px]"
              imageHeight="h-[400px]"
            />
          </div>
          <div id = "dusk-portfolio">
            <ProjectCarouselSection
              carouselId="dusk-portfolio-carousel"
              title="Portfolio (This site!)"
              body={
                <>
                  Some information about this site here... <br />
                  <strong>Languages/frameworks: Next.js, Electron, HTML, Tailwind CSS, TypeScript, React</strong>
                </>
              }
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