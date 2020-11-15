import React from "react";
import styled from "styled-components";
import logo from "../../styles/img/blueLogo.png";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const St = {
  Footer: styled.footer`
    display: block;
    width: 100%;
    height: 100%;
    /* height: 120px; */
    background-color: white;
    padding: 20px 0;
    @media ${({ theme }) => theme.tablet} {
      display: none;
    }
  `,
  Container: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    max-width: 1360px;
    margin: 0 auto;
    padding: 0 20px;

    @media ${({ theme }) => theme.tablet} {
      display: block;
      max-width: 950px;
    }
  `,
  MainLink: styled.a`
    display: block;
    background-image: ${({ logo }) => `url(${logo})`};
    background-repeat: no-repeat;
    /* background-position: center; */
    background-size: contain;
    color: transparent;
    width: 130px;
    height: 30px;
  `,
  Description: styled.p`
    font-weight: 600;
    font-size: 0.9rem;
    color: gray;
    height: 85px;
    margin-top: 10px;
    /* margin-left: 250px; */
  `,
  DescSpan: styled.span`
    display: block;
    height: 30px;
  `,
  ContactContainer: styled.address`
    display: flex;
    flex-direction: column;
    /* margin-left: 250px; */
  `,
  LinkTag: styled.a`
    display: flex;
    align-items: center;
    color: black;
    text-decoration: none;
    /* margin-top: 5px; */
    height: 30px;
  `,
  LinkSpan: styled.span`
    display: block;
    margin-left: ${({ marginLeft }) => marginLeft || "8px"};
    font-weight: 600;
    font-size: 0.9rem;
    height: 20px;
    /* line-height: 1.5rem; */
    color: gray;
  `,
};

const Footer = () => {
  return (
    <St.Footer>
      <St.Container>
        <St.MainLink href="/" logo={logo} title={"메인으로 이동"} />
        <St.Description>
          <St.DescSpan>Upbit Clone Project - Downbit</St.DescSpan>
          <St.DescSpan>Created by Seongkyun Yu</St.DescSpan>
          <St.DescSpan>
            Copyright © 2020 DOWNBIT INC. ALL RIGHTS RESERVED.
          </St.DescSpan>
        </St.Description>
        <St.ContactContainer>
          <ul>
            <li>
              <St.LinkTag>
                <St.LinkSpan marginLeft={"0px"}>Contact Me</St.LinkSpan>
              </St.LinkTag>
            </li>
            <li>
              <St.LinkTag href="https://github.com/Seongkyun-Yu/upbit-clone">
                <FontAwesomeIcon icon={faGithub} size="lg" />
                <St.LinkSpan>github.com/Seongkyun-Yu/upbit-clone</St.LinkSpan>
              </St.LinkTag>
            </li>
            <li>
              <St.LinkTag href="mailto:ysungkyun@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
                <St.LinkSpan>ysungkyun@gmail.com</St.LinkSpan>
              </St.LinkTag>
            </li>
          </ul>
        </St.ContactContainer>
      </St.Container>
    </St.Footer>
  );
};

export default Footer;
