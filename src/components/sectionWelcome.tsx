"use client"; // Indica que este componente deve ser renderizado no lado do cliente

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import ImgCapa from "../assets/images/img_capa.png";

export function SectionWelcome() {
  //referenciando com valor inicial null
  const textWelcomeRef = useRef(null);
  const imgWelcomeRef = useRef(null);

  // Efeito para animar elementos quando o componente for montado
  useEffect(() => {
    const textWelcome = textWelcomeRef.current;
    const imgWelcome = imgWelcomeRef.current;

    //Animação para o texto do Welcome
    gsap.fromTo(
      textWelcome,
      {
        opacity: 0,
        y: "10%",
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power4.out",
      },
    );
    //Animação para a imagem do Welcome
    gsap.fromTo(
      imgWelcome,
      {
        opacity: 0,
        y: "10%",
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power4.out",
      },
    );
  }, []);

  return (
    <section className="flex h-half w-full flex-col items-center justify-center space-y-6 border-b-2 border-b-gray-light md:flex-row md:justify-around md:space-y-0">
      <div
        ref={textWelcomeRef}
        className="space-y-5 p-3 opacity-0 md:w-2/5 md:space-y-5"
      >
        <div className="flex flex-col px-4 text-center md:px-2 md:text-start">
          <h1 className="text-6xl lg:text-7xl 2xl:text-9xl">
            Find diversity <br />
            on our <span>phones</span>
          </h1>
          <p className="font-paragraph text-sm text-my-gray md:text-justify 2xl:text-lg">
            Explore a world of possibilities at your fingertips. Our platform
            connects you to a vast array of technologies, ideas, and
            innovations. Embrace the diversity on our phones and discover
            something extraordinary every day.
          </p>
        </div>

        <div className="flex items-center justify-around px-2 md:justify-normal md:space-x-36">
          <h3 className="text-3xl text-my-white 2xl:text-5xl">$300</h3>
          <a
            className="rounded-3xl border-2 border-solid border-btn-yellow bg-btn-yellow px-4 py-1 text-base font-normal tracking-wider text-black shadow-btn transition duration-500 hover:border-my-white hover:bg-my-white 2xl:text-xl"
            href="/"
          >
            VIEW MORE
          </a>
        </div>
      </div>
      <div className="flex">
        <Image
          ref={imgWelcomeRef}
          className="w-72 rounded-full opacity-0 shadow-img 2xl:w-[450px]"
          src={ImgCapa}
          alt="capa"
        />
      </div>
    </section>
  );
}
