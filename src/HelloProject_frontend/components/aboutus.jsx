import React from "react";
import aboutImg from "../public/img/aboutImg.png";
export default function aboutus() {
  return (
    <div className="aboutUs-page">
      <img className="aboutImg" src={aboutImg} alt="" />
      <p className="about-txt">About Us</p>
      <p className="about-para">
        Dive into a world where your smartphone is the key to unlocking a
        universe of technology. Our innovative app transforms your everyday
        device into a portal of endless possibilities, all without the burden of
        additional costly hardware. With just a simple tap, you’re in control,
        navigating through a seamless integration of digital and physical
        realms. Our decentralized applications prioritize your safety, ensuring
        that your data remains secure in a fortress of privacy. Embrace the ease
        of a decentralized ecosystem, where each app is a bastion of security,
        safeguarding your digital footprint. Step into a new era of
        technological empowerment with our app, where convenience, control, and
        cybersecurity converge.
        <div className="about-para-down">
          Your journey to technological liberation
        begins now. Unleash the full potential of your environment, all through
        the lens of your phone’s camera. It’s not just an app; it’s a
        revolution.  </div>
      </p>
    </div>
  );
}
