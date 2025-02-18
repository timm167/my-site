import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";
import Image from "next/image";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"} pl-8 pr-8`} >
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>
      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="laptop:mt-20 mt-10">
          <div className="mt-5 relative">
            <h1
              ref={textOne}
              className="text-3xl tablet:text-5xl laptop:text-6xl laptopl:text-7xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="text-3xl tablet:text-5xl laptop:text-6xl laptopl:text-7xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-3xl tablet:text-5xl laptop:text-6xl laptopl:text-7xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="text-3xl tablet:text-5xl laptop:text-6xl laptopl:text-7xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineFour}
            </h1>
          </div>
          

          <Socials className="mt-2 laptop:mt-5" />
        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-2xl text-bold">Portfolio</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="tablet:m-10 text-2xl text-bold">Key Skills</h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
        <div className="mt-10 laptop:mt-20 p-2 laptop:p-0 flex flex-col laptop:flex-row items-center laptop:items-start space-y-5 laptop:space-y-0 laptop:space-x-10">
        <div className="w-40 h-40 tablet:w-56 tablet:h-56 laptop:w-64 laptop:h-64 bg-gray-300 rounded-full flex items-center justify-center shadow-md relative">
          <Image
            src="/images/image.png"
            alt="Profile Image"
            layout="fill"  // Make the image fill the parent container
            className="bg-gray-300 rounded-full object-cover"
            unoptimized
          />
        </div>
          <div className="w-full laptop:w-4/5">
            <h1 className="tablet:m-10 text-2xl font-bold">About</h1>
            
            <p className="tablet:m-10 mt-2 text-2xl laptop:text-base w-full">
              I&apos;m an Oxford University graduate with a passion for software development and technology. 
              I&apos;m currently based in Newcastle and open for work. Get in touch using the contact links below.<br/>
              <br/>
              Otherwise, to learn more you can <a href="/Timothy-Charteris-CV.pdf" target="_blank" rel="noopener noreferrer"> view my CV </a>
              or check out my <a href="https://github.com/timm167" target="_blank" rel="noopener noreferrer" >Github.</a>
            </p>
          </div>

        </div>

        <Footer />
      </div>
    </div>
  );
}
