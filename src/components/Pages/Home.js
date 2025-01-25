import React from "react";
import { Fragment } from "react";

import { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/space-grotesk";
import "@fontsource/space-grotesk/400.css";

import logo from "../../assets/logo_squarenetwork.jpg";
import flash from "../../assets/flash.png";
import innovation from "../../assets/Innovate.png";
import excellence from "../../assets/Excellence.png";
import global from "../../assets/Global.png";
import brilliance from "../../assets/brilliance.png";
import wifi from "../../assets/wifi_squarenetwork.png";
import switches from "../../assets/switches_squarenetwork.png";
import gateways from "../../assets/gateways_squarenetwork.jpg";
import Services from "../../assets/Services_squarenetwork.jpg";




import home from "../../assets/home2.jpg";
import $ from 'jquery';

import {
  CarouselControl,
  Carousel,
  CarouselItem,
  CarouselIndicators, UncontrolledCarousel
} from 'reactstrap';

export const Home = () => {

  $(document).ready(function () {

    $('ul.tabs li').click(function () {
      var tab_id = $(this).attr('data-tab');

      $('ul.tabs li').removeClass('current');
      $('.tab-content').removeClass('current');

      $(this).addClass('current');
      $("#" + tab_id).addClass('current');
    })

  })


  $(document).ready(function () {
    var tabCount = $('ul.tabs li').length;

    // Total number of tabs

    var currentIndex = 0;
    // Index for the active tab

    // Function to switch tabs
    function switchTab() {
      var tab_id = $('ul.tabs li').eq(currentIndex).attr('data-tab');

      $('ul.tabs li').removeClass('current');
      $('.tab-content').removeClass('current');

      $('ul.tabs li').eq(currentIndex).addClass('current');
      $("#" + tab_id).addClass('current');

      // Move to the next tab, loop back to the first if at the end
      currentIndex = (currentIndex + 1) % tabCount;
    }

    // Initial tab switch
    switchTab();

    // Set interval for automatic tab switching every 5 seconds (5000ms)
    setInterval(switchTab, 5000);
  });


  // number-count 

  $('.counter-count').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 5000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });

  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (

    <Fragment>
      <div className='particle-network-animation'>
      </div>

      <UncontrolledCarousel
        items={[

          {
            altText: 'slide 1',
            caption: 'Animation',
            key: 1,
            src: require('../../assets/slide1.png')

          },

          {
            altText: 'Slide 2',
            caption: 'Slide 2',
            key: 2,
            src: require('../../assets/slide2.png')
          },

          {
            altText: 'Slide 3',
            caption: 'Slide 3',
            key: 3,
            src: require('../../assets/slide3.png')

          }
        ]}
      />

      <section className="container">
        <div className="row">
          <div className="col-md-6">
            <p>
              Welcome To Square Network Solutions
            </p>
            <h3 className="heading_top">
              We are always Faster & reliable </h3>

            <p className="heading_top_p">
              Square Network is your one-stop solution for all your IT infrastructure servicing needs. We are a one-of-its-kind organization that services consumers, retailers, SMBs and enterprise customers.
            </p>

            <p className="heading_top_p">
              With the experience of handling more than 3800 clients across Tamil Nadu, the Square Network team is adept with the latest technology and has a thorough understanding of customer requirements to provide a world of IT hardware services, solutions and support across different industry verticals.
            </p>

            <a className="btnn" href="">
              Become a Client
            </a>
          </div>
          <div className="col-md-6 text-center">
            <img src={home} className="" alt="home" />
          </div>
        </div>
      </section>

      <div className="container">
        <Nav tabs>

          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => { toggle('1'); }}>
              Tab1
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => { toggle('2'); }}
            >
              More Tabs
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                {/* <h4>Tab 1 Contents</h4> */}
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>

      <section className="container">
        <div className="row">
          <div className="col-md-6">
            <p>
              Improve your business with us!
            </p>

            <h3 className="heading_top">
              Have a project in mind ? Work With Us.
            </h3>

            <p className="heading_top_p">
              We are proud to showcase a team of highly qualified and certified professionals, including brand certifications from leading brands as well as technology certifications like CCNA. Our engineers go through rigorous trainings and certification exercises in order to maintain the highest quality standards.
            </p>

            <p className="heading_top_p">
              Our mantra for success is single-fold customer satisfaction, if not delight. We not only strive to deliver further, better and quicker; but also listen actively to feedback we receive from our customers to try and enhance our service delivery experience.
            </p>
            <p className="heading_top_p">
              With Square Network, clients are assured that their IT infrastructure is in the hands of experts.
            </p>

            <a className="btnn" href="">
              Become a Client
            </a>
          </div>

          <div className="col-md-6 text-center">
            <div className="row">
              <div className="col-md-6">
                <div className="">
                  <h5>
                    Quick Turnaround
                  </h5>
                  <p>
                    Whether it is procurement of new hardware or servicing of your existing systems, get it at a guaranteed turnaround time
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="">
                  <h5>
                    Solutions Analysis
                  </h5>
                  <p>
                    Choosing the right IT solution as per customer requirement analysis, setting up, and integrating into existing systems.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="">
                  <h5>
                    Maintenance Management
                  </h5>

                  <p>
                    Rapid response hardware maintenance contracts for printers, computers, and servers with on-site and remote support.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="">
                  <h5>
                    Network Integration
                  </h5>

                  <p>
                    Reinforce your LAN, WAN, WLAN, load balancing technologies, cabling, network management, design, network infrastructure.
                  </p>

                </div>
              </div>
            </div>

            <div className="col-md-6"></div>


          </div>

        </div>
      </section>

      <section class="container">
        <div className="row">
          <div className="col-md-6">
            <div id="tab-1" class="tab-content current">
              <h3>
                Wi-Fi
              </h3>
              <ul>
                <li>
                  Offers a wide range of Indoor, Outdoor and In-room Wi-Fi 7, Wi-Fi 6 and Wi-Fi 5  access points.
                </li>

                <li>
                  Provides high-speed connectivity, optimum coverage and reliable performance in low to high-density areas.
                </li>

                <li>
                  Provides flexible management options for the cloud-managed Square Network Rudder NSC and the Square Network ACE mobile application.
                </li>

                <li>
                  Full enterprise-grade networking, observability and security features.
                </li>

              </ul>
            </div>


            <div id="tab-2" class="tab-content">

              <h3>Switches</h3>
              <ul>
                <li>
                  Offers a full range of core, data centre, enterprise and industrial switches with options for PoE, Full PoE, Non-PoE, RPS and lightning-fast 100G fiber connectivity.
                </li>
                <li>
                  From 4-port to 48-port and watts budget of 130 to 1500 watts switches, according to the need for a solution.
                </li>
                <li>
                  Centralized network management with the Square Network Rudder NSC cloud-managed solution and the Square Network ACE mobile application.
                </li>
                <li>
                  Offer high-speed data transmission, efficient packet forwarding, VLAN support, QoS.
                </li>

              </ul>
            </div>

            <div id="tab-3" class="tab-content">

              <h3>Gateways</h3>
              <ul>
                <li> Square Network Networks Gateways provide unbreakable WAN connection over multiple ISPs for always-on enterprise networks. </li>
                <li>
                  Zero-touch deployment, VPN for branch connectivity and link load balancing.
                </li>
                <li>
                  Anywhere- Anytime manageability of Gateway devices using Rudder cloud and Square Network ACE Mobile application.
                </li>
                <li>
                  Intelligent WAN steering and Resilient bonding link.
                </li>
              </ul>
            </div>


            <div id="tab-4" class="tab-content">

              <h3>Services</h3>
              <ul>
                <li>
                  Square Network Wi-Fi Service Management Platform (Square Network SMP) provides a secure, scalable and complete hotspot network.
                </li>

                <li>
                  Square Network Zero Trust Network Access  secure and critical enterprise network with passwordless authentication and user onboarding.
                </li>

                <li>
                  Square Network Identity Management (Square NetworkIM) to centrally manage enterprise users and devices.
                </li>
                <li>
                  Cloud-hosted services are designed for elastic scalability and service resiliency.
                </li>
              </ul>

            </div>

          </div>


          <div className="col-md-6">
            <ul class="tabs">

              <li class="tab-link current " data-tab="tab-1">

                <div>
                  <img src={wifi} className="" alt="wifi" />
                </div>
                <h3>Wi-Fi</h3>
                <p>Reliable, Agile, Fast </p>
              </li>


              <li class="tab-link" data-tab="tab-2">

                <div>
                  <img src={switches} className="" alt="switches_squarenetwork" />

                  <h3>Switches</h3>
                  <p>Scalable, Ultra Fast, Flexible</p>
                </div>
              </li>

              <li class="tab-link" data-tab="tab-3">
                <div>
                  <img src={gateways} className="" alt="gateways_squarenetwork" />
                  <h3>Gateways</h3>
                  <p>Resilient, Secured, Connective</p>
                </div>
              </li>

              <li class="tab-link" data-tab="tab-4">
                <div>
                  <img src={Services} className="" alt="Services_squarenetwork" />
                  <h3>
                    Services
                  </h3>
                  <p>Vertical Centric, Solution <br/>
                    Oriented, Enhanced Security</p>

                </div>
              </li>

            </ul>
          </div>

        </div>



        <div id="tab-1" class="tab-content current">

        </div>
        <div id="tab-2" class="tab-content">

        </div>
        <div id="tab-3" class="tab-content">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </div>
        <div id="tab-4" class="tab-content">
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>

      </section>

      <div className="counter">
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">

              <div className="employees">
                <p className="counter-count">+879</p>
                <p className="employee-p">Registered Partners</p>
              </div>

            </div>

            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div className="customer">
                <p className="counter-count">+954</p>
                <p className="customer-p">Deployments</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div className="design">
                <p className="counter-count">+2,250 </p>
                <p className="design-p">Happy Customers</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div className="order">
                <p className="counter-count">+652</p>
                <p className="order-p">Team Strength</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </Fragment>

  );
};
