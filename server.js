const express = require("express");
const hbs = require("express-handlebars");
const app = express();
const port = 8999;
app.engine(
  "hbs",
  hbs.engine({
    extname: ".hbs",
    defaultLayout: "main",
    layoutsDir: "./views/layouts",
  })
); // hbs.engine({extname : '.hbs',defaultLayout: 'main', layoutsDir : './views/layouts/'})
app.set("view engine", ".hbs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, (err) => {
  if (err) throw err;
});
