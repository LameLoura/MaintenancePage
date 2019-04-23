require("dotenv").config();

const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.use((req, res, next) => {
  fs.readFile(
    path.join(process.cwd(), "html/index.html"),
    "utf-8",
    (err, data) => {
      if (err) {
        console.error(`failed to load html content ${err.message}`);
      }
      res.send(data);
    }
  );
});

app.listen(process.env.PORT, () => {
  console.log(`application started on port ${process.env.PORT}`);
});
