import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import {
  // fadeIn,
  staggerChildren,
  // textVariant,
  // textVariant2,
} from "../../utils/motion";
import { Worker } from "@react-pdf-viewer/core";

import "@react-pdf-viewer/core/lib/styles/index.css";
const Portfolio = () => {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <motion.section
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings ${css.wrapper}`}
      >
        <a className="anchor" id="portfolio"></a>

        <div className={`innerWidth flexCenter ${css.container}`}>
          <span>Welcome to the BeYourBest family.</span>
          <div className={css.upperElements}>
            {/* <motion.span
              className="secondaryText"
              variants={fadeIn("left", "tween", 0.4, 1)}
            > */}
            <span>
              At BeYourBest, we believe in empowering the leaders of tomorrow by
              providing them with the tools, resources, and mentorship they need
              to thrive. Our mission is simple yet profound: to inspire and
              equip young individuals to realize their full potential and become
              catalysts for positive change in their communities and beyond.
              Through a combination of interactive workshops, impactful
              mentorship programs, and transformative experiences, we strive to
              instill essential leadership qualities such as resilience,
              empathy, and adaptability. We believe that by nurturing these
              qualities from a young age, we can create a ripple effect of
              empowered individuals who are capable of overcoming challenges,
              driving innovation, and making a meaningful difference in the
              world. Join us on this journey of self-discovery, growth, and
              empowerment. Together, let's build a brighter future and
              BeYourBest selves!{" "}
            </span>
            {/* </motion.span> */}
          </div>
        </div>
      </motion.section>
    </Worker>
  );
};

export default Portfolio;
