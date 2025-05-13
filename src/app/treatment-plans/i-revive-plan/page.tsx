"use client";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Topbar from "@/app/components/Topbar";
import IRevivePlan from "@/app/components/plans/irevivePlan";

export default function irevivePlanPage() {
  return (
    <div>
      <Topbar />
      <Header />
      <IRevivePlan />
      <Footer />
    </div>
  );
}
