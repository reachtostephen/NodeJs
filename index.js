const express = require("express");

const app = express();

app.use(express.static("public"));
//app.use('/public',express.static("public"));

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("home", {
    title: "Home"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About us"
  });
});

app.get("/products", (req, res) => {
  res.render("products", {
    title: "Women's Collection"
  });
});

app.get("/api", (req, res) => {
  res.json({
    name: "Steve"
  });
});

app.listen(3001);
