"use client"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from "../components/hero/Hero";
import Banner from "@/components/banner/Banner";
import Services from "@/components/services/Services";
import WhyUs from "@/components/banner/WhyUs";
import Companies from "@/components/companies/Companies";
import Contact from "@/components/contact/Contact";

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
      <Hero />
      <Banner />
      <Services />
      <WhyUs />
      <Companies />
      <Contact />
    </div>
  );
}
