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
                  This calculator was created as the final project for the programming course in my diploma. The course focused primarily on Python, which is why Flask was used. <br />
                  I made my own adjustments to the Bootstrap provided by the teacher to make it slightly more visually appealing. Please also note that the values in the calculator do not reflect the real-world driving penalty system, and are just for show. <br />
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
                  GigaChatbot was created as another project for my high school DigiTech class before Loft. It features a range of commands that can be used to carry out many unique actions. <br />
                  Although this project is quite old and my skills have grown significantly since then, I consider it a good example to show how far I’ve progressed. <br />
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
                 This site was made as a place for me to share my projects with others, tell people a little about who I am, and provide links to other platforms like GitHub and LinkedIn where more information can be found about me. <br />
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