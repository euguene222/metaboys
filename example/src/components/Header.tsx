import * as React from "react";
import styled from "styled-components";
import * as PropTypes from "prop-types";
import Blockie from "./Blockie";
import Banner from "./Banner";

import BannerBack from "../assets/img/header/background.png"
import logo from "../assets/img/LOGO.png"
import twitter from "../assets/img/header/vec1.png"
import vec2 from "../assets/img/header/vec2.png"
import vec3 from "../assets/img/header/vec3.png"
import vec4 from "../assets/img/header/vec4.png"

import { ellipseAddress, getChainData } from "../helpers/utilities";
import { transitions } from "../styles";
import '../assets/css/header.css'


interface IHeaderStyle {
  connected: boolean;
}

const SAddress = styled.p<IHeaderStyle>`
  transition: ${transitions.base};
  font-weight: bold;
  margin: ${({ connected }) => (connected ? "-2px auto 0.7em" : "0")};
`;

// const SDisconnect = styled.div<IHeaderStyle>`
//   transition: ${transitions.button};
//   font-size: 12px;
//   font-family: monospace;
//   position: absolute;
//   right: 0;
//   top: 20px;
//   opacity: 0.7;
//   cursor: pointer;

//   opacity: ${({ connected }) => (connected ? 1 : 0)};
//   visibility: ${({ connected }) => (connected ? "visible" : "hidden")};
//   pointer-events: ${({ connected }) => (connected ? "auto" : "none")};

//   &:hover {
//     transform: translateY(-1px);
//     opacity: 0.5;
//   }
// `;

interface IHeaderProps {
  killSession: () => void;
  connected: boolean;
  address: string;
  chainId: number;
}

const Header = (props: IHeaderProps) => {
  const { connected, address, chainId, killSession } = props;
  const chainData = chainId ? getChainData(chainId) : null;
  return (
    <section className="top-header">
      <img className="top-back" alt="background" src={BannerBack} />
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-xs-12 col-sm-4">
            <div className="social-icons">
              <a className="p-2" href="https://inovatim.devop360.com/meta-boys/!#"> <img alt="twitter" src={twitter} /> </a>
              <a className="p-2" href="https://inovatim.devop360.com/meta-boys/!#"> <img alt="twitter" src={vec2} /> </a>
              <a className="p-2" href="https://inovatim.devop360.com/meta-boys/!#"> <img alt="twitter" src={vec3} /> </a>
              <a className="p-2" href="https://inovatim.devop360.com/meta-boys/!#"> <img alt="twitter" src={vec4} /> </a>
            </div>
          </div>
          <div className="col-md-4 col-xs-12 col-sm-4">
            <div className="logo text-center">
              <a href="https://inovatim.devop360.com/meta-boys/index.html"> <img alt="logo" src={logo} /> </a>
            </div>
          </div>
          <div className="col-md-4 col-xs-12 col-sm-4">
            <div id="menu">
              <ul className="list-group">
                <li className="list-group-item">
                  <span>{ address }</span><br/>
                  <a className="item active" href="https://inovatim.devop360.com/meta-boys/#">Disconnect</a>
                </li>
                <li className="list-group-item"><a className="item active" href="https://inovatim.devop360.com/meta-boys/#">mint</a></li>
                <li className="list-group-item"><a className="item" href="https://inovatim.devop360.com/meta-boys/#">roadmap</a></li>
                <li className="list-group-item"><a className="item" href="https://inovatim.devop360.com/meta-boys/#">team</a></li>
                <li className="list-group-item"><a className="item" href="https://inovatim.devop360.com/meta-boys/#">faq</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row desc">
          <div className="col-lg-8 col-xl-8 col-xxl-6 text-left">
            <h2 data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".5">
              NFT collection of 10101 boys categorized in different levels of rarity
            </h2>
            <div className="header-mint-part">
              <button className="header-mint btn" >mint</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Header.propTypes = {
  killSession: PropTypes.func.isRequired,
  address: PropTypes.string,
};

export default Header;
