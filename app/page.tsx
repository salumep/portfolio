import Image from 'next/image';
import About from './_components/About';
import Header from './_components/Header';
import Experience from './_components/Experience';
import Projects from './_components/Projects';
import Footer from './_components/Footer';
import SummaryDir from './_components/SummaryDir';
import Education from './_components/Education';

export default function Home() {
  return (
    <div className="container">
      <Header />
      <div className="lg:flex lg:justify-between lg:gap-4 ">
        <SummaryDir />
        <main className="pt-24 flex-1 lg:py-24">
          <About />
          <Experience />
          <Projects />
          <Education />
          <Footer />
        </main>
      </div>
    </div>
  );
}
