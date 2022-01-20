import * as React from "react";
import styled from "styled-components";
import * as PropTypes from "prop-types";
import Blockie from "./Blockie";
import Banner from "./Banner";
import ImgLoading2 from '../assets/img/section/20.png'
import ImgLoading3 from '../assets/img/section/40.png'
import ImgLoading4 from '../assets/img/section/60.png'
import ImgLoading5 from '../assets/img/section/80.png'
import ImgLoading6 from '../assets/img/section/100.png'

import ImgProject from "../assets/img/project/img.png"
import logo from "../assets/img/LOGO.png"
import twitter from "../assets/img/header/Vector.png"

import { transitions } from "../styles";
import '../assets/css/roadmap.css'

interface IHeaderStyle {
  connected: boolean;
}

const SAddress = styled.p<IHeaderStyle>`
  transition: ${transitions.base};
  font-weight: bold;
  margin: ${({ connected }) => (connected ? "-2px auto 0.7em" : "0")};
`;


interface IRoadmapStepProps {
  index: number;
  title: string;
  content: string;
}

const RoadmapStep = (props: IRoadmapStepProps) => {
  const loadings = [ImgLoading2, ImgLoading3, ImgLoading4, ImgLoading5, ImgLoading6 ];
  const { index , title, content } = props;
  const LoadingStyle = index%2===0 ? { left: "60px" } : { right: "60px" }
  const total = 2*3.14*30;
  const percentage = (index-1)*20
  const start = total*(100-percentage)/100.0;
  return (
    <div className={`roadmap-item ${index%2 === 0 ? 'mleft' : 'mright'}`}>
      <span className="index">{index}</span>
      <div>
        <svg width="76" height="76" style={LoadingStyle} className={`loading-${index}`}>
          <g transform="rotate(-90 38 38)">
            <circle r="30" cx="38" cy="38" fill="transparent" stroke="lightgrey" stroke-width="8" stroke-linecap="round" stroke-dasharray={total} stroke-dashoffset="0"></circle>
            <circle r="30" cx="38" cy="38" fill="transparent" stroke="#FF007A" stroke-width="8" stroke-linecap="round" stroke-dasharray={total} stroke-dashoffset={start}> 
            </circle>
          </g>
          <text x="50%" y="50%" fill="#ffffff" dominant-baseline="central" text-anchor="middle">{percentage}%</text>
        </svg>
        <h1 className="p-title HeadingNow">{title}</h1>
        <p className="p-desc e-ukraine">{content} </p>
      </div>
    </div>
  );
};

RoadmapStep.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default RoadmapStep;
