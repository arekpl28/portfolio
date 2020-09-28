import React from "react";

import NavigationList from "../navigation/NavigationListItem";
import SocialMedia from "../SocialMedia";

import { SOCIAL_MEDIA, ICONS } from "../../utils/constant";

import {
  H4,
  H5,
  Wrapper,
  Div,
  Wrap,
  Content,
  LogoFooter,
  Contact,
  DivContentWrapper,
  Info,
  Menu,
  NavFooter,
  Subscribe,
  InputFooter,
  ButtonFooter,
  DivWrapperSocialMedia,
} from "./Footer.css";

export default function Footer() {
  return (
    <>
      <Wrapper>
        <Div>
          <LogoFooter exact to="/">
            Logo
          </LogoFooter>
          <Wrap>
            <Content>
              <DivContentWrapper>
                <Contact>
                  <H4>Contact Information</H4>
                  <Info
                    target="blank"
                    href="https://www.google.com/maps/place/Lillehammer/@61.1153437,10.4618682,15.75z/data=!4m5!3m4!1s0x466a62a7f7b5288d:0x32273ad34a5bed34!8m2!3d61.1152713!4d10.4662306"
                  >
                    <i className={ICONS.MAP}></i>
                    <div>
                      <H5>Address</H5>
                      <p>Norway</p>
                    </div>
                  </Info>
                  <Info href={SOCIAL_MEDIA.TELEFON}>
                    <i className={ICONS.PHONE}></i>
                    <div>
                      <H5>Phone</H5>
                      <p>+47 988 60 889</p>
                    </div>
                  </Info>
                  <Info href={SOCIAL_MEDIA.EMAIL}>
                    <i className={ICONS.EMAIL}></i>
                    <div>
                      <H5>Email</H5>
                      <p>arekpl28@wp.pl</p>
                    </div>
                  </Info>
                </Contact>
              </DivContentWrapper>
              <DivContentWrapper>
                <Menu>
                  <H4>Menu</H4>
                  <NavFooter>
                    <NavigationList></NavigationList>
                  </NavFooter>
                </Menu>
              </DivContentWrapper>
              <DivContentWrapper>
                <Subscribe>
                  <H4>Subscribe More Info</H4>
                  <InputFooter placeholder="Enter your e-mail" type="email" />
                  <ButtonFooter>Subscribe</ButtonFooter>
                </Subscribe>
              </DivContentWrapper>
            </Content>
            <DivWrapperSocialMedia>
              <SocialMedia></SocialMedia>
            </DivWrapperSocialMedia>
          </Wrap>
        </Div>
      </Wrapper>
    </>
  );
}
