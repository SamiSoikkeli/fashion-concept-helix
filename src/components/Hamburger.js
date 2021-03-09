import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import ImageDistort from "react-image-list-distort";

import {
  staggerText,
  staggerReveal,
  fadeInUp,
  handleHover,
  handleHoverExit,
  handleCityReturn,
  handleCity,
  staggerRevealClose
} from "./Animations";


import showreel from "../images/showreel.jpg";
import clothing from "../images/model1.jpg";
import sneakers from "../images/sneakers2.jpg";

import newyork from "../images/newyork.jpg";
import london from "../images/london.jpg";
import tokyo from "../images/tokyo.jpg";
import helsinki from "../images/helsinki.jpg";

const cities = [
  { name: "New York", image: newyork },
  { name: "London", image: london },
  { name: "Tokyo", image: tokyo },
  { name: "Helsinki", image: helsinki }
];

const Hamburger = ({ state }) => {
  // Create varibles of our dom nodes
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (state.clicked === false) {
      // If menu is closed and we want to open it.

      staggerRevealClose(reveal2, reveal1);
      // Set menu to display none
      gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Set menu to display block
      gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
      //Allow menu to have height of 100%
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      staggerReveal(reveal1, reveal2);
      fadeInUp(info);
      staggerText(line1, line2, line3);
    }
  }, [state]);

  return (
    <div ref={el => (menuLayer = el)} className='hamburger-menu'>
      <div
        ref={el => (reveal1 = el)}
        className='menu-secondary-background-color'></div>
      <div ref={el => (reveal2 = el)} className='menu-layer'>
        <div
          ref={el => (cityBackground = el)}
          className='menu-city-background'></div>
        <div className='container'>
          <div className='wrapper'>
            <div className='menu-links'>
              <nav>
                <ul className="myListRoot">
                  <li className="myListItem">
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line1 = el)}
                      to='/clothing'>
                      Clothing
                      <img style={{ display: "none" }} src={clothing} alt="clothing"/>
                    </Link>
                  </li>
                  <li className="myListItem">
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line2 = el)}
                      to='/sneakers'>
                      Sneakers
                      <img style={{ display: "none" }} src={sneakers} alt="sneakers" />
                    </Link>
                  </li>
                  <li className="myListItem">
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line3 = el)}
                      to='/contact-us'>
                      Contact us
                      <img style={{ display: "none" }} src={showreel} alt="showreel"/>
                    </Link>        
                  </li>
                </ul>
                <ImageDistort
                  styles={{ zIndex: -1 }}
                  listRoot={".myListRoot"}
                  itemRoot={".myListItem"}
                  options={{
                    strength: 0.5,
                    effect: "stretch",
                    geometry: {
                      shape: "plane",
                      radius: 0.5,
                      segments: 128
                    }
                  }}
                >
                </ImageDistort>
              </nav>
              <div ref={el => (info = el)} className='info'>
                <h3>Our Promise</h3>
                <p>
                  The passage experienced a surge in popularity during the 1960s
                  when Letraset used it on their dry-transfer sheets, and again
                  during the 90s as desktop publishers bundled the text with
                  their software.
                </p>
              </div>
              <div className='locations'>
                Our Store Locations:
                {/* Returning the list of cities */}
                {cities.map(el => (
                  <span
                    key={el.name}
                    onMouseEnter={() => handleCity(el.image, cityBackground)}
                    onMouseOut={() => handleCityReturn(cityBackground)}>
                    {el.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
