import React from "react";
import {motion} from 'framer-motion';
import Reactpage from './Reactpage';

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-12 mx-auto">
        <motion.div className="card" initial={{x:'100vw'}} animate={{x:0}} transition={{delay:0.8}} whileHover={{scale:1.1,boxShadow:"0px 0px 10px rgb(255,255,255)"}}>
          <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">
              {props.text}
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Card;
