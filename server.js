const express = require("express");
const bodyParser = require("body-parser");
const { join } = require("path");

const port = 8000;

const app = express();

// `bodyParser` json files to receive files from the clients
app.use(bodyParser.json());
// Persist url
app.use(bodyParser.urlencoded({extended: true}));
app.use("*", (req, res, next) => {
  // logger
  const time = new Date();
  console.log(`${req.method} to ${req.originalUrl} at ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`);
  next();
});

// requested files
app.get("/index.bundler.js", (req, res) => {
  // If the receiving browser accepts brotli-compressed files, send to browser
  if (req.header("Accept-Encoding").includes("br")) {
    console.log("calling brotli");

    // Tell the browser what's inside that compressed file (optional; recommended)
    res.set("Content-Encoding", "br");
    // Tell the browser we are sending a javascript file (optional; recommended)
    res.set("Content-Type", "application/javascript; charset=UTF-8");
    res.sendFile(join(__dirname, "dist", "index.bundle.js.br"));
  } else if (req.header("Accept-Encoding").includes("gz")) {
    console.log("calling gzip");

    res.set("Content-Encoding", "gzip");
    res.set("Content-Type", "application/javascript; charset=UTF-8");
    res.sendFile(join(__dirname, "dist", "index.bundle.js.gz"));
  } else {
    console.log("calling uncompressed");

    res.sendFile(join(__dirname, "dist", "index.bundle.js"));
  }
});

app.get("/assets.bundle.js", (req, res) => {
  if (req.header("Accept-Encoding").includes("br")) {
    console.log("calling brotli");

    res.set("Content-Encoding", "br");
    res.set("Content-Type", "application/javascript; charset=UTF-8");
    res.sendFile(join(__dirname, "dist", "assets.bundle.js.br"));
  } else if (req.header("Accept-Encoding").includes("gz")) {
    console.log("calling gzip");

    res.set("Content-Encoding", "gzip");
    res.set("Content-Type", "application/javascript; charset=UTF-8");
    res.sendFile(join(__dirname, "dist", "assets.bundle.js.gz"));
  } else {
    console.log("calling uncompressed");

    res.sendFile(join(__dirname, "dist", "assets.bundle.js"));
  }

});

// other general files requested
app.use((req, res) => {
  res.sendFile(join(__dirname, "dist", "index.html"));
});

// app.use((req, res) => {
//   res.sendFile(join(__dirname, "dist", "assets.css"));
// });

// set "0.0.0.0" to make availability for local devices (e.g. phone)
app.listen(port, "0.0.0.0", (req, res) => {
  console.log(`Listening on localhost:${port}`);
});