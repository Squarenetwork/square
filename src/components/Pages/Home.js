import React from "react";
import { Fragment } from "react";


import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/space-grotesk";
import "@fontsource/space-grotesk/400.css";

import logo from "../../assets/logo_squarenetwork.jpg";
import flash from "../../assets/flash.png";
import innovation from "../../assets/Innovate.png";
import excellence from "../../assets/Excellence.png";
import global from "../../assets/Global.png";
import brilliance from "../../assets/brilliance.png";
import product from "../../assets/Products.png";


export const Home = () => {

  return (

    <Fragment>
      <section className="container">
        <div className="row">
          <div className="col-md-6">
            <h3 className="heading_top">
              Empowering Your Business with Innovative Tech Solutions
            </h3>
            <p className="heading_top_p">
              We provide innovative products and tech solutions to achieve your
              business goals. Our expertise ensures maximum value through the
              infusion of Process, Technology and Capital.
            </p>
            <a className="btnn" href="">
              Contact Us
            </a>
          </div>
          <div className="col-md-6 text-center">
            <img src={logo} className="" alt="logo" />
          </div>
        </div>
      </section>

      <section className="container">
        <div className="row">

          <div className="col-md-4 felx_sec" >
            <div className="each_sec_part">
              <h4>Elevate Tomorrow, Today</h4>
              <img src={flash} className="" alt="logo" />
              <p>
                We turn your digital dreams into reality with cutting-edge
                solutions that stand out. Our expertise helps you tackle
                challenges and seize opportunities with confidence and
                innovation.
              </p>
            </div>
          </div>

          <div className="col-md-4 felx_sec" >
            <div className="each_sec_part">
              <h4>Innovate Beyond Boundaries</h4>
              <img src={innovation} className="" alt="logo" />
              <p>
                We spark groundbreaking ideas, keeping you ahead of the curve with continuous innovation. We push the boundaries of what's possible, ensuring your products set new standards and trends in the industry.
              </p>
            </div>
          </div>
          <div className="col-md-4 felx_sec" >
            <div className="each_sec_part">
              <h4>Seamlessly Fused Excellence</h4>
              <img src={excellence} className="" alt="logo" />
              <p>
                We blend Process, Technology, and Capital to deliver projects that are nothing short of masterpieces. Our meticulous attention to detail and commitment to quality create high-impact solutions that drive success.
              </p>
            </div>
          </div>

        </div>

        <div className="row">

          <div className="col-md-4 felx_sec" >
            <div className="each_sec_part">
              <h4>Global vision, Local action</h4>
              <img src={global} className="" alt="logo" />
              <p>
                As a global powerhouse, we transcend borders, bringing you the best of worldwide innovation. Yet, our commitment is local - personalized service that understands and meets your unique needs.
              </p>
            </div>
          </div>

          <div className="col-md-4 felx_sec" >
            <div className="each_sec_part">
              <h4>Elegant tech brilliance</h4>
              <img src={brilliance} className="" alt="logo" />
              <p>We tailor brilliance to your specifications, marrying elegance with tech-savvy ingenuity for a bespoke future. Your business is unique, and so are our solutions.</p>
            </div>
          </div>
          <div className="col-md-4 felx_sec" >
            <div className="each_sec_part">
              <h4>Future-Proofed Products</h4>
              <img src={product} className="" alt="logo" />
              <p>We aren't just a service provider; we're your ticket to the future of technology. Anticipate industry shifts, turning them into opportunities for your success.Stay ahead with our arsenal of future-ready products.</p>
            </div>
          </div>

        </div>

        <div className="row partner_sec">
          <h4>A Partnership, Not Just A Service</h4>
          <p>
            Join us in a true partnership. Your success is our mission, and we navigate the tech landscape hand in hand with you.
            Together, let's shape tomorrow, today.</p>
        </div>
      </section>


      <section className="container-fluid">
        <div className="row">
          <div className="border_center">Who We Are?</div>
        </div>
      </section>

      <section>
        <div className="title-section   left "><div className="top-title"> Welcome To Square Network Solutions</div><h2 className="title" > We are always Faster &amp; reliable</h2><div className="title-line"></div><div className="title-content" ><p>Square Network is your one-stop solution for all your IT infrastructure servicing needs. We are a one-of-its-kind organization that services consumers, retailers, SMBs and enterprise customers.</p><p>With the experience of handling more than 3800 clients across Tamil Nadu, the Square Network team is adept with the latest technology and has a thorough understanding of customer requirements to provide a world of IT hardware services, solutions and support across different industry verticals.</p><p><a href="#">Become a Client</a></p></div></div>
      </section>

    


      <section className="container-fluid">
        <div className="row">
          <div className="border_center">Our Services</div>
        </div>
      </section>


    </Fragment>

  );
};
