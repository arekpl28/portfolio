import React, { useContext } from "react";

import { DataContext } from "../../context/DataProvider";
import Card from "./Card";

import { SOCIAL_MEDIA, ICONS, CONTACT } from "../../utils/constant";

import { CardContainer } from "./ContactCard.css";

const card = [
  {
    id: 0,
    icon: ICONS.SMARTPHONE,
    title: "Phone",
    description: CONTACT.PHONE,
    linkTitle: "Call",
    href: SOCIAL_MEDIA.TELEFON,
  },
  {
    id: 1,
    icon: ICONS.MAP,
    title: "Address",
    description: "Lillehammer Norway",
    linkTitle: "Map",
    href: "https://www.google.pl/maps/@61.1208869,10.4273293,13z",
  },
  {
    id: 2,
    icon: ICONS.EMAIL,
    title: "Email",
    description: CONTACT.EMAIL,
    linkTitle: "Message",
    href: SOCIAL_MEDIA.EMAIL,
  },
];

export default function ContactCard() {
  const { t } = useContext(DataContext);
  const cardList = card.map((item) => (
    <Card
      key={item.id}
      icon={item.icon}
      title={t(item.title)}
      description={item.description}
      linkTitle={t(item.linkTitle)}
      href={item.href}
    ></Card>
  ));
  return (
    <>
      <CardContainer>{cardList}</CardContainer>
    </>
  );
}
