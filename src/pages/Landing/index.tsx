import React from "react";
import { Link } from "react-router-dom";

import landingImg from "../../assets/images/landing.svg" ;

import {
  PageWrapper
} from "./styled";

function Landing() {
  return (
      <PageWrapper>
        <img src={landingImg} alt="Semear"/>
        Landing Page
      </PageWrapper>
  );
};

export default Landing;