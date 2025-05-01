"use client"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "@/components/hero/Carousel";
import Hero from "../components/hero/Hero";
import Banner from "@/components/banner/Banner";
import Services from "@/components/services/Services";
import WhyUs from "@/components/banner/WhyUs";

export default function Home() {


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
    <div className="p-6 mt-30">
      {/* <Carousel /> */}
      <Hero />
      <Banner />
      <Services />
      <WhyUs />
    </div>
  );
}
