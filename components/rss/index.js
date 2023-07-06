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
    background-color: grey;
    border: solid black 2px;
    height: fit-content;
    width: 90%;
    gap: 10px;
    margin: 10px;
    border-radius: 20px;
  `;

  const Headline = styled.h2`
    text-align: center;
  `;

  const PubDate = styled.p`
    text-align: center;
    margin-top: -20px;
  `;

  const Content = styled.p`
    text-align: block;
  `;

  const StyledLink = styled(Link)`
    color: black;
    &:visited {
      color: black;
    }
  `;

  return (
    <>
      {items.map((item) => (
        <StyledContainer key={item.guid}>
          <StyledLink href={item.link}>
            <Headline>{item.title}</Headline>
          </StyledLink>
          <PubDate>{item.pubDate}</PubDate>
          <Content>{item.content}</Content>
        </StyledContainer>
      ))}
    </>
  );
}
