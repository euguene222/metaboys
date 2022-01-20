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
import '../assets/css/project.css'

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

const Project = () => {
  return (
    <section className="product-category section" id="the-projects">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="title text-center">
                    <h1 className="HeadingNow"><span>THE PROJECT</span></h1>
                    </div>
                </div>
                <div className="col-md-6">
                  <div className="project-back">
                    <img alt="Project" src={ImgProject}/>
                  </div>
                    <div className="p-desc e-ukraine category-box project-content">
                    <p>
                        MetaBoys represents a NFT collection of <b>10101</b> boys
                        categorized in different levels of rarity. These are stored on
                        the Ethereum blockchain and hosted on IPFS. They boast the first
                        collection of high-quality <b>3D human</b> models, and have a
                        range of styles, expressions, outfits, and over 200 other
                        features.
                    </p>

                    <p>
                        MetaBoys also contains the most stylish avatars in the
                        Metaverse.
                    </p>

                    <p>
                        Each NFT provides access to the world's most exclusive business
                        community, where dedicated entrepreneurs and investors, wanting
                        to learn from the best in their fields can be found.
                    </p>

                    <p>
                        The community plays host to all NFT enthusiasts,
                        Crypto-currency, investments, among others. Here, access to
                        exclusive information, networking events, masterminds in the
                        world's largest cities, and renowned guests are just part of the
                        package.
                    </p>
                    </div>
                </div>
            </div>
        </div>
        <Marquee className="Kiona">
            <span>meta boys meta boys meta boys meta boys meta boys meta boys meta boys meta boys</span>
            <span>meta boys meta boys meta boys meta boys meta boys meta boys meta boys meta boys</span> 
            <span>meta boys meta boys meta boys meta boys meta boys meta boys meta boys meta boys</span> 
        </Marquee>
    </section>
  );
};

// Header.propTypes = {
//   killSession: PropTypes.func.isRequired,
//   address: PropTypes.string,
// };

export default Project;
