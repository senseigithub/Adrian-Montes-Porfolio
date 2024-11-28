import React from "react";
import works from "../constants/works";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import { FaExternalLinkAlt} from "react-icons/fa";

const ItchGames = () => {
  return (
    <section>
        {/*Card container*/}
        <div className="grid gap-5 lg:grid-cols-3 max-w-[1500px] items-center">
          {works.itchGames.map((project, index) => {
            return (
              <motion.div
                key={index}
                variants={fadeIn("up", project.duration)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{ once: true, amount: 'some' }}
              >

                {/*image and text*/}
                <div className="grid gap-2 p-8 mx-8 overflow-hidden duration-200 ease-in-out bg-white shadow-lg lg:mx-0 rounded-2xl lg:hover:-translate-y-2">
                  {/*image*/}
                  <a className="flex items-center gap-2 text-[20px] md:text-2xl font-bold cursor-pointer" href={project.link}>
                  <img className="max-w-full rounded-md" src={project.image} />
                </a>
                  {/*title*/}
                  <a className="flex items-center gap-2 text-[20px] md:text-2xl font-bold">
                    <p className="">{project.title}</p>
                    <FaExternalLinkAlt size={15} />
                  </a>
                  {/*description*/}
                  <p>{project.description}</p>
                  {/*tech*/}
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    <span className="font-semibold">Built with:</span>
                    <span className=" text-v">{project.stack}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
    </section>
  );
};

export default ItchGames;
