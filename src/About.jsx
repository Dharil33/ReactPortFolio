import React from "react";
import { motion } from 'framer-motion';


const About = () => {
  return (
    <>
    <h2 className="edu">My Education:</h2>
    <motion.div className="simple" initial={{x:'100vw'}} animate={{x:0}} transition={{delay:0.5,type:"spring"}}>
      <div class="container">
  <div class="row">
    <div class="col-sm">
      <motion.div class="card text-white bg-primary mb-3" id="samp1" whileHover={{scale:1.1,boxShadow:"0px 0px 10px rgb(255,255,255)"}} >
  <div class="card-header"><h3>Education</h3></div>
  <div class="card-body">
    <h5 class="card-title">SSC Result (2016)</h5>
    <p class="card-text"><h3>94.76%</h3></p>
    <p class="card-text"><h5>From: Shravan Vidhyabhavan,Ankleshwar</h5></p>
  </div>
</motion.div>
    </div>
    <div class="col-sm">
    <motion.div class="card text-white bg-secondary mb-3" whileHover={{scale:1.1,boxShadow:"0px 0px 10px rgb(255,255,255)"}} >
  <div class="card-header"><h3>Education</h3></div>
  <div class="card-body">
    <h5 class="card-title">HSC Result (2018)</h5>
    <p class="card-text"><h3>79.55%</h3></p>
    <p class="card-text"><h5>From: Agasti Education,Ankleshwar</h5></p>
  </div>
</motion.div>
    </div>
    <div class="col-sm">
    <motion.div class="card text-white bg-success mb-3" whileHover={{scale:1.1,boxShadow:"0px 0px 10px rgb(255,255,255)"}}>
  <div class="card-header"><h3>B.Tech Computer Engineering</h3></div>
  <div class="card-body">
    <h5 class="card-title">College CGPA till 6th Semester</h5>
    <p class="card-text"><h3>9.0</h3></p>
    <p class="card-text"><h5>From: Uka Tarsadia University,Bardoli</h5></p>
  </div>
</motion.div>
    </div>
  </div>
</div>
<hr></hr>
<div className = "container">
  <div className = "row">
    <div className = "col-sm">
    <motion.div class="card text-white bg-danger mb-3" whileHover={{scale:1.1,boxShadow:"0px 0px 10px rgb(255,255,255)"}}>
  <div class="card-header"><h3>Languages</h3></div>
  <div class="card-body">
    <h5 class="card-title"></h5>
    <p class="card-text"><h3>Gujarati,Hindi,English</h3></p>
  </div>
</motion.div>
    </div>
    <div className = "col-sm">
    <motion.div class="card text-white bg-warning mb-3" whileHover={{scale:1.1,boxShadow:"0px 0px 10px rgb(255,255,255)"}}>
  <div class="card-header"><h3>Work Experience</h3></div>
  <div class="card-body">
    <h5 class="card-title"></h5>
    <p class="card-text"><h3>N/A</h3></p>
  </div>
</motion.div>
    </div>
    <div className = "col-sm">
    <motion.div class="card text-white bg-info mb-3" whileHover={{scale:1.1,boxShadow:"0px 0px 10px rgb(255,255,255)"}}>
  <div class="card-header"><h3>Hobbies</h3></div>
  <div class="card-body">
    <h5 class="card-title"></h5>
    <p class="card-text"><h3>Programming,Reading,Sports</h3></p>
  </div>
</motion.div>
    </div>
  </div>
    </div>
    </motion.div>
    <hr></hr>
    <h2 className="skill">Skills:</h2>
    <div className="container" id="progress" >
    <h3>React.js</h3>
  <div class="progress">
    <div class="progress-bar progress-bar-striped progress-bar-animated" id="a1"></div>
  </div>
  <br></br>
  <h3>Node.js</h3>
  <div class="progress">
    <div class="progress-bar progress-bar-striped progress-bar-animated" id="a2"></div>
  </div>
  <br></br>
  <h3>Express.js</h3>
  <div class="progress">
    <div class="progress-bar progress-bar-striped progress-bar-animated" id="a9"></div>
  </div>
  <br></br>
  <h3>Python</h3>
  <div class="progress">
    <div class="progress-bar progress-bar-striped progress-bar-animated" id="a3"></div>
  </div>
  <br></br>
  <h3>Angular.js</h3>
  <div class="progress">
    <div class="progress-bar progress-bar-striped progress-bar-animated" id="a11"></div>
  </div>
  <br></br>
  <h3>MongoDB</h3>
  <div class="progress">
    <div class="progress-bar progress-bar-striped progress-bar-animated" id="a4"></div>
  </div>
  <br></br>
  <h3>Flutter</h3>
  <div class="progress">
    <div class="progress-bar progress-bar-striped progress-bar-animated" id="a12"></div>
  </div>
  <br></br>
  <h3>AWS Cloud Practioner</h3>
  <div class="progress">
    <div class="progress-bar progress-bar-striped progress-bar-animated" id="a5"></div>
  </div>
  <br></br>
  <h3>Wordpress</h3>
  <div class="progress">
    <div class="progress-bar progress-bar-striped progress-bar-animated" id="a6"></div>
  </div>
  <br></br>
  <h3>DevOps</h3>
  <div class="progress">
    <div class="progress-bar progress-bar-striped progress-bar-animated" id="a7"></div>
  </div>
  <br></br>
  <h3>PHP & MySQL</h3>
  <div class="progress">
    <div class="progress-bar progress-bar-striped progress-bar-animated" id="a10"></div>
  </div>
  <br></br>
</div>
    <hr></hr>
    <motion.div className = "about" initial={{x:'100vw'}} animate={{x:0}}>
      <h2>About me</h2>
      <h3>Birth Date🎊: 29/11/2000</h3>
      <h3>Location: Ankleshwar,Gujarat</h3>
      <motion.div class="col-12" initial={{x:'-100vw'}} animate={{x:0}}>
                <button class="btn btn-outline-primary" type="submit">
                  For More Info
                </button>
      </motion.div>
    </motion.div>
    <br></br>
      </>
  );
};

export default About;
