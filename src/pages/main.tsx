
import React from "react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Header from "../components/header";
const Blog = React.lazy(() => import("./blog"));
const Contact = React.lazy(() => import("./contact"));
const Experience = React.lazy(() => import("./experience"));
const Home = React.lazy(() => import("./home"));
const Landing = React.lazy(() => import("./landing"));
const Skills = React.lazy(() => import("./skills"));

const Main = () => {
  const { ref: homeRef, inView: isHomeIntersected } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  const { ref: blogRef, inView: isBlogIntersected } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  const { ref: skillRef, inView: isSkillIntersected } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  const { ref: contactRef, inView: isContactIntersected } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  const { ref: experienceRef, inView: isExperienceIntersected } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 2000);
  }, []);

  if (!show) {
    
    return (
      <>
      <Header/>
      <section id="home" ref={homeRef}>
        <Home isVisible={isHomeIntersected} /> 
      </section>
      <section id="blog" ref={blogRef}>
        <Blog isVisible={isBlogIntersected}/>
      </section>
      <section id="skills" ref={skillRef}>
        <Skills isVisible={isSkillIntersected} />
      </section>
      <section id="experience" ref={experienceRef}>
        <Experience isVisible={isExperienceIntersected} />
      </section>
      <section id="contact" ref={contactRef}>
        <Contact isVisible={isContactIntersected} />
      </section>
      </>
      );
  }
  return (
    <Landing />
  )
}

export default Main;

