import React from "react";

import Card from "./Card";

import { ICONS } from "../../../utils/constant";

import { CardContainer } from "./ContactCard.css";

const card = [
  {
    id: 0,
    icon: ICONS.SMARTPHONE,
    title: "Phone",
    description: "Call customer service 0800 123 456",
    linkTitle: "Call",
  },
  {
    id: 1,
    icon: ICONS.MAP,
    title: "Address",
    description: "2246 Cambrige Court springdale",
    linkTitle: "Map",
  },
  {
    id: 2,
    icon: ICONS.EMAIL,
    title: "Email",
    description: "arekpl28@wp.pl",
    linkTitle: "Message",
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
    ></Card>
  ));
  return (
    <>
      <CardContainer>{cardList}</CardContainer>
    </>
  );
}
