"use client";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Topbar from "@/app/components/Topbar";
import VitalOrgans from "@/app/components/plans/VitalOrgans";

export default function VitalOrgansPage() {
  return (
    <div>
      <Topbar />
      <Header />
      <VitalOrgans />
      <Footer />
    </div>
  );
}
