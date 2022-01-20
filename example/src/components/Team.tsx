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
import '../assets/css/team.css'
import TeamMate from "./Teammate";

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

const Team = () => {
  const array = [1,2,3,4,5,6,7,8];
  return (
    <section className="product-category section" id="the-team">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title text-center">
            <h1 className="HeadingNow"><span>TEAM</span></h1>
            </div>
          </div>
        </div>
        <div className="row p-desc">
          <p>We have a background in new technologies for over 20 years with several works to its credit on blockchain in 2015, 2016, 2019 and 2021. We generated a total of more than 9 figures in different fields.</p>
          <p>We are experts in network and digital marketing for more than 10 years.</p>
        </div>
        <div className="row">
          {array.map((data, i) => <TeamMate name="Jone Doe" position="Founder" />)}
        </div>
      </div>
    </section>
  );
};

// Header.propTypes = {
//   killSession: PropTypes.func.isRequired,
//   address: PropTypes.string,
// };

export default Team;
