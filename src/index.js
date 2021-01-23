const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
const port = process.env.PORT||8080;

const fetchJSON = (url) => fetch(url).then((res) => res.json());
const baseUrl = "https://xkcd.com";

app.use(cors());

app.get("/", async (req, res) => {
  const url = `${baseUrl}/info.0.json`;
  const data = await fetchJSON(url);
  return res.json(data);
});

app.get("/:comicId", async (req, res) => {
  const url = `${baseUrl}/${req.params.comicId}/info.0.json`;
  const data = await fetchJSON(url);
  return res.json(data);
});

app.listen(port, () => {
  console.log(`App listening at ${port}`);
});
