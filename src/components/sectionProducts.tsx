"use client"; // Indica que este componente deve ser renderizado no lado do cliente
import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react"; // Importa ícones da biblioteca 'lucide-react'
import Image, { StaticImageData } from "next/image";
import Img15 from "../assets/images/IP15.png";
import Img14 from "../assets/images/IP14.png";
import Img13 from "../assets/images/IP13.png";
import Img12 from "../assets/images/IP12.png";
import Img11 from "../assets/images/IP11.png";
import ImgXr from "../assets/images/IPXR.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

//Tipando o array de Products
interface Product {
  id: number;
  name: string;
  rating: number;
  price: string;
  img: StaticImageData;
}

//Array de Produtos
const products: Product[] = [
  { id: 1, name: "IPHONE 15", rating: 4.9, price: "$1150", img: Img15 },
  { id: 2, name: "IPHONE 14", rating: 4.8, price: "$1050", img: Img14 },
  { id: 3, name: "IPHONE 13", rating: 4.7, price: "$950", img: Img13 },
  { id: 4, name: "IPHONE 12", rating: 4.6, price: "$850", img: Img12 },
  { id: 5, name: "IPHONE 11", rating: 4.5, price: "$750", img: Img11 },
  { id: 6, name: "IPHONE XR", rating: 4.4, price: "$650", img: ImgXr },
];

export function SectionProducts() {
  // Define o estado para o índice inicial dos produtos exibidos
  const [startCard, setStartCard] = useState(0);

  //Funcao para avancar três produtos
  const nextCard = () => {
    if (startCard + 3 < products.length) {
      setStartCard(startCard + 3);
    }
    // console.log("avancei");
  };

  // Função para retroceder três produtos
  const prevCard = () => {
    if (startCard - 3 >= 0) {
      setStartCard(startCard - 3);
    }
    // console.log("voltei");
  };

  // Referências para elementos DOM
  const textProductsRef = useRef(null);
  const sectionRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  // Efeito para animar elementos quando o componente for montado
  useEffect(() => {
    const textProducts = textProductsRef.current;
    const section = sectionRef.current;
    const cards = cardsRef.current;
    //Animação para o texto do Products
    gsap.fromTo(
      textProducts,
      {
        opacity: 0,
        y: "10%",
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        scrollTrigger: {
          trigger: section,
          start: "5% center",
        },
      },
    );
    // Animação para os cards de produtos
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1, // Adiciona um atraso entre animações de diferentes cards
        scrollTrigger: {
          trigger: section,
          start: "5% center",
        },
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-svh w-full flex-col justify-center"
    >
      {/* Div dos Products */}
      <div className="flex w-full flex-col items-center justify-around 2xl:h-1/2 2xl:flex-row">
        <div
          ref={textProductsRef}
          className="flex h-full flex-col gap-2 p-4 opacity-0"
        >
          <h1 className="text-center text-7xl md:text-8xl 2xl:text-justify">
            Chose <br /> your phone
          </h1>
          <div className="flex flex-row items-center justify-center gap-4 py-2 2xl:justify-normal">
            {/* Botão para retroceder produtos */}
            <button
              onClick={prevCard}
              disabled={startCard === 0}
              className={`rounded-full border-2 border-btn-yellow p-2 transition duration-300 ease-in-out md:p-3 ${startCard === 0 ? "opacity-50" : "hover:shadow-btn"}`}
            >
              <ArrowLeft color="#ece653" />
            </button>
            {/* Botão para avançar produtos */}
            <button
              onClick={nextCard}
              disabled={startCard + 3 >= products.length}
              className={`rounded-full border-2 border-btn-yellow p-2 transition duration-300 ease-in-out md:p-3 ${startCard + 3 >= products.length ? "opacity-50" : "hover:shadow-btn"}`}
            >
              <ArrowRight color="#ece653" />
            </button>
          </div>
        </div>

        {/* Products */}
        <aside className="flex h-full flex-row items-center gap-2 px-2 md:gap-8 md:px-4">
          {/* Renderiza os produtos visíveis */}
          {products.slice(startCard, startCard + 3).map((product, index) => (
            <div
              ref={(el) => {
                // Atualiza a referência para o card atual
                // Verifica se o elemento (el) é válido e ainda não está incluído no array de referências
                if (el && !cardsRef.current.includes(el)) {
                  // Adiciona o elemento ao array de referências no índice atual
                  cardsRef.current[index] = el;
                }
              }}
              key={product.id}
              className="flex h-60 w-[7.4rem] flex-col items-center justify-center space-y-3 rounded-3xl bg-card-gradient md:h-80 md:w-60 md:space-y-8 2xl:h-96 2xl:w-72"
            >
              <Image
                className="w-16 md:w-28 2xl:w-32"
                src={product.img}
                alt={product.name}
              />
              <div className="flex w-full flex-col px-4 md:px-6">
                <h1 className="flex flex-col text-xl md:flex md:flex-row md:items-center md:gap-2 md:text-4xl">
                  {product.name}{" "}
                  <span className="text-[10px] text-zinc-300 md:mt-2 md:text-xs">
                    (Best seller)
                  </span>
                </h1>
                <div className="flex flex-row items-center gap-2">
                  <Star color="#6dd04c" className="size-3 md:size-4" />
                  <h3 className="pt-1 text-base md:text-2xl">
                    {product.rating}
                  </h3>
                </div>
                <h2 className="text-2xl">{product.price}</h2>
              </div>
            </div>
          ))}
        </aside>
      </div>
      {/* Div wave svg */}
      <div className="absolute inset-x-0 bottom-0 w-full opacity-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#585858"
            fill-opacity="1"
            d="M0,288L80,266.7C160,245,320,203,480,197.3C640,192,800,224,960,234.7C1120,245,1280,235,1360,229.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
