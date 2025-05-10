import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OurBlog from "../components/OurBlog";
import Topbar from "../components/Topbar";
import Breadcrumb from "../components/BreadCrumb";
import BackToTop from "../components/BackToTop";

const page = () => {
  return (
    <>
      <Topbar />
      <Header />
      <Breadcrumb
        title="Our Blogs" />
      <OurBlog />
      <Footer />
         <BackToTop />

    </>
  );
};

export default page;
