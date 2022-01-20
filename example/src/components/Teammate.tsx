import * as React from "react";
import styled from "styled-components";
import * as PropTypes from "prop-types";
import Blockie from "./Blockie";
import Banner from "./Banner";
import ImgTeam from '../assets/img/section/team.png'

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


interface ITeammateProps {
  name: string;
  position: string;
}

const TeamMate = (props: ITeammateProps) => {
  const { name , position } = props;
  return (
    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 team-item">
        <div className="card-img-top">
            <img src={ImgTeam} alt="" className="w-100"/>
        </div>
        <div className="m-card m-shadow">
            <div className="card-text">
                <h5 className="mb-0">{name}</h5>
                <hr />
                <p className="small">{position}</p>
            </div>
        </div>
    </div>
  );
};

TeamMate.propTypes = {
  name: PropTypes.string,
  position: PropTypes.string,
};

export default TeamMate;
