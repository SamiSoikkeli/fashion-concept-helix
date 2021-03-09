import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ImageDistort from "react-image-list-distort";
import "./App.scss";

import Header from "./components/Header";

import homeClothing from "../src/images/home-clothing.jpg";
import homeSneakers from "../src/images/home-sneakers.jpg";
import clothing1 from "../src/images/clothing-1.jpg";
import clothing2 from "../src/images/clothing-2.jpg";
import clothing3 from "../src/images/clothing-3.jpg";
import clothing4 from "../src/images/clothing-4.jpg";
import clothing5 from "../src/images/clothing-5.jpg";
import clothing6 from "../src/images/clothing-6.jpg";
import sneakers1 from "../src/images/sneakers-1.jpg";
import sneakers2 from "../src/images/sneakers-2.jpg";
import sneakers3 from "../src/images/sneakers-3.jpg";
import sneakers4 from "../src/images/sneakers-4.jpg";
import sneakers5 from "../src/images/sneakers-5.jpg";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/clothing" component={Clothing} />
                <Route exact path="/sneakers" component={Sneakers} />
                <Route exact path="/contact-us" component={Contact} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

function Clothing() {
  return (
    <div className="container">
      <div className="clothing-wrapper">
        <h1>Clothing</h1>
        <div className="clothing-content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugit quasi corporis tenetur labore fuga enim debitis iste, aliquid exercitationem repellendus in consectetur quidem cumque explicabo provident eos quisquam voluptatem.</p>
          <div className="clothing-images">
            <img src={clothing1} alt="clothing1"/>
            <img src={clothing2} alt="clothing2"/>
            <img src={clothing3} alt="clothing3"/>
            <img src={clothing4} alt="clothing4"/>
            <img src={clothing5} alt="clothing5"/>
            <img src={clothing6} alt="clothing6"/>
          </div>
        </div>
      </div>
    </div>
  );
}

function Sneakers() {
  return (
    <div className="container">
      <div className="clothing-wrapper">
        <h1>Sneakers</h1>
        <div className="clothing-content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugit quasi corporis tenetur labore fuga enim debitis iste, aliquid exercitationem repellendus in consectetur quidem cumque explicabo provident eos quisquam voluptatem.</p>
          <div className="clothing-images">
            <img src={sneakers1} alt="sneakers1"/>
            <img src={sneakers2} alt="sneakers2"/>
            <img src={sneakers3} alt="sneakers3"/>
            <img src={sneakers4} alt="sneakers4"/>
            <img src={sneakers5} alt="sneakers5"/>
          </div>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="container">
      <div className="clothing-wrapper">
        <h1>Contact</h1>
        <h2>sayhi@helix.com</h2>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="container">
      <div className="wrapper">
        <svg className="svg-1" width="126" height="44" viewBox="0 0 126 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="126" height="44" fill="#020202"/>
          <path d="M8.952 12.176L14.472 29H18.984L22.104 17.648L25.128 29H29.664L35.208 12.176H30.696L27.528 24.344L24.336 12.176H20.04L16.872 24.344L13.68 12.176H8.952ZM36.6711 12.176V29H50.1831V25.496H41.0631V22.328H49.0791V18.824H41.0631V15.68H49.9431V12.176H36.6711ZM70.7576 29H75.4376L68.3816 12.176H63.8696L56.6456 29H61.1576L62.3336 26.024H69.6056L70.7576 29ZM63.6536 22.664L66.0056 16.664L68.3096 22.664H63.6536ZM92.0321 29L88.5281 23.504C90.4721 22.496 91.5281 20.624 91.5281 18.08C91.5281 14.336 88.9841 12.176 84.5201 12.176H76.9601V29H81.3521V24.344H84.5201H84.6161L87.0641 29H92.0321ZM81.3521 15.68H84.5441C86.3201 15.68 87.3521 16.568 87.3521 18.224C87.3521 19.928 86.3201 20.84 84.5441 20.84H81.3521V15.68ZM94.3273 12.176V29H107.839V25.496H98.7193V22.328H106.735V18.824H98.7193V15.68H107.599V12.176H94.3273Z" fill="white"/>
        </svg>
        <h1>HELIX</h1>
        <svg className="svg-2" width="248" height="44" viewBox="0 0 248 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="247.696" height="44" fill="#020202"/>
          <path d="M22.992 30.1395H27.672L20.616 13.3155H16.104L8.88 30.1395H13.392L14.568 27.1635H21.84L22.992 30.1395ZM15.888 23.8035L18.24 17.8035L20.544 23.8035H15.888ZM40.7162 18.4995L42.3722 15.0195C40.6202 13.8915 38.1242 13.1235 35.6522 13.1235C31.5962 13.1235 28.9322 15.1155 28.9322 18.2595C28.9322 24.2115 37.7882 22.4835 37.7882 25.3395C37.7882 26.2275 36.9722 26.7075 35.6762 26.7075C33.9242 26.7075 31.3082 25.6515 29.5802 24.1635L27.8762 27.5955C29.8922 29.2515 32.8202 30.2835 35.6282 30.2835C39.3722 30.2835 42.3962 28.5315 42.3962 25.0995C42.3962 19.0515 33.5402 20.6355 33.5402 17.8515C33.5402 17.0835 34.2362 16.6995 35.2922 16.6995C36.6842 16.6995 38.9402 17.4915 40.7162 18.4995ZM50.1711 13.3155V30.1395H54.5631V13.3155H50.1711ZM57.8351 13.3155V30.1395H61.9391V20.0595L69.5711 30.1395H73.4111V13.3155H69.3311V23.4435L61.6991 13.3155H57.8351ZM83.9503 13.3155H76.7023V30.1395H83.7823C89.2303 30.1395 92.9023 26.7315 92.9023 21.7155C92.9023 16.7235 89.2783 13.3155 83.9503 13.3155ZM84.0703 26.5875H81.0943V16.8915H83.8543C86.5183 16.8915 88.4143 18.8595 88.4143 21.7635C88.4143 24.6435 86.6143 26.5875 84.0703 26.5875ZM95.0773 13.3155V30.1395H99.4693V13.3155H95.0773ZM101.061 13.3155L107.589 30.1395H112.149L118.725 13.3155H114.213L109.989 25.4835L105.789 13.3155H101.061ZM120.32 13.3155V30.1395H124.712V13.3155H120.32ZM135.232 13.3155H127.984V30.1395H135.064C140.512 30.1395 144.184 26.7315 144.184 21.7155C144.184 16.7235 140.56 13.3155 135.232 13.3155ZM135.352 26.5875H132.376V16.8915H135.136C137.8 16.8915 139.696 18.8595 139.696 21.7635C139.696 24.6435 137.896 26.5875 135.352 26.5875ZM150.463 23.0835V13.3155H146.071V23.0835C146.071 27.5235 149.119 30.3315 153.871 30.3315C158.599 30.3315 161.575 27.5235 161.575 23.0835V13.3155H157.183V23.0835C157.183 25.2675 155.839 26.5875 153.895 26.5875C151.903 26.5875 150.463 25.2435 150.463 23.0835ZM176.437 30.1395H181.117L174.061 13.3155H169.549L162.325 30.1395H166.837L168.013 27.1635H175.285L176.437 30.1395ZM169.333 23.8035L171.685 17.8035L173.989 23.8035H169.333ZM182.64 13.3155V30.1395H194.16V26.3955H187.032V13.3155H182.64Z" fill="white"/>
        </svg>
        <svg className="svg-3" width="140" height="44" viewBox="0 0 140 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="140" height="44" fill="#020202"/>
          <path d="M23.5115 28.9577H28.1915L21.1355 12.1337H16.6235L9.39953 28.9577H13.9115L15.0875 25.9817H22.3595L23.5115 28.9577ZM16.4075 22.6217L18.7595 16.6217L21.0635 22.6217H16.4075ZM41.2357 17.3177L42.8917 13.8377C41.1397 12.7097 38.6437 11.9417 36.1717 11.9417C32.1157 11.9417 29.4517 13.9337 29.4517 17.0777C29.4517 23.0297 38.3077 21.3017 38.3077 24.1577C38.3077 25.0457 37.4917 25.5257 36.1957 25.5257C34.4437 25.5257 31.8277 24.4697 30.0997 22.9817L28.3957 26.4137C30.4117 28.0697 33.3397 29.1017 36.1477 29.1017C39.8917 29.1017 42.9157 27.3497 42.9157 23.9177C42.9157 17.8697 34.0597 19.4537 34.0597 16.6697C34.0597 15.9017 34.7557 15.5177 35.8117 15.5177C37.2037 15.5177 39.4597 16.3097 41.2357 17.3177ZM65.5946 12.1337H61.2026L57.3146 19.3577L53.3306 12.1337H48.9386L55.1306 23.7017V28.9577H59.5226V23.5817L65.5946 12.1337ZM74.8082 12.0137C69.6002 12.0137 65.7122 15.6377 65.7122 20.5337C65.7122 25.4537 69.6002 29.1497 74.8082 29.1497C80.0162 29.1497 83.9042 25.4537 83.9042 20.5337C83.9042 15.6617 80.0162 12.0137 74.8082 12.0137ZM74.8562 15.7577C77.3762 15.7577 79.3922 17.8217 79.3922 20.5577C79.3922 23.2937 77.3762 25.4057 74.8562 25.4057C72.3602 25.4057 70.2242 23.2937 70.2242 20.5577C70.2242 17.8217 72.3362 15.7577 74.8562 15.7577ZM90.1852 21.9017V12.1337H85.7932V21.9017C85.7932 26.3417 88.8412 29.1497 93.5932 29.1497C98.3212 29.1497 101.297 26.3417 101.297 21.9017V12.1337H96.9052V21.9017C96.9052 24.0857 95.5612 25.4057 93.6172 25.4057C91.6252 25.4057 90.1852 24.0617 90.1852 21.9017ZM105.119 24.9977C103.919 24.9977 103.079 25.8377 103.079 27.0617C103.079 28.2857 103.919 29.1497 105.119 29.1497C106.319 29.1497 107.183 28.2857 107.183 27.0617C107.183 25.8377 106.319 24.9977 105.119 24.9977Z" fill="white"/>
        </svg>

        <div className="myListRoot2 link-wrapper">
          <div className="myListItem2 link-item">
            <Link 
              to='/clothing'>
              CLOTHING
              <img style={{ display: "none" }} src={homeClothing} alt="homeClothing"/>
            </Link>
          </div>
          <svg width="64" height="108" viewBox="0 0 64 108" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0H63.5L14 108H0.5L50 0Z" fill="black"/>
          </svg>
          <div className="myListItem2 link-item">
          <Link   
              to='/sneakers'>
              SNEAKERS
              <img style={{ display: "none" }} src={homeSneakers} alt="homeSneakers"/>
            </Link>
          </div>
        </div>
        <ImageDistort
          styles={{ zIndex: 1 }}
          listRoot={".myListRoot2"}
          itemRoot={".myListItem2"}
          options={{
            strength: 0.5,
            effect: "stretch",
              geometry: {
                shape: "circle",
                radius: 0.5,
                segments: 128
              }
          }}
        >
        </ImageDistort>
      </div>
    </div>
  );
}
export default App;
