import { Navbar } from "@/components/navbar";
import { SectionProducts } from "@/components/sectionProducts";
import { SectionServices } from "@/components/sectionServices";
import { SectionWelcome } from "@/components/sectionWelcome";
import { FooterHome } from "@/components/footerHome";

export default function Home() {
  return (
    <>
      <div className="text-mobile relative z-[-1] flex justify-center text-center opacity-20 md:text-average 2xl:text-big">
        <h1 className="absolute bottom-0 top-[-0.45em] text-gray-light">
          PLACE
        </h1>
      </div>
      <Navbar />
      <SectionWelcome />
      <SectionProducts />
      <SectionServices />
      <FooterHome />
    </>
  );
}
