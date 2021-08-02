import React from "react";
import { NavLink } from "react-router-dom";
import Typical from "react-typical";
import { motion } from 'framer-motion';
const Commom = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <motion.h1 animate = {{fontSize:30}}> {props.name}<br/>
                    <strong className="brand-name">
                       I'm 

                    <Typical loop={Infinity} wrapper="b"

                  steps={[
                    ' Dharil Patel',
                    1000,
                    ' Full Stack Developer',
                    1000,
                    ' Computer Engineer',
                    1000,
                  ]}
                  />
                   </strong>
                   </motion.h1>
                  <motion.div className="mt-3" initial={{x:'-100vw'}} animate={{x:1}} transition={{delay:1,duration:1.5}} whileHover={{scale:1.1,boxShadow:"0px rgb(255,255,255)"}}>
                    <NavLink to={props.visit} className="btn-get-started ">
                      {props.btname}
                    </NavLink>
                  </motion.div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="Commom img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Commom;
