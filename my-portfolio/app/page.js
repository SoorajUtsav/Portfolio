"use client";

import { useState } from "react";
import Image from "next/image";

import NavBar from "./components/navSection";
import AboutMe from "./components/aboutMeSection";
import Road1 from "../public/road_1.jpg";
import Link from "next/link";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  console.log(darkMode);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
          <AboutMe />
          <section>
            <div>
              <h3 className="text-3xl py-1 dark:text-white ">About Meee !</h3>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                Hey there! I'm Utsav, a chill dude from the coastal town of
                Kundapura in Karnataka.
              </p>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                I did my Bachelor of Engineering at PES University in Bangalore,
                and now I'm rocking it as a Front End Developer. I've worked at
                a couple of organisations(Still continuing and will be
                continuing to do...), coding away and loving every moment of it.
              </p>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                Nature and beaches are my jam. When I'm not coding, you can find
                me on wheels, cruising Indian roads on my bike or car. I'm all
                about that road trip life!
              </p>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                I'm also a big fan of games and sports. Badminton, table tennis,
                volleyball—you name it, I play it. People say I'm friendly and
                lovable, which might explain why I've got a ton of friends.{" "}
                <Link href={`/about-me`}>
                  <span className="text-teal-500">
                    know more about what I like apart from coding...
                  </span>
                </Link>
              </p>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                That's me in a nutshell. Let's build something awesome together!
              </p>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
