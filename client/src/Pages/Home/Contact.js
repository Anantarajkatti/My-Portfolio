import React from "react";
import SectionTitle from "../../Components/SectionTitle";
import { useSelector } from "react-redux";

function Contact() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { contactRes } = portfolioData;
  // const {age,email,gender,mobile,name,nationality}=courseRes
   
  return (
    <div>
      <SectionTitle title="Say hello" />

      <div className="flex tablet:flex-col w-full justify-center">
        <div className="flex flex-col text-2xl font-semibold text-secondary ml-10 w-3/4">
          <p>{"{"}</p>
          {Object.keys(contactRes).map((key) => (
            <p className="ml-5">
              <span>{key} :</span>
              <span> {contactRes[key]}</span>
            </p>
          ))}
          <p>{"}"}</p>
        </div>
        <div className="w-1/4 tablet:hidden">
          <dotlottie-player 
            className="contact-lottie"
            src="https://lottie.host/1d77181b-d76e-431a-89c1-755cd8d4aa72/lAGyOEpAfC.lottie"
            background="transparent"
            speed="1"
            style={{ width: "300px", height: "300px" }}
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;
