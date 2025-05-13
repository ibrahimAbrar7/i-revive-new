"use client";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Topbar from "@/app/components/Topbar";
import Lymphatic from "@/app/components/plans/Lymphatic";

export default function LymphaticPage() {
  return (
    <div>
      <Topbar />
      <Header />
      <Lymphatic />
      <Footer />
    </div>
  );
}
