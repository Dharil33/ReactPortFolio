import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";
import {motion} from "framer-motion";

const Services = () => {
  return (
    <>
      <div className="my-5">
        <motion.h1 className="text-center" initial={{y:-250}} animate={{y:-10}} transition={{delay:0.5,type:"spring",stiffness:120}}> My Projects </motion.h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4" id="project">
              {Sdata.map((val, ind) => {
                return <Card key={ind} imgsrc={val.imgsrc} title={val.title} text={val.text} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
