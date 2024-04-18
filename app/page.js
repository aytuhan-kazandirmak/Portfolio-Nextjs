import MyStackComponent from "@/components/mystack";
import BiographyComponent from "@/components/biography";
import React from "react";
import ContactComponent from "@/components/contact";
import ProjectComponent from "@/components/projects";

const HomePage = () => {
  return (
    <section className="section">
      <BiographyComponent />
      <MyStackComponent />
      <ProjectComponent />
      <ContactComponent />
    </section>
  );
};

export default HomePage;
