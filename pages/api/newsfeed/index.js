import Parser from "rss-parser";

export default async function handler(req, res) {
  try {
    const parser = new Parser();
    const feed = await parser.parseURL(
      "https://www.dartn.de/rss/news.asp?cat=D4D898B9-94E4-4E67-B2B7-E9C871B66AEB"
    );
    const items = feed.items;

    res.status(200).json({ items });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
