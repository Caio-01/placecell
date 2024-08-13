"use client"; // Indica que este componente deve ser renderizado no lado do cliente
import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";
import gsap from "gsap";

//Interface que define as propriedades esperadas pelo componente `ModalFaqs`.
interface CreateModalFaqsProps {
  closeModalFaqs: () => void;
}

export function ModalFaqs({ closeModalFaqs }: CreateModalFaqsProps) {
  const modalFaqsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (modalFaqsRef.current) {
      gsap.fromTo(
        modalFaqsRef.current,
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
        ref={modalFaqsRef}
        className="flex w-[22em] flex-col space-y-4 rounded-xl bg-gray-dark px-8 py-6 opacity-0 shadow-shape md:w-[640px]"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-medium text-btn-yellow">FAQs</h2>
          <button type="button" onClick={closeModalFaqs}>
            <X className="size-6" />
          </button>
        </div>
        <p className="text-normal text-justify font-paragraph text-my-gray md:text-lg">
          Perguntas e respostas frequentes:
        </p>

        {/* Lista de Perguntas */}
        <ul className="space-y-2">
          <li>
            <span className="text-justify font-paragraph font-medium text-btn-yellow">
              Quais são as opções de pagamento disponíveis?
            </span>
            <p className="text-justify font-paragraph text-sm text-my-gray">
              Na PlaceCell, oferecemos diversas opções de pagamento, incluindo
              cartão de crédito, PayPal e pagamento parcelado. Todas as
              transações são seguras e protegidas.
            </p>
          </li>

          <li>
            <span className="text-justify font-paragraph font-medium text-btn-yellow">
              Qual é o prazo de entrega?
            </span>
            <p className="text-justify font-paragraph text-sm text-my-gray">
              O prazo de entrega varia de acordo com a sua localização.
              Geralmente, entregas nacionais levam de 3 a 7 dias úteis. Você
              pode acompanhar o status do seu pedido através do nosso site.
            </p>
          </li>

          <li>
            <span className="text-justify font-paragraph font-medium text-btn-yellow">
              A PlaceCell oferece garantia nos produtos?
            </span>
            <p className="text-justify font-paragraph text-sm text-my-gray">
              Sim, todos os nossos dispositivos vêm com uma garantia de 12 meses
              contra defeitos de fabricação. Além disso, oferecemos assistência
              técnica especializada para garantir que seu produto funcione
              perfeitamente.
            </p>
          </li>

          <li>
            <span className="text-justify font-paragraph font-medium text-btn-yellow">
              Posso devolver ou trocar um produto?
            </span>
            <p className="text-justify font-paragraph text-sm text-my-gray">
              Oferecemos uma política de devolução e troca de 30 dias a partir
              da data de recebimento do produto. O item deve estar em sua
              condição original e com a embalagem intacta.
            </p>
          </li>

          <li>
            <span className="text-justify font-paragraph font-medium text-btn-yellow">
              Como entro em contato com o suporte ao cliente?
            </span>
            <p className="text-justify font-paragraph text-sm text-my-gray">
              Você pode entrar em contato com nossa equipe de suporte ao cliente
              via e-mail, telefone ou chat ao vivo no nosso site. Estamos
              disponíveis para ajudar você com qualquer dúvida ou problema.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
