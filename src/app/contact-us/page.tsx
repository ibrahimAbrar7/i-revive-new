import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";
import Breadcrumb from "../components/BreadCrumb";
import BackToTop from "../components/BackToTop";
import ContactFormTwo from "../components/ContactFormTwo";

const page = () => {
  return (
    <>
    <Topbar />
      <Header />
      <Breadcrumb title="Contact Us" subtitle="Get in Touch with Us" />
      <ContactFormTwo />
      <Footer />
         <BackToTop />
    </>
  );
};

export default page;
