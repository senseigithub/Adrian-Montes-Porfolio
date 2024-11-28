import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import TextSpan from "../utils/textSpan";
import { FiDownload } from "react-icons/fi";
import about from "../images/Adrian-About.png";
import Cv from "../constants/CV-AdrianMontes.pdf";

const Hero2 = () => {
  const name = "About me.".split("");

  return (
    <section>
      <div className="flex flex-col items-center justify-center w-full min-h-screen text-neutral-800 ">
        {/*container*/}
        <div className="grid items-center gap-4 md:gap-6 lg:gap-8 justify-items-center lg:grid-cols-2">
          {/*image*/}
          <div className=" w-[200px] md:w-[300px] lg:w-[400px] xxl:w-[500px]">
            <motion.img
              variants={fadeIn("up", 0.1)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              src={about}
              alt="A fun vector image depicting Adrian Montes working on his pc"
            />
          </div>
          {/*text-box*/}
          <div className="grid items-center gap-1 md:gap-2 lg:gap-3 justify-items-center w-[300px] md:w-[400px]">
            {/*title*/}
            <motion.div
              className="text-3xl font-bold text-center md:text-4xl lg:text-5xl text-v"
              variants={fadeIn("down", 0.1)}
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
            {/*text*/}
            <div className="flex flex-col text-justify text-neutral-500 ">
              <motion.p
                variants={fadeIn("down", 0.2)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
              >
                I am a full-stack developer in constant learning,
                passionate about creating captivating web solutions that blend frontend and backend with a strong attention to detail.
                As a student, I am always exploring new technologies and techniques to improve user experience.
              </motion.p>
            </div>
            {/*cv button*/}
            <motion.div
              className="px-5 py-2 mt-2 text-sm font-bold text-white uppercase border-b-4 rounded-full bg-vBtn bg-v hover:bg-vBtnHover border-vBtnHover hover:border-v"
              variants={fadeIn("down", 0.3)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
            >
              <a
                className="flex items-center gap-2"
                href={Cv}
                download="CV-AdrianMontes"
                rel="noopener noreferrer"
              >
                <FiDownload size={20} />
                <p className="font-semibold ">download cv</p>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
