import React from "react";
import { SOCIAL_MEDIA } from "../utils/constant";
import { Social } from "./style/SocialMedia.css";

const social = [
  {
    id: 0,
    iconName: "fab fa-facebook-f",
    href: SOCIAL_MEDIA.FACEBOOK,
    target: "blank",
  },
  {
    id: 1,
    iconName: "fab fa-instagram",
    href: SOCIAL_MEDIA.INSTAGRAM,
    target: "blank",
  },
  {
    id: 2,
    iconName: "fab fa-twitter",
    href: SOCIAL_MEDIA.TWITTER,
    target: "blank",
  },
  {
    id: 3,
    iconName: "fab fa-linkedin-in",
    href: SOCIAL_MEDIA.LINKEDIN,
    target: "blank",
  },
  {
    id: 4,
    iconName: "far fa-envelope",
    href: SOCIAL_MEDIA.EMAIL,
  },
  {
    id: 5,
    iconName: "fas fa-phone",
    href: SOCIAL_MEDIA.TELEFON,
  },
];

export default function SocialMedia() {
  const socialList = social.map((item) => (
    <a target={item.target} href={item.href}>
      <i className={item.iconName}></i>
    </a>
  ));
  return <Social>{socialList}</Social>;
}
