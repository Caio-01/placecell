"use client"; // Indica que este componente deve ser renderizado no lado do cliente

import React, { useEffect, useRef } from "react";
import { Headset, Truck, Wallet } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export function SectionServices() {
  const textServicesRef = useRef(null);
  const sectionTextServiceRef = useRef(null);

  useEffect(() => {
    const textService = textServicesRef.current;
    const sectionTextService = sectionTextServiceRef.current;
    //Animação para o texto do Service
    gsap.fromTo(
      textService,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionTextService,
          start: "top center",
        },
      },
    );
  }, []);

  return (
    <section
      ref={sectionTextServiceRef}
      className="relative flex h-half w-full items-center justify-center"
    >
      <div className="absolute right-0 top-0 w-44 opacity-5 md:-top-7 md:w-96">
        <svg
          id="sw-js-blob-svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <defs>
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              <stop stopColor="rgba(156, 156, 156, 1)" offset="0%" />
              <stop stopColor="rgba(156, 156, 156, 1)" offset="100%" />
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient)"
            d="M16.9,-29.6C21.9,-26.3,26.1,-21.9,30.2,-16.8C34.4,-11.6,38.5,-5.8,39.1,0.4C39.7,6.5,36.8,13.1,33.3,19.3C29.8,25.5,25.7,31.4,20,32C14.3,32.6,7.2,27.9,1.4,25.5C-4.4,23.1,-8.8,23,-14.2,22.2C-19.5,21.4,-25.8,20,-30.2,16.2C-34.6,12.3,-37.1,6.2,-36.9,0.1C-36.6,-5.9,-33.6,-11.8,-30.7,-18.2C-27.8,-24.6,-25.1,-31.6,-20,-34.9C-14.9,-38.1,-7.4,-37.6,-0.8,-36.3C5.9,-35,11.8,-32.8,16.9,-29.6Z"
            width="100%"
            height="100%"
            transform="translate(50 50)"
            strokeWidth="0"
          />
        </svg>
      </div>
      <article
        ref={textServicesRef}
        className="flex h-4/5 w-11/12 flex-col items-center justify-around gap-4 opacity-0 2xl:flex-row"
      >
        <div className="flex h-64 w-full items-center justify-center gap-4 md:w-1/3">
          <Truck className="size-14 md:size-16 2xl:size-20" />
          <div className="flex flex-col border-b-2 border-b-gray-light py-2">
            <h1 className="text-3xl md:text-4xl 2xl:text-6xl">Free Shipping</h1>
            <p className="text-base text-my-gray md:text-2xl">
              on order above $50,00
            </p>
          </div>
        </div>
        <div className="flex h-64 w-full items-center justify-center gap-4 md:w-1/3">
          <Headset className="size-14 md:size-16 2xl:size-20" />
          <div className="flex flex-col border-b-2 border-b-gray-light py-2">
            <h1 className="text-3xl md:text-4xl 2xl:text-6xl">Support 24/7</h1>
            <p className="text-base text-my-gray md:text-2xl">
              Contatc us 24 hr, 7days
            </p>
          </div>
        </div>

        <div className="flex h-64 w-full items-center justify-center gap-4 md:w-1/3">
          <Wallet className="size-14 md:size-16 2xl:size-20" />
          <div className="flex flex-col border-b-2 border-b-gray-light py-2">
            <h1 className="text-3xl md:text-4xl 2xl:text-6xl">
              Payment Secure
            </h1>
            <p className="text-base text-my-gray md:text-2xl">
              We ensure secure payment
            </p>
          </div>
        </div>
      </article>
      <div className="absolute inset-x-0 bottom-0 w-full opacity-15">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#585858"
            fill-opacity="1"
            d="M0,160L80,170.7C160,181,320,203,480,213.3C640,224,800,224,960,234.7C1120,245,1280,267,1360,277.3L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
