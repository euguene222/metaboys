import * as React from "react";
import styled from "styled-components";
import * as PropTypes from "prop-types";
import Blockie from "./Blockie";
import Banner from "./Banner";

import ImgGradient from "../assets/img/gradient.png"
import logo from "../assets/img/LOGO.png"
import twitter from "../assets/img/header/Vector.png"
// import twitter from "../assets/img/header/icon_01.svg"
// import twitter from "../assets/img/header/icon_01.svg"
// import twitter from "../assets/img/header/icon_01.svg"

import Project from './Project'

import { ellipseAddress, getChainData } from "../helpers/utilities";
import { transitions } from "../styles";
import Roadmap from "./Roadmap";
import Team from "./Team";
// import '../assets/css/section.css'

interface IHeaderStyle {
  connected: boolean;
}

const SAddress = styled.p<IHeaderStyle>`
  transition: ${transitions.base};
  font-weight: bold;
  margin: ${({ connected }) => (connected ? "-2px auto 0.7em" : "0")};
`;


interface ISectionProps {
  killSession: () => void;
  connected: boolean;
  address: string;
  chainId: number;
}

const Section = (props: ISectionProps) => {
  const { connected, address, chainId, killSession } = props;
  const chainData = chainId ? getChainData(chainId) : null;
  return (
    <section id="main-section">
      <img className="main-gradient" alt="Gradient" src={ ImgGradient } />
      <Project />
      <Roadmap />
      <Team />
    </section>
  );
};

// Header.propTypes = {
//   killSession: PropTypes.func.isRequired,
//   address: PropTypes.string,
// };

export default Section;
