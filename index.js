const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const cors = require("cors");
const routes = require("./routes");

const app = express();
app.use(express.static(__dirname + "/uploads"));
app.use('/doc', express.static(path.join(__dirname, "doc")));
app.use(cors());
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    limit: "150mb",
    extended: true,
  })
);

app.use(passport.initialize());
require('./middleware/passport')(passport)


app.use("/api", routes);

app.listen(9001, () => console.log(`Server running on port 9001`));
