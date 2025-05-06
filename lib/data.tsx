import { JSX } from "react";
import { FaCode } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { MdOutlineWeb } from "react-icons/md";

export type servicesDataType = {
      id: number,
      icon: JSX.Element,
      title: string,
      color: string,
};

export const companiesData = [
      {
            id: 1,
            icon: "/assets/octoral.png",
            name: "Octoral"
      },
      {
            id: 2,
            icon: "/assets/cromauto.png",
            name: "Cromauto"
      },
      {
            id: 3,
            icon: "/assets/indasa.png",
            name: "Indasa"
      },
      {
            id: 4,
            icon: "/assets/iwata.png",
            name: "Iwata"
      },
      {
            id: 5,
            icon: "/assets/rupes.png",
            name: "Rupes"
      }
];

export const servicesData: servicesDataType[] = [
      {
            id: 1,
            icon: <MdOutlineWeb size={45} />,
            title: "Services",
            color: "bg-blue-400"
      },
      {
            id: 2,
            icon: <FaCode size={45} />,
            title: "Services",
            color: "bg-secondary"
      },
      {
            id: 3,
            icon: <GiShoppingBag size={45} />,
            title: "Services",
            color: "bg-green-200"
      }
];

export const aboutData = [
      {
            id: 1,
            num: "5+",
            title: "Year of Experience"
      },
      {
            id: 2,
            num: "86",
            title: "Happy Clents"
      },
      {
            id: 3,
            num: "32+",
            title: "Business Partners"
      },
];