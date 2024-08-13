"use client"; // Indica que este componente deve ser renderizado no lado do cliente
import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";
import gsap from "gsap";

//Interface que define as propriedades esperadas pelo componente `ModalAbout`.
interface CreateModalAboutProps {
  closeModalAbout: () => void;
}

export function ModalAbout({ closeModalAbout }: CreateModalAboutProps) {
  const modalAboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Verifica se o modalRef está referenciando o elemento antes de aplicar a animação
    if (modalAboutRef.current) {
      gsap.fromTo(
        modalAboutRef.current,
        {
          opacity: 0,
          scale: 0.5,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power4.out",
        },
      );
    }
  }, []);
  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/60">
      <div
        ref={modalAboutRef}
        className="flex w-[22em] flex-col space-y-6 rounded-xl bg-gray-dark px-8 py-6 opacity-0 shadow-shape md:w-[640px]"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-medium text-btn-yellow">About Us</h2>
          <button type="button" onClick={closeModalAbout}>
            <X className="size-6" />
          </button>
        </div>
        <p className="text-normal text-justify font-paragraph text-my-gray md:text-lg">
          A PlaceCell é uma empresa inovadora especializada na venda de
          dispositivos móveis de alta tecnologia. Nosso foco é fornecer os
          smartphones mais avançados do mercado, combinando qualidade,
          desempenho e design elegante. Valorizamos a experiência do cliente,
          oferecendo um atendimento personalizado e suporte técnico excepcional.
          Na PlaceCell, acreditamos que a tecnologia pode transformar vidas, e
          nos dedicamos a trazer as melhores soluções para os nossos clientes,
          mantendo-nos sempre na vanguarda das inovações do setor.
        </p>
      </div>
    </div>
  );
}
