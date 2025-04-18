"use client"
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Banner from "@/components/banner/Banner";
import SliderItem from "@/components/widgets/SliderItem";

export default function Home() {
  const [itemActive, setItemActive] = useState<number>(1);
  const countItems = 5;

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="h-screen relative mt-34">
      <ul>
        <SliderItem
          itemActive={itemActive}
          id={1}
          image="/assets/img_octoral.jpg"
          brand="Octoral"
          name="Calidad"
          desc="Tecnología Ajustada a sus Necesidades"
        />
      </ul>
      {/* <Hero /> */}
      <Banner />
    </div>
  );
}
