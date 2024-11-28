import React from "react";
import works from "../constants/works";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";

const Multimedia = () => {
  return (
    <section>
      {/*Card container*/}
      <div className="grid gap-5 lg:grid-cols-3 max-w-[1500px] items-center">
        {works.multimedia.map((project, index) => {
          return (
            <motion.div
              key={index}
              variants={fadeIn("up", project.duration)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: true, amount: "some" }}
            >
              {/*image and text*/}
              <div className="grid gap-2 p-8 mx-8 duration-200 ease-in-out bg-white shadow-lg lg:mx-0 rounded-2xl lg:hover:-translate-y-3">
                {/*image*/}
                <img className="max-w-full rounded-md" src={project.image} />
                {/*title*/}
                <div className="text-[20px] md:text-2xl font-bold">
                  <p>{project.title}</p>
                </div>
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

export default Multimedia;
