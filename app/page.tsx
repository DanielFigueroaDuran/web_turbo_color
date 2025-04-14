"use client"
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import Navbar from "../components/navbar/Navbar";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <div>
      <Navbar />
    </div>
  );
}
