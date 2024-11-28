import React from "react";
import works from "../constants/works";
import Carousel from "nuka-carousel";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const GraphicDesign = () => {
  const config = {
    containerClassName: "",
    nextButtonClassName: "rounded-full",
    nextButtonText: <FaChevronRight />,
    pagingDotsClassName: "me-2",
    pagingDotsContainerClassName: "",
    prevButtonClassName: "rounded-full",
    prevButtonText: <FaChevronLeft />,
  };

  return (
    <section>
        {/*Card container*/}
        <div className="grid gap-5 lg:grid-cols-3 max-w-[1500px] items-center">
          {works.design.map((project, index) => {
            return (
              <motion.div
                key={index}
                variants={fadeIn("up", project.duration)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{ once: true, amount: 'some' }}
              >
                {/*image and text*/}
                <div className="grid gap-2 p-8 mx-8 duration-200 ease-in-out bg-white shadow-lg lg:mx-0 rounded-2xl lg:hover:-translate-y-3">
                  {/*image*/}
                  <Carousel
                    defaultControlsConfig={config}
                    wrapAround
                    autoplay
                  >
                    {project.image.map((pic, index) => (
                      <div key={index} className="md:h-[300px] h-[200px] max-w-full ">
                        <img className="object-cover w-full h-full rounded-lg" src={pic} />
                      </div>
                    ))}
                  </Carousel>

                  <p className="text-[20px] md:text-2xl font-bold ">{project.title}</p>
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

export default GraphicDesign;
