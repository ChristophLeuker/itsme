import React, { useEffect, useState } from "react";
import Parser from "rss-parser";

export default function RssFeedDartn() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchRSSFeed = async () => {
      try {
        const parser = new Parser();
        const feed = await parser.parseURL(
          "https://www.dartn.de/js/news.js.asp?cat=D4D898B9-94E4-4E67-B2B7-E9C871B66AEB&top=6"
        );
        setItems(feed.items);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRSSFeed();
  }, []);
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div key={item.guid}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
