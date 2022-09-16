import styled from "styled-components";
import { Link } from "react-router-dom";

export const Footer2Container = styled.div`
  background-color: #0D0D0D;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px){
    padding-top: 32px;
  }
`

export const FooterLinksWrapper =  styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

export const FooterLinksItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 30px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px){
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`

export const FooterLink = styled(Link)`
  color: #8E8E8E;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover { 
    color: #473B90;
    transition: 0.3s ease-out
  }
`

export const FooterSocial = styled.a`
  color: #8E8E8E;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover { 
    color: #473B90;
    transition: 0.3s ease-out
  }
`