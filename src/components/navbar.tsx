"use client"; // Indica que este componente deve ser renderizado no lado do

import React, { useState } from "react";
import Image from "next/image";
import LogoImg from "../assets/images/logo_phone.png";
import { ModalAbout } from "./modalAbout";
import { ModalFaqs } from "./modalFaqs";

export function Navbar() {
  const [isOpenModalAbout, setIsOpenModalAbout] = useState<boolean>(false);
  const [isOpenModalFaqs, setIsOpenModalFaqs] = useState<boolean>(false);

  //Functions para abrir e fechar ambos Modal
  function openModalAbout(): void {
    setIsOpenModalAbout(true);
  }
  function closeModalAbout(): void {
    setIsOpenModalAbout(false);
  }
  
  function openModalFaqs(): void {
    setIsOpenModalFaqs(true);
  }
  function closeModalFaqs(): void {
    setIsOpenModalFaqs(false);
  }

  return (
    <header className="flex w-full items-center justify-around border-my-white bg-transparent p-4">
      <div className="flex-shrink-0">
        <Image src={LogoImg} alt="logo_placeCell" />
      </div>
      <nav className="flex gap-8 md:gap-16  text-lg md:text-2xl">
        <a
          className="duration-500 hover:text-btn-yellow hover:transition"
          href="/"
        >
          Home
        </a>
        <button
          onClick={openModalAbout}
          className="duration-500 hover:text-btn-yellow hover:transition"
        >
          About
        </button>
        <button
          onClick={openModalFaqs}
          className="duration-500 hover:text-btn-yellow hover:transition"
        >
          Faqs
        </button>
      </nav>
      <div>
        <button className="rounded-3xl border-2 border-solid border-btn-yellow px-2 py-1  md:px-4 md:py-2 text-base md:text-xl font-normal tracking-wider text-btn-yellow transition duration-500 hover:border-my-white hover:text-my-white">
          BUY NOW
        </button>
      </div>

      {/* Modal About */}
      {isOpenModalAbout && <ModalAbout closeModalAbout={closeModalAbout} />}

      {/* Modal Faqs */}
      {isOpenModalFaqs && <ModalFaqs closeModalFaqs={closeModalFaqs} />}
    </header>
  );
}
