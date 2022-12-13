require("./config/apm.config");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//Routes
const SearchRouter = require("./routes/search");
const { router: UserRouter } = require("./routes/user");
const ProductRouter = require("./routes/product");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/search", SearchRouter);
app.use("/users", UserRouter);
app.use("/products", ProductRouter);

app.get("/", (req, res) => {
  res.send("Success");
});

app.listen(3000, () => {
  console.log(
    `Ecommerce server running on port = 3000`
  );
});
