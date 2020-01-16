import React from "react";
import Angular from "../assets/images/angular.jpg";
import Android from "../assets/images/android.png";
import IOS from "../assets/images/ios.jpg";
import Java from "../assets/images/java.jpg";
import Native from "../assets/images/native.png";
import Node from "../assets/images/node.png";
import PHP from "../assets/images/php.png";
import Python from "../assets/images/python.png";
import react from "../assets/images/react.png";

const Service = () => (
  <div className="service">
    <div className="service-header">
      <h1 className="title">PRODUCT & SERVICES</h1>
    </div>
    <div className="container">
      <div className="header">
        <h1 className="container-header">Software Development & Design</h1>
        <p>
          Workflow makes custom software that’s stable, scalable, secure and
          easy to use. Expertly tailored around your business goals.
        </p>
      </div>
      <div className="divisions">
        <div className="moblie row">
          <div className="mobile-image col-md-6"></div>
          <div className="moblie-description col-md-6">
            <h3>Mobile App Capabilities</h3>
            <ul className="mobile-capabilities">
              <li>Responsive across browsers, tablets, and smartphones</li>
              <li>
                Modern cloud platforms, containerization, and deployment
                automation; can work offline and sync data periodically
              </li>
              <li>Polished, user-friendly, accessible user experience</li>
              <li>Complex workflows, interactions, and visualizations</li>
            </ul>
          </div>
        </div>
        <br />
        <div className="moblie row">
          <div className="moblie-description col-md-6">
            <h3>Web App Capabilities</h3>
            <ul className="mobile-capabilities">
              <li>Responsive across browsers, tablets, and smartphones</li>
              <li>
                Modern cloud platforms, containerization, and deployment
                automation; can work offline and sync data periodically
              </li>
              <li>Polished, user-friendly, accessible user experience</li>
              <li>Complex workflows, interactions, and visualizations</li>
            </ul>
          </div>
          <div className="mobile-image col-md-6"></div>
        </div>
        <br />
        <div className="moblie row">
          <div className="mobile-image col-md-6"></div>
          <div className="moblie-description col-md-6">
            <h3>Mobile App Capabilities</h3>
            <ul className="mobile-capabilities">
              <li>Responsive across browsers, tablets, and smartphones</li>
              <li>
                Modern cloud platforms, containerization, and deployment
                automation; can work offline and sync data periodically
              </li>
              <li>Polished, user-friendly, accessible user experience</li>
              <li>Complex workflows, interactions, and visualizations</li>
            </ul>
          </div>
        </div>
        <br />
        <div className="skill-tech row">
          <div className="skill col-md-6">
            <h2>Technical Skill</h2>
            <p>
              We have experience with many frameworks, languages, and tools, and
              we can assemble a set that’s a great strategic fit for your
              project. These are a few we use often.
            </p>
          </div>
          <div className="framework col-md-6">
            <div className="framework-row">
              <div className="social">
                <img src={Angular} alt="Web Development" />
              </div>
              <div className="social">
                <img src={Android} alt="Web Development" />
              </div>
              <div className="social">
                <img src={IOS} alt="Web Development" />
              </div>
            </div>
            <br />
            <div className="framework-row">
              <div className="social">
                <img src={Java} alt="Web Development" />
              </div>
              <div className="social">
                <img src={Native} alt="Web Development" />
              </div>
              <div className="social">
                <img src={Node} alt="Web Development" />
              </div>
            </div>
            <br />
            <div className="framework-row">
              <div className="social">
                <img src={PHP} alt="Web Development" />
              </div>
              <div className="social">
                <img src={Python} alt="Web Development" />
              </div>
              <div className="social">
                <img src={react} alt="Web Development" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Service;
