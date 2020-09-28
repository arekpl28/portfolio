import React from "react";

import Card from "./Card";

import { SOCIAL_MEDIA, ICONS } from "../../../utils/constant";

import { CardContainer } from "./ContactCard.css";

const card = [
  {
    id: 0,
    icon: ICONS.SMARTPHONE,
    title: "Phone",
    description: "Call customer service 0800 123 456",
    linkTitle: "Call",
    href: SOCIAL_MEDIA.TELEFON,
  },
  {
    id: 1,
    icon: ICONS.MAP,
    title: "Address",
    description: "2246 Cambrige Court springdale",
    linkTitle: "Map",
    href: "https://www.google.pl/maps/@61.1208869,10.4273293,13z",
  },
  {
    id: 2,
    icon: ICONS.EMAIL,
    title: "Email",
    description: "arekpl28@wp.pl",
    linkTitle: "Message",
    href: SOCIAL_MEDIA.EMAIL,
  },
];

export default function ContactCard() {
  const cardList = card.map((item) => (
    <Card
      key={item.id}
      icon={item.icon}
      title={item.title}
      description={item.description}
      linkTitle={item.linkTitle}
      href={item.href}
    ></Card>
  ));
  return (
    <>
      <CardContainer>{cardList}</CardContainer>
    </>
  );
}