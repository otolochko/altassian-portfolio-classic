"use client";

import dynamic from "next/dynamic";
import type { ServicesProps } from "./Services";

const ServicesNoSSR = dynamic(() => import("./Services"), {
  ssr: false,
});

const ServicesClient = ({ services }: ServicesProps) => <ServicesNoSSR services={services} />;

export default ServicesClient;
