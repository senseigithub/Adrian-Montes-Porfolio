import React from "react";
import skills from "../constants/skills";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import TextSpan from "../utils/textSpan";

const Skills = () => {
  const name = "My skill-set.".split("");

  return (
    <section>
      <div className="flex flex-col items-center justify-center w-full min-h-screen">
        {/*container*/}
        <div className="grid items-center w-full gap-8 justify-items-center">
          {/*title*/}
          <motion.div
            className="text-3xl font-bold text-center md:text-4xl lg:text-5xl text-v "
            variants={fadeIn("right", 0.1)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            {name.map((letter, index) => {
              return (
                <TextSpan key={index}>
                  {letter === " " ? "\u00A0" : letter}
                </TextSpan>
              );
            })}
          </motion.div>
          {/*skills-stack*/}
          <div className="grid grid-cols-4 gap-3 mx-auto md:gap-6 lg:gap-8 lg:grid-cols-5 ">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className={`flex flex-col rounded-xl w-[70px] h-[70px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] items-center justify-center bg-white shadow-lg ${skill.shadow}`}
                variants={fadeIn("up", skill.duration)}
                initial={"hidden"}
                whileInView={"show"}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.1 },
                }}
                viewport={{ once: false, amount: 0.7 }}
              >
                <img
                  src={skill.icon}
                  className="w-12 lg:w-16"
                  alt={`${skill.name} Icon`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
