import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative h-[20px] min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1578346021958-c58829af708b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80)",
          backgroundSize: 'cover',
          
      }}
    >
      <div className={`${styles.section} w-[90%] mx-[80px] 
 800px:w-[60%]`}>
        <h1 className={`text-[35px] leading-[1.2] mt-[200px] mb-[-48px] 800px:text-[60px] text-[#060606] font-[600] capitalize`}
        >
          Fashion for Every Moment<br />
        </h1>
        <p className="mt-[-1px] text-[20px] font-[Poppins]  text-[#095528ba]">
         <br />
          {" "}
          <br /> Start your fashion journey with us today and embrace the art of self-expression.<br /> Explore our exquisite collection of trendy apparel.
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-[12px] ml-[180px]`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px] ">
                    Shop Now
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
