import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
toast.configure();


const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    toast.success(`Dear ${data.fullname} I will Contact you soon`,{
      autoClose:7000,
      position:toast.POSITION.TOP_CENTER
    })
  };

  return (
    <>
      <div className="my-5">
        <motion.h1 className="text-center" initial={{y:-250}} animate={{y:-10}} transition={{delay:0.5,type:"spring",stiffness:120}}> Contact Me </motion.h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter your name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="mobile number"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                ></textarea>
              </div>

              <motion.div class="col-12" initial={{x:'-100vw'}} animate={{x:0}}>
                <button class="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </motion.div>
            </form>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
          <ul className="contactCircles">
                <li>
                  <FaFacebookF className="contactIcon" />
                </li>
                <li>
                  <FaTwitter className="contactIcon" />
                </li>
                <li>
                  <FaPinterest className="contactIcon" />
                </li>
                <li>
                  <FaInstagram className="contactIcon" />
                </li>
              </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
