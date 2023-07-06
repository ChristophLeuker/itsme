import Link from "next/link";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function RssFeedDartn() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/newsfeed");
        const data = await response.json();
        setItems(data.items);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const StyledContainer = styled.div`
    display: flex;

    flex-direction: column;
    background-color: var(--background-card-color);
    border: solid black 2px;
    height: fit-content;
    width: 80%;
    gap: 10px;
    margin-left: 17%;
    margin-right: 10px;
    margin-top: 10px;
    border-radius: 20px;
  `;

  const Headline = styled.h3`
    text-align: center;
  `;

  const PubDate = styled.p`
    text-align: center;
    margin-top: -20px;
  `;

  const Content = styled.p`
    text-align: block;
    margin: 10px;
  `;

  const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    &:visited {
      color: black;
    }
  `;
  const Header = styled.h2`
    text-align: center;
    margin-top: -60px;
    font-size: 1rem;
  `;

  return (
    <>
      <Header>Newsfeed from Dartn.de</Header>
      {items.map((item) => {
        const date = new Date(item.pubDate);
        const customDate = date.toLocaleString("de-DE", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        });

        return (
          <StyledContainer key={item.guid}>
            <StyledLink href={item.link} target="_blank">
              <Headline>{item.title}</Headline>
            </StyledLink>
            <PubDate>{customDate}</PubDate>
            <Content>{item.content}</Content>
          </StyledContainer>
        );
      })}
    </>
  );
}
