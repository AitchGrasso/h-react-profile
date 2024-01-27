import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import Image from "next/image";
import deced from "../public/h-pic-transp.png";
import techtonic from "../public/techtonic.png";
import hairsalon from "../public/hairsalon.png";
import kandoo from "../public/kandoo.png";
import dungeon from "../public/dungeon.png";
import innkeeper from "../public/innkeeper.png";
import newhorizon from "../public/new-horizon.png";
import { usedState } from "react";

// TODO: Optimize for darkmode

const imageStyle = {
  layout: "fill",
  objectFit: "cover",
};

export default function Home() {
  // const [darkMode, setDarkMode] = usedState(false);
  return (
    <div>
      <Head>
        <title>H Grasso - Software Engineer</title>
        <meta name="description" content="Fullstack Engineer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🇭</text></svg>"
        ></link>
      </Head>

      <main className="bg-zinc-100 px-10 md:px-20 lg:px-40 ">
        <section className="">
          {/* <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-monseratt'>H Grasso</h1>
            <ul className='flex items-center gap-6'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/> 
              </li>
              <li>
                <a href="#" className="bg-gradient-to-tl from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md" ml-8>Resume</a>
                </li>
            </ul>
          </nav> */}
          <div className="lg:flex">
            <div className="mx-auto">
              <div className="text-center py-10 lg:text-right">
                <h2 className="text-transparent inline-block xl:text-9xl lg:text-6xl  text-5xl py-2 text-teal-600 font-medium bg-gradient-to-tr sm:bg-gradient-to-b from-emerald-500 to-cyan-500 bg-clip-text lg:pt-10">
                  H Grasso
                </h2>
                <h3 className="text-3xl py-2 md:text-3xl">
                  Fullstack Developer
                </h3>
                <p className="text-md py-3 leading-8 text-grey-800 md:text-xl max-w-xl mx-auto">
                  Transforming ideas into seamless experiences
                </p>
              </div>
              <div className="text-5xl flex justify-center lg:gap-16 sm:gap-5 md:gap-10 py-1 text-gray-600 ">
                <a href="https://twitter.com/h_grasso">
                  <AiFillTwitterCircle href="https://twitter.com/h_grasso" />
                </a>
                <a href="https://www.linkedin.com/in/hgrasso/">
                  <AiFillLinkedin />
                </a>
                <a href="https://github.com/AitchGrasso">
                  <AiFillGithub />
                </a>

                <a href="mailto:aitch.grasso@gmail.com">
                  <AiOutlineMail />
                </a>
              </div>
            </div>
            <div className="relative mx-auto shadow-2xl rounded-full w-80 h-80 mt-20  overflow-hidden md:h-50 md:w-50 lg:flex lg:right-0">
              <Image src={deced} style={imageStyle} />
            </div>
          </div>
        </section>

        <section>
          <div className="py-20 flex flex-col">
            <h3 className="text-3xl py-1">Hello, I'm H</h3>
            <p className="text-md py-2 leading-10  text-gray-800">
              Fullstack Developer blending technical prowess with
              a hospitality-inspired commitment to crafting exceptional digital
              solutions{" "}
              <u>
                Let's talk about bringing your web development projects to life.
              </u>
            </p>
          </div>

          <h3 className="text-3xl py-1">Recent Work</h3>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 items-center justify-center">
              <div className="shadow-lg lg:hover:scale-125 transition-all duration-700">
                <Image src={techtonic} width={"100%"} height={"10rem"} />
              </div>
              <h3 className="text-lg font-medium, pt-8 pb-2">TechTonic</h3>
              <p className="py-2">
                Client-side e-commerce application for computer hardware and
                consumer electronics with functional shopping cart with built-in
                product/SKU API
              </p>
              <h4 className="py-4 text-teal-600">Tools:</h4>
              <p className="text-gray-800 py-1">
                HTML5, CSS, JS, Node.JS, MongoDB
              </p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 items-center justify-center">
              <a href="http://bensenkwan.com" target="_blank">
                <div className="shadow-lg lg:hover:scale-125 transition-all duration-700">
                  <Image src={hairsalon} width={"100%"} height={"10rem"} />
                </div>
              </a>
              <h3 className="text-lg font-medium, pt-8 pb-2">
                Bensen Kwan: Musician Portfolio
              </h3>
              <p className="py-2">
                Portfolio for a professional musician with an elegant design.
                Enhance your web presence that perfectly represents your
                business or your personal brand.
              </p>
              <h4 className="py-4 text-teal-600">Tools:</h4>
              <p className="text-gray-800 py-1">
                HTML5, CSS, Javascript, SEO Optimization
              </p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 items-center">
            <a href="https://kandoo.onrender.com/#" target="_blank">
              <div className="shadow-lg lg:hover:scale-125 transition-all duration-700">
                <Image src={kandoo} width={"100%"} height={"10rem"} />
              </div>
              </a>
              <h3 className="text-lg font-medium, pt-8 pb-2">
                Kandoo: About All-In-One Collaborative Platform
              </h3>
              <p className="py-2">
                A collaborative tool for the next project for individuals and
                engineering teams looking for organization without the
                distractions that you might find on Trello or Github.
              </p>
              <h4 className="py-4 text-teal-600">Tools:</h4>
              <p className="text-gray-800 py-1">
                React, MongoDB, Tailwind, Node, Express
              </p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-3xl py-1">Personal Projects</h3>
          <p>
            Between client work, I enjoy spending time on small personal
            projects to improve my skills
          </p>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 items-center justify-center">
              <div className="shadow-lg lg:hover:scale-125 transition-all duration-700">
                <Image src={dungeon} width={"100%"} height={"10rem"} />
              </div>
              <h3 className="text-lg font-medium, pt-8 pb-2">
                Console Dungeon Crawler
              </h3>
              <p className="py-2">
                You better go get (before you get got)! Defend yourself from the
                Werewolf in this python console game!
              </p>
              <h4 className="py-4 text-teal-600">Tools:</h4>
              <p className="text-gray-800 py-1">Python</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 items-center justify-center">
              <div className="shadow-lg lg:hover:scale-125 transition-all duration-700">
                <Image src={innkeeper} width={"100%"} height={"10rem"} />
              </div>
              <h3 className="text-lg font-medium, pt-8 pb-2">InnKeeper</h3>
              <p className="py-2">
                An online property management system for small-scale lodging
                owners that facilitates internal users to independently sell
                room without external users incurring service costs
              </p>
              <h4 className="py-4 text-teal-600">Tools:</h4>
              <p className="text-gray-800 py-1">
                React, Next.js, Express, Mongo.DB
              </p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 items-center">
              <div className="shadow-lg lg:hover:scale-125 transition-all duration-700 items-center justify-center">
                <Image src={newhorizon} width={"100%"} height={"5rem"} />
              </div>
              <h3 className="text-lg font-medium, pt-8 pb-2">
                New Horizons: A Casual Game
              </h3>
              <p className="py-2">
                Help the New Horizons probe dodge space debris on its way to
                Pluto!
              </p>
              <h4 className="py-4 text-teal-600">Tools:</h4>
              <p className="text-gray-800 py-1">C# & Unity</p>
            </div>
          </div>
          <div className="text-5xl flex justify-center lg:gap-16 py-1 text-gray-600 ">
            <a href="https://twitter.com/h_grasso">
              <AiFillTwitterCircle href="https://twitter.com/h_grasso" />
            </a>
            <a href="https://www.linkedin.com/in/hgrasso/">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/AitchGrasso">
              <AiFillGithub />
            </a>

            <a href="mailto:aitch.grasso@gmail.com">
              <AiOutlineMail />
            </a>
          </div>
        </section>
        <script src="gradient.js"></script>
      </main>
    </div>
  );
}
