import * as React from "react";
import styled from "styled-components";
import * as PropTypes from "prop-types";
import Blockie from "./Blockie";
import Banner from "./Banner";

import ImgProject from "../assets/img/project/img.png"
import logo from "../assets/img/LOGO.png"
import twitter from "../assets/img/header/Vector.png"
// import twitter from "../assets/img/header/icon_01.svg"
// import twitter from "../assets/img/header/icon_01.svg"
// import twitter from "../assets/img/header/icon_01.svg"

import Marquee from "react-fast-marquee";

import { ellipseAddress, getChainData } from "../helpers/utilities";
import { transitions } from "../styles";
import '../assets/css/roadmap.css'
import RoadmapStep from "./RoadmapStep";

interface IHeaderStyle {
  connected: boolean;
}

const SAddress = styled.p<IHeaderStyle>`
  transition: ${transitions.base};
  font-weight: bold;
  margin: ${({ connected }) => (connected ? "-2px auto 0.7em" : "0")};
`;


interface IHeaderProps {
  killSession: () => void;
  connected: boolean;
  address: string;
  chainId: number;
}

const Roadmap = () => {
  const roadmaps = [
    { title: "The Reward", content: "We will reward those who support and believe in the project and help grow the community, share information or inspire good ideas with many surprises: \nfree sweatshirt and special gifts both physical and digital. "},
    { title: "The Charity", content: "MetaBoys believes in contributing to society and helping to create a better world. You too can participate in a cause to change the world by donating $50,000 to one of 3 causes selected by the community: Humanitarian, Animal or Environmental."},
    { title: "The Knowledge ", content: `MetaBoys understands that knowledge is power. We will provide exclusive access to a maximum of information in the biggest fields: ENTREPRENEURSHIP, NFT, CRYPTO, ECOM, INVESTMENT, STARTUP. We have selected the biggest minds in the entrepreneurial world to bring you the latest information.
 
    Members who will teach the community include, startup founders, renowned investors, whales, entrepreneurs and NFT collectors.
    
    We will also provide knowledge sharing through access to online courses, Zooms, private groups, and more. 
    `},
    { title: "The Funding  ", content: `We will help you realize your biggest entrepreneurial dreams. We will select three community projects that we will fund. 
    We plan on investing between $100,000 to $400,000 to fund these projects.
    
    Community members will have the opportunity to invite others to join.  `},
    { title: "The Meetings ", content: `We will start to held meetings in the Metaverse, where one of the largest and strongest ecosystems of entrepreneurs will be created exclusively for HOLDERS. A VIP area where the whole community can meet will be available, as will an online shop where you can purchase some of the best outfits and be the most stylish in the Metaverse. 

    You will also be able to customize your virtual characters in your own image, and will have free clothing options to choose from every 3 months: to be selected in the SHOP.`},
    { title: "The Events ", content: `We will give TOTALLY FREE ACCESS to a variety of online and physical Private Mastermind events and some of them be held in some of the best cities 
    in the world: LOS ANGELES, MIAMI, NEW YORK, PARIS, and DUBAI...
    
    Members will enjoy free access to the PRIVATE PARTIES and luxury activities   where they will meet some of the best businessmen around. 
    `}];
  return (
    <section className="product-category section" id="the-roadmap">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title text-center">
            <h1 className="HeadingNow"><span>ROADMAP</span></h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-11 mx-auto">
            { roadmaps.map((roadmap, i) => <RoadmapStep index={i+1} title={roadmap['title']} content={roadmap['content']} />) }
          </div>
        </div>
      </div>
    </section>
  );
};

// Header.propTypes = {
//   killSession: PropTypes.func.isRequired,
//   address: PropTypes.string,
// };

export default Roadmap;
