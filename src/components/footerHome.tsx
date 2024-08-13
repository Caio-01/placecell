"use client"; // Indica que este componente deve ser renderizado no lado do cliente

import React, { useEffect, useRef } from "react";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export function FooterHome() {
  const textFooterRef = useRef(null);
  const socialMediaRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const textFooter = textFooterRef.current;
    const socialMedia = socialMediaRef.current;
    const footer = footerRef.current;
    //Animação para o texto do Footer
    gsap.fromTo(
      textFooter,
      {
        opacity: 0,
        y: "10%",
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power4.out",
        scrollTrigger: {
          trigger: footer,
          start: "-50% center",
        },
      },
    );

    //Animação para as Redes Socias
    gsap.fromTo(
      socialMedia,
      {
        opacity: 0,
        y: "10%",
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power4.out",
        scrollTrigger: {
          trigger: footer,
          start: "-50% center",
        },
      },
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative flex h-96 flex-col items-center justify-center gap-8 md:flex-row md:justify-around md:gap-0"
    >
      {/* SVG TOP */}
      <div className="absolute bottom-0 left-0 w-44 opacity-5 md:w-72">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              <stop stop-color="rgba(88, 88, 88, 1)" offset="0%"></stop>
              <stop stop-color="rgba(88, 88, 88, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient)"
            d="M18.6,-19.6C24,-17.7,28.1,-11.7,30.2,-4.6C32.3,2.4,32.2,10.5,27.7,13.7C23.2,17,14.1,15.3,5.9,20C-2.3,24.7,-9.7,35.8,-17,37.2C-24.3,38.7,-31.7,30.6,-34.4,21.8C-37.1,13,-35.2,3.6,-33.7,-6.2C-32.2,-15.9,-31.2,-25.9,-25.7,-27.8C-20.1,-29.7,-10.1,-23.4,-1.7,-21.4C6.6,-19.3,13.2,-21.5,18.6,-19.6Z"
            width="100%"
            height="100%"
            transform="translate(50 50)"
          />
        </svg>
      </div>
      {/* Texto do footer */}
      <div
        ref={textFooterRef}
        className="flex w-80 flex-col space-y-2 text-center opacity-0 md:w-1/3 md:text-justify"
      >
        <h1 className="text-5xl">
          Place<span className="text-btn-yellow">Cell</span>
        </h1>
        <p className="text-my-gray">
          Thank you for exploring with us. Stay connected for more updates and
          support. Follow us on social media or contact our support team for
          assistance. Enjoy your journey with us
        </p>
      </div>

      {/* Div Follow */}
      <div
        ref={socialMediaRef}
        className="z-10 flex w-80 flex-col items-start space-y-2 px-2 opacity-0"
      >
        <div className="text-my-gray">
          <h1>Follow us:</h1>
        </div>
        {/* Social Media */}
        <div className="flex flex-row items-center justify-center gap-8">
          <div className="rounded-full border-2 p-3">
            <a
              href="https://www.linkedin.com/in/caiocosta94/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="size-4 md:size-6" color="#ececec" />
            </a>
          </div>
          <div className="rounded-full border-2 p-3">
            <a
              href="https://github.com/Caio-01"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="size-4 md:size-6" color="#ececec" />
            </a>
          </div>
          <div className="rounded-full border-2 p-3">
            <a
              href="https://www.instagram.com/_caiio.s"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="size-4 md:size-6" color="#ececec" />
            </a>
          </div>
          <div className="rounded-full border-2 p-3">
            <a
              href="https://www.google.com/intl/pt-BR/gmail/about/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="size-4 md:size-6" color="#ececec" />
            </a>
          </div>
        </div>
      </div>
      {/* SVG Bottom */}
      <div className="absolute right-0 top-0 w-48 opacity-5 md:-top-10 md:w-96">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              <stop stop-color="rgba(88, 88, 88, 1)" offset="0%"></stop>
              <stop stop-color="rgba(88, 88, 88, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient)"
            d="M25.8,-26.7C34,-23.9,41.5,-16.3,41.5,-8.5C41.5,-0.6,34,7.3,27,12C20,16.6,13.5,17.8,7.5,19.5C1.6,21.2,-3.8,23.2,-7.3,21.4C-10.7,19.5,-12.2,13.7,-16.7,8.4C-21.2,3.2,-28.7,-1.6,-28,-4.8C-27.3,-8.1,-18.5,-9.8,-12.5,-13C-6.4,-16.2,-3.2,-20.8,2.8,-24.2C8.8,-27.5,17.7,-29.6,25.8,-26.7Z"
            width="100%"
            height="100%"
            transform="translate(50 50)"
          />
        </svg>
      </div>
    </footer>
  );
}
