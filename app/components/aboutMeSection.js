import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import MyAvatar from "../../public/my-avatar.png";

const AboutMe = () => {
  return (
    <div className="text-center p-10 py-10">
      <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
        Sooraj Utsavvv
      </h2>
      <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
        Software Developer.
      </h3>
      <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
        Hi, I'm Utsav - a passionate Front End Developer crafting immersive web
        experiences. 🚀 Let's build something amazing together
      </p>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
        <AiFillTwitterCircle />
        <AiFillLinkedin />
        <AiFillYoutube />
      </div>
      <div className="flex mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 relative overflow-hidden mt-20 md:h-96 md:w-96">
        <Image src={MyAvatar} objectFit="cover" alt="My Avatar" />
      </div>
    </div>
  );
};

export default AboutMe;
