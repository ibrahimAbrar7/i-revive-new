"use client";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Topbar from "@/app/components/Topbar";
import SunnahPlus from "@/app/components/plans/SunnahPlus";

export default function SunnahPlusPage() {
  return (
    <div>
      <Topbar />
      <Header />
      <SunnahPlus />
      <Footer />
    </div>
  );
}
