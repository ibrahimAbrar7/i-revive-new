"use client";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Topbar from "@/app/components/Topbar";
import HeadCupping from "@/app/components/plans/HeadCupping";

export default function HeadCuppingPage() {
  return (
    <div>
      <Topbar />
      <Header />
      <HeadCupping />
      <Footer />
    </div>
  );
}
