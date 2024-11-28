import React, {useEffect} from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import Multimedia from "../components/Multimedia";
import ItchGames from "../components/ItchGames";
import WebDev from "../components/WebDev"
import GraphicDesign from "../components/GraphicDesign";
import TextSpan from '../utils/textSpan';


const Projects = () => {
  const name = "My projects.".split("");

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <main>
        <section>
          <div className="flex flex-col items-center justify-center gap-6 pb-10 md:mx-8 text-neutral-800">
          <motion.div
              className="lg:mt-[200px] mt-[120px] mb-[10px] lg:mb-[30px]  text-3xl font-bold md:text-4xl lg:text-5xl text-v"
              variants={fadeIn("right", 0.1)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
            >
              {name.map((letter, index) => {
                return (
                  <TextSpan key={index}>
                    {letter === " " ? "\u00A0" : letter}
                  </TextSpan>
                );
              })}
            </motion.div>
            <WebDev />
            <Multimedia />
            <ItchGames />
            <GraphicDesign/>
          
          </div>
        </section>
    </main>
  );
};

export default Projects;
